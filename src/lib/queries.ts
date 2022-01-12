/* eslint-disable import/no-anonymous-default-export */
import { FetchBookArgs } from './types';

export default {
  book: ({ slug }: FetchBookArgs) => {
    let groq = `{
    _id,
    title,
    author,
    thoughts,
    sketchIdea,
    isFiction,
    sketch->,
    seo->,
    slug,
    }`;

    return `*[_type == 'book' && slug.current == '${slug}'][0]${groq}`;
  },
};