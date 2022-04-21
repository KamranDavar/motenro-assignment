import { LoadingOutlined } from "@ant-design/icons";
import { Alert, Button, message, Space } from "antd";
import Link from "next/link";
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
    <div className="quote">
      <section className="message" >
        {isFetching ? (
          <LoadingOutlined />
        ) : (
          <h3>
            {data && data.length > 0 ? (
              <Alert description={data[0].quote} type="info" />
            ) : (
              <Alert
                description="there is not any quote from this character."
                type="warning"
              />
            )}
          </h3>
        )}
      </section>
      <section className="actions">
        <Space>
          <Button onClick={() => refetch()} loading={isFetching}>
            update
          </Button>
          <Link href="/">
            <a>
              <Button>back</Button>
            </a>
          </Link>
        </Space>
      </section>
    </div>
  );
}

export default Quotes;
