/* eslint-disable import/no-anonymous-default-export */
//To-do: Annotations should include internal and external links.
export default {
  name: "portableText",
  type: "array",
  of: [
    {
      type: "block",
      styles: [{ title: "Normal", value: "normal" }],
      lists: [],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
        ],
        annotations: [
          {
            name: "link",
            title: "Link",
            type: "object",
            fields: [
              {
                title: "Link",
                name: "link",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ["http", "https", "mailto", "tel"],
                  }),
              },
            ],
          },
        ],
      },
    },
  ],
}
