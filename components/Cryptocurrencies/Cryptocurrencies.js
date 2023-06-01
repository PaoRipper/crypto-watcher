import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCryptos } from "../../redux/crypto/cryptoSlice";
import { Row, Col, Card } from "antd";
import NavLink from "next/link";
import millify from "millify";
import Loading from "../Loading/Loading";
import { useRouter } from "next/router";
import Image from "next/image";


const Cryptocurrencies = (props) => {
  const router = useRouter();
  const { count } = router.query
  const { cryptos, loading } = useSelector((state) => state.cryptos);
  const crypto = cryptos?.data?.coins;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCryptos({ count: (props.count || count) ?? 50, search: props.search ?? "" }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.count, props.search]);

  if (loading) return <Loading />;

  return (
    <Row gutter={[40, 40]}>
      {crypto &&
        crypto.map((item) => (
          <Col span={8} xs={24} sm={24} md={12} lg={8} key={item.uuid}>
            <NavLink href="/cryptocurrencies/1">
              <Card
                title={item.name}
                extra={<Image className="w-9 h-9" src={item.iconUrl} alt="crypto-icon" />}
                bordered={false}
                className="p-3 w-71 hover:drop-shadow-lg transition-all hover:scale-20 cursor-pointer"
              >
                <p className="py-2 text-md">Price: {millify(item.price)}</p>
                <p className="py-2 text-md">
                  Market Cap: {millify(item.marketCap)}
                </p>
                <p className="py-2 text-md">Rank: {item.rank}</p>
              </Card>
            </NavLink>
          </Col>
        ))}
    </Row>
  );
};

export default Cryptocurrencies;
