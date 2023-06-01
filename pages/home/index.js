import { Typography, Row, Col, Statistic, Card, Layout } from "antd";

import classes from "./home.module.css";
import NavLink from "next/link";
import Cryptocurrencies from "../../components/Cryptocurrencies/Cryptocurrencies";
import Footer from "../../components/Footer/Footer";
import News from "../../components/News/News";

const { Title } = Typography;

const Home = () => {
  return (
    <div className={classes["home-layout"]}>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row gutter={[50, 40]}>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={14194} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={14194} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={14194} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={14194} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={14194} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={14194} />
        </Col>
      </Row>
      <div className="my-10">
        <Title level={2}>Top 10 Popular Cryptocurrencies</Title>
        <Title level={3} className="relative">
          <NavLink href="/cryptocurrencies/10">Show more</NavLink>
        </Title>
        <Cryptocurrencies count={10} />
      </div>
      <div className="my-10">
        <Title level={2}>Lastest Cryptocurrencies News</Title>
        <Title level={3} className="relative">
          <NavLink href="/news/20">Show more</NavLink>
        </Title>
        <News count={10} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
