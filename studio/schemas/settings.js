/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "settings",
  title: "Settings",
  type: "document",
  __experimental_actions: [/* "create", "delete", */ "update", "publish"],
  fields: [
    // SEO
    {
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Site title",
          type: "string",
          description: "Displayed on all pages",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "image",
          title: "Image",
          type: "image",
          description: "Fallback displayed on pages with no SEO image defined",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Settings",
      };
    },
  },
};
