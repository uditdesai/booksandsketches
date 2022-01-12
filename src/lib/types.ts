import * as z from 'zod';

export type ImageCrop = z.infer<typeof ImageCrop>;
export const ImageCrop = z.object({
  _type: z.string(),
  bottom: z.union([z.number(), z.undefined()]),
  left: z.union([z.number(), z.undefined()]),
  top: z.union([z.number(), z.undefined()]),
  right: z.union([z.number(), z.undefined()]),
});

export type ImageDimensions = z.infer<typeof ImageDimensions>;
export const ImageDimensions = z.object({
  _type: z.string(),
  width: z.number(),
  height: z.number(),
  aspectRatio: z.number(),
});

export type Image = z.TypeOf<typeof Image>;
export const Image = z.object({
  id: z.string(),
  src: z.string(),
  alt: z.string().optional(),
  crop: ImageCrop.optional(),
  hotspot: z.any().optional(),
});

export type SEO = z.TypeOf<typeof SEO>;
export const SEO = z.object({
  title: z.string(),
  description: z.string(),
  image: Image
});

export type Book = z.TypeOf<typeof Book>;
export const Book = z.object({
  _id: z.string(),
  title: z.string(),
  author: z.string(),
  slug: z.object({ _type: z.literal('slug'), current: z.string() }),
  thoughts: z.string().optional(),
  sketchIdea: z.string().optional(),
  isFiction: z.boolean(),
  sketch: Image,
  seo: SEO,
});

export type FetchBookArgs = z.TypeOf<typeof FetchBookArgs>;
export const FetchBookArgs = z.object({
  slug: z.string(),
});