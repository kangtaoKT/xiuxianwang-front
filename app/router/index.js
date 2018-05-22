import React,{Component} from 'react';
//引入react-router4
import { BrowserRouter, Router, HashRouter, Match, Route,Link, hashHistory, IndexLinl } from 'react-router-dom'

import Home from '../home/index'
import Login from '../login/index'
import Register from '../register'
import Find from '../find/homePage/inde'
import XianYuan from '../xianyuanmizhong'
import ChuRu from '../chuRuXianMen'

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
    </Slider>
  </HashRouter>
)

export default R
