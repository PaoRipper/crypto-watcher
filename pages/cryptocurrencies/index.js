import React, { useState } from 'react'

import classes from "./CryptocurrencyId.module.css";
import { Input } from "antd";
import Cryptocurrencies from '../../components/Cryptocurrencies/Cryptocurrencies'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { debounce } from 'lodash';

const { Search } = Input;


const Cryptocurrency = () => {
  const router = useRouter();

  const { count } = router.query;
  const [search, setSearch] = useState("");

  const onSearch = (value) => setSearch(value)

  return (<div className={classes["crypto-layout-page"]}>
    <Search
      placeholder="Crypto"
      allowClear
      size="large"
      onSearch={onSearch}
      className="my-10 mx-auto"
      style={{
        width: "20rem",
      }}
    />
    <Cryptocurrencies count={50} search={search} />
    {/* <h1 className="absolute left-80 top-4 text-2xl font-bold">Cryptocurrency Page</h1> */}
  </div>
  )
}

export default Cryptocurrency