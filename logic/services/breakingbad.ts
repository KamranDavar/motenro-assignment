import { breakingbadApi } from "../clients/breakingbad";
import {
  GetCharactersResponse,
  GetQuoteResponse,
  GetQuoteResponseParams,
} from "../types";

export const getCharacters = async () => {
  const response = await breakingbadApi.get<GetCharactersResponse>(
    "/api/characters"
  );
  return response.data;
};
export const getRandomQuoteByAuthor = async (
  params: GetQuoteResponseParams
) => {
  const response = await breakingbadApi.get<GetQuoteResponse>(
    "/api/quote/random",
    { params }
  );
  return response.data;
};
