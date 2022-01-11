/* eslint-disable import/no-anonymous-default-export */
import S from "@sanity/desk-tool/structure-builder";

// Add Schema type to hidden
const hiddenDocTypes = (listItem) =>
  !["info", "settings", "book"].includes(listItem.getId());

// Render a custom UI to view siteconfig & pages
// and showing other items except mentioed in the hiddendoctypes
export default () =>
  S.list()
    .title("Content Manager")
    .items([
      S.listItem()
        .title("Settings")
        .child(S.editor().schemaType("settings").documentId("settings")),
      S.divider(),
      S.listItem()
        .title("Info")
        .child(S.editor().schemaType("info").documentId("info")),
      S.divider(),
      S.listItem()
        .title("Books")
        .schemaType("book")
        .child(S.documentTypeList("book")),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
