import React from "react";
import { Menu, Typography, Avatar } from "antd";
import NavLink from "next/link";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import icon from "../../images/cryptocurrency.png";

import classes from './Navbar.module.css'

const items = [
  { label: 'โฮม', url: "/home", icon: <HomeOutlined /> },
  { label: 'คริปโตเคอเรนซี่', url: "/cryptocurrencies", icon: <FundOutlined /> },
  // { label: 'แลกเปลี่ยน', key: "exchanges", icon: <MoneyCollectOutlined /> },
  // { label: 'ข่าวสาร', key: "news", icon: <BulbOutlined /> },
]

const Navbar = () => {
  return (
    <div className={classes['nav-container']}>
      <div className={classes['logo-container']}>
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo relative left-3">
          <NavLink href="/" className={classes.header}>Cryptoverse</NavLink>
        </Typography.Title>

      </div>

      <Menu theme="dark">
        {items.map((item, index) => (<Menu.Item key={index} icon={item.icon}>
          <NavLink href={item.url}>{item.label}</NavLink>
        </Menu.Item>))}
      </Menu>
    </div>
  );
};

export default Navbar;
