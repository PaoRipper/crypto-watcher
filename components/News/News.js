import { Avatar, Card, Col, Row, Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCryptosNews } from "../../redux/crypto/cryptoNewsSlice";
import Loading from "../Loading/Loading";

import demoImage from "../../images/cryptocurrency.png";
import Image from "next/image";

const { Title, Text } = Typography;

const News = (props) => {
  const dispatch = useDispatch();
  const { cryptosNews, loading } = useSelector((state) => state.cryptosNews);
  const cryptoNews = cryptosNews.value;

  useEffect(() => {
    dispatch(getCryptosNews(props.count));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <Row gutter={[26, 26]}>
        {cryptoNews &&
          cryptoNews.map((news, i) => (
            <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable>
                <a href={news.url} target="_blank" rel="noreferrer">
                  <div className="flex">
                    <Title className="" level={4}>
                      {news.name}
                    </Title>
                    <Image
                      src={news?.image?.thumbnail.contentUrl ?? demoImage}
                      alt="news-image"
                    />
                  </div>
                  <p className="my-5">
                    {news.description.length > 100
                      ? `${news.description.substring(0, 100)}...`
                      : news.description}
                  </p>
                  <div className="provider-container">
                    <div>
                      <Avatar
                        src={
                          news.provider[0]?.image?.thumbnail?.contentUrl ||
                          demoImage
                        }
                        alt=""
                      />
                      <Text className="mx-3">{news.provider[0]?.name}</Text>
                    </div>
                    {/* <Text>
                      {moment(news.datePublished).startOf("ss").fromNow()}
                    </Text> */}
                  </div>
                </a>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default News;
