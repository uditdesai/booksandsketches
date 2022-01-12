import z from 'zod';
import Sanity from './config';
import Queries from './queries';
import { FetchBookArgs, Book } from './types';

const handleSanityResponse = (parser: z.ZodTypeAny) => (response: unknown) => {
  try {
    return parser.parse(response);
  } catch (err) {
    console.error('Sanity response type mismatch', err, response);
    throw err;
  }
};

export const CmsClient: {
  fetchBook(args: FetchBookArgs): Promise<Book>;
} = {
  fetchBook(args: FetchBookArgs) {
    return Sanity.fetch(Queries.book(args)).then(
      handleSanityResponse(Book),
    );
  },
};