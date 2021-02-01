import * as Icon from '@ant-design/icons';

import { Layout } from "antd";
import { Link } from "react-router-dom";
import React from "react";
import logo from './../logo.svg';
import { withRouter } from "react-router";

const Header = () => (
  <Layout.Header className='example__header'>
    <div className="examples__nav">
      <Link to='//cube.dev' target="_blank"><img src={logo} alt="Cube.js" /></Link>
      <div className="examples__nav__buttons">
        <a href='//github.com/statsbotco/cube.js'>
          <Icon.GithubOutlined />
            Github
        </a>
        <a href='//slack.cube.dev'>
          <Icon.SlackOutlined />
            Slack
        </a>
      </div>
    </div>
  </Layout.Header>
);

export default withRouter(Header);