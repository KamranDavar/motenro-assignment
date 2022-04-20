import { useQuery } from "react-query";
import { getRandomQuoteByAuthor } from "../services/breakingbad";
import { quotes } from "../types";

export function useRandomQuoteByAuthor(author: string | string[] | undefined) {
  return useQuery<quotes, any>(["quote", {author}], getRandomQuoteByAuthor, {
    refetchOnWindowFocus: false,
    // enabled: false,
  });
}
