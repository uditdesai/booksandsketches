// schemas/schema.js
import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"

// Import both schemas
import info from "./info"
import settings from "./settings"
import book from "./book"
import seoStandard from "./seoStandard"
import genre from "./genre"
import portableText from "./portableText"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    seoStandard,
    genre,
    portableText,
    settings,
    info,
    book,
  ]),
})
