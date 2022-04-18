export type character = {
  char_id: number;
  name: string;
  birthday: string;
  occupation: string;
  img: string;
  status: string;
  appearance: number[];
  nickname: string;
  portrayed: string;
};

export type characters = character[];

export type GetCharactersResponse = {
  data: characters;
};
export type quote = {
  quote_id: number;
  quote: string;
  author: string;
};

export type quotes = quote[];

export type GetQuoteResponse = {
  data: quote;
};

export type GetQuoteResponseParams = {
  author: string;
};
