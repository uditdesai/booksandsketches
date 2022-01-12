import sanityClient from "@sanity/client";

const Sanity = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID as string,
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: true, // `false` if you want to ensure fresh data
});

export default Sanity;
