import { LoadingOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/router";
import { useRandomQuoteByAuthor } from "../logic/hooks/breakingbad";

function Quotes() {
  const router = useRouter();
  const queries = router.query;
  const quote = useRandomQuoteByAuthor(queries.name);
  console.log("quote.data", quote.data);

  if (quote.error) {
    console.log(quote.error);
  }
  if (quote.isLoading) {
    return <LoadingOutlined />;
  }

  return (
    <>
      {quote.isFetching ? (
        <LoadingOutlined />
      ) : (
        <>
          <h3>
            {/* {quote && quote.data && quote.data.length > 0
              ? quote?.data[0]?.quote
              : "there is not any quote from this character"} */}
            {quote?.data && quote?.data[0]?.quote}
          </h3>
        </>
      )}

      <Button onClick={() => quote.refetch()} loading={quote.isFetching}>
        update
      </Button>
    </>
  );
}

export default Quotes;
