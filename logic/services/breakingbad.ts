import { UseQueryOptions } from "react-query/types/react";
import { breakingbadApi } from "../clients/breakingbad";

import { GetCharactersResponse, quotes } from "../types";

export const getCharacters = async () => {
  const response = await breakingbadApi.get<GetCharactersResponse>(
    "/characters"
  );
  console.log("response", response);
  return response.data;
};
export const getRandomQuoteByAuthor = async (context: any) => {
  console.log("context:", context);
  const response = await breakingbadApi.get<quotes>("/quote/random", {
    params: context.queryKey[1],
  });
  return response.data;
};
