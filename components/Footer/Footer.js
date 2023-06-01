import React from "react";

import { Space, Typography} from "antd";

const { Title } = Typography;

import NavLink from 'next/link'

const Footer = () => {
  return (
    <div className="flex flex-col bg-slate-900 h-40 items-center justify-center flex-end">
      <Typography.Title
        level={5}
        style={{ color: "white", textAlign: "center" }}
      >
        Copyright © 2021
        <NavLink href="/">Cryptoverse Inc.</NavLink> <br />
        All Rights Reserved.
      </Typography.Title>
      <Space>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/exchanges">Exchanges</NavLink>
        <NavLink href="/news">News</NavLink>
      </Space>
    </div>
  );
};

export default Footer;
