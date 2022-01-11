/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "book",
  title: "Book",
  type: "document",
  fields: [
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
      const { title, author } = selection;

      return {
        title,
        subtitle: author,
      };
    },
  },
};
