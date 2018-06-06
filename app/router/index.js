import React,{Component} from 'react';
//引入react-router4
import { BrowserRouter, Router, HashRouter, Match, Route,Link, hashHistory, IndexLinl } from 'react-router-dom'

import Home from '../containers/home/index'
import Login from '../containers/login/index'
import Register from '../containers/register'
import Find from '../containers/find/homePage/inde'
import XianYuan from '../containers/xianyuanmizhong'
import ChuRu from '../containers/chuRuXianMen'
import XianDao from '../containers/xianDaoXueXi'

class Slider extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

const R = () => (
  <HashRouter>
    <Slider>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/find" component={Find} />
      <Route path="/xianyuan" component={XianYuan} />
      <Route path="/churu" component={ChuRu} />
      <Route path="/xiandao" component={XianDao} />
    </Slider>
  </HashRouter>
)

export default R
