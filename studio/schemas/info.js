/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "info",
  title: "Info page",
  type: "document",
  __experimental_actions: [/* "create", "delete", */ "update", "publish"],
  fields: [
    {
      name: "title",
      title: "Info page title",
      type: "string",
      validation: (Rule) => [Rule.required().error("Field cannot be empty")],
    },
    {
      name: "infoParagraph",
      title: "Info page paragraph",
      type: "text",
      validation: (Rule) => [Rule.required().error("Field cannot be empty")],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Info",
      };
    },
  },
};
