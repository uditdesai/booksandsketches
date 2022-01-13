import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const Sanity = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID as string,
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(Sanity)

export function urlFor(source: any) {
  return builder.image(source)
}
