/**
 * Created by kangtao on 2017/4/27.
 */
import React from 'react';
import { Link } from 'react-router-dom'
import '../app.css';
import './home.css';

const Home = () => (
  <div className="title">
    <div className="bar">
      <span><Link to="/login">登录</Link></span>
      <span><Link to="/register">注册</Link></span>
    </div>
    <ul className="left">
      <li className="left-bar"><Link to="/xianyuan">仙缘觅踪</Link></li>
      <li className="left-bar">初入仙门</li>
      <li className="left-bar">仙道学习</li>
    </ul>
    <ul className="right">
      <li className="right-bar">道友交流</li>
      <li className="right-bar">道友心得</li>
      <li className="right-bar">道友图书馆</li>
    </ul>
  </div>
)

module.exports = Home
