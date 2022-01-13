import groq from "groq";

export const bookSlugsQuery = groq`
*[_type == "book"] | order(_createdAt desc) {
  slug
}
`;

export const bookQuery = (slug: string) => groq`
*[_type == 'book' && slug.current == '${slug}'][0]{
  _id,
  title,
  author,
  rating,
  thoughts,
  sketchIdea,
  isFiction,
  color,
  sketch,
  seo,
  slug,
  }
`;

export const booksQuery = groq`
*[_type == 'book']{
  _id,
  title,
  author,
  rating,
  thoughts,
  sketchIdea,
  isFiction,
  color,
  sketch,
  seo,
  slug,
  }
`;

export const infoQuery = groq`
*[_type == 'info'][0]{...}
`