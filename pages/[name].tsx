import { LoadingOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import { useRouter } from "next/router";
import { useRandomQuoteByAuthor } from "../logic/hooks/breakingbad";

function Quotes() {
  const router = useRouter();
  const { name } = router.query;
  const { data, isLoading, isFetching, error, refetch } =
    useRandomQuoteByAuthor(name);

  if (error) {
    message.error(error);
  }

  if (isLoading) {
    return <LoadingOutlined />;
  }

  return (
    <>
      {isFetching ? (
        <LoadingOutlined />
      ) : (
        <h3>
          {data && data.length > 0
            ? data[0].quote
            : "there is not any quote from this character."}
        </h3>
      )}

      <Button onClick={() => refetch()} loading={isFetching}>
        update
      </Button>
    </>
  );
}

export default Quotes;
