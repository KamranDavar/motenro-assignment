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
export const getRandomQuoteByAuthor = async (params: any) => {
  console.log("params:", params.queryKey[1]);
  const response = await breakingbadApi.get<quotes>("/quote/random", {
    params: params.queryKey[1],
  });
  return response.data;
};
