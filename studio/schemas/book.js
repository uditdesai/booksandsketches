/* eslint-disable import/no-anonymous-default-export */
import { validateSlug } from "../utils/validateSlug"

export default {
  name: "book",
  title: "Book",
  type: "document",
  fields: [
    {
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: validateSlug,
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => [Rule.required().error("Field cannot be empty")],
    },
    {
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule) => [Rule.required().error("Field cannot be empty")],
    },
    {
      title: "Genre",
      name: "bookGenre",
      type: "array",
      of: [{ type: "genre" }],
    },
    {
      name: "rating",
      title: "Rating (out of 10)",
      type: "number",
      validation: (Rule) => [Rule.required().min(1).max(10)],
    },
    {
      name: "isFiction",
      title: "Is it a fiction book?",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "thoughts",
      title: "Thoughts",
      type: "text",
    },
    {
      name: "sketchIdea",
      title: "Sketch idea",
      type: "text",
    },
    {
      name: "sketch",
      title: "Sketch",
      type: "image",
      validation: (Rule) => [Rule.required().error("Field cannot be empty")],
      fields: [
        {
          title: "Alt Text",
          name: "alt",
          type: "string",
          description:
            "Image description for accessibility. This will be read by screen readers to describe the contents of the image.",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      title: "Book color",
      name: "color",
      type: "colorPicker",
    },
    {
      name: "seo",
      title: "SEO",
      type: "seoStandard",
    },
  ],
  preview: {
    select: {
      title: "title",
      author: "author",
    },
    prepare(selection) {
      const { title, author } = selection

      return {
        title,
        subtitle: author,
      }
    },
  },
}
