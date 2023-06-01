import React, { useState } from "react";

import { Input } from "antd";

import Cryptocurrencies from "../../components/Cryptocurrencies/Cryptocurrencies";
import classes from "./CryptocurrencyId.module.css";

const { Search } = Input;

import { useRouter } from "next/router";

const onSearch = (value) => console.log(value);

const CryptocurrenciesCount = () => {
  const router = useRouter();

  const { count } = router.query;
  const [search, setSearch] = useState();

  const onSearch = (value) => setSearch(value)

  return (
    <div className={classes["crypto-layout-page"]}>
      <Search
        placeholder="Crypto"
        allowClear
        size="large"
        onSearch={onSearch}
        className="my-10"
        style={{
          width: "20rem",
        }}
      />
      <Cryptocurrencies count={count} search={search} />
    </div>
  );
};

export default CryptocurrenciesCount;
