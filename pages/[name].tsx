import { LoadingOutlined } from "@ant-design/icons";
import { Alert, Button, Col, message, Row, Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRandomQuoteByAuthor } from "../logic/hooks/breakingbad";

function Quotes() {
  const router = useRouter();
  const { name } = router.query;
  const { data, isLoading, isFetching, error, refetch, isError } =
    useRandomQuoteByAuthor(name);

  if (isError) {
    message.error(error.message);
  }

  return (
    <Row className="quote">
      <Col xs={24} className="message">
        {isFetching || isLoading ? (
          <LoadingOutlined className="loading" />
        ) : (
          <h3>
            {data && data.length > 0 ? (
              <div className="info">
                <span className="main">{data[0].quote}</span>
                <span className="sub">
                  {data[0].author},{data[0].series}
                </span>
              </div>
            ) : (
              <div className="warning">
                <span className="main">
                  there is not any quote from this character.
                </span>
              </div>
            )}
          </h3>
        )}
      </Col>
      <Col xs={24} className="actions">
        <Space>
          <Button
            type="primary"
            className="refetch"
            onClick={() => refetch()}
            loading={isFetching}
          >
            update
          </Button>
          <Link href="/">
            <a>
              <Button>back</Button>
            </a>
          </Link>
        </Space>
      </Col>
    </Row>
  );
}

export default Quotes;
