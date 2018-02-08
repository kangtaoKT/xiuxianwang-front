import React,{Component} from 'react'
import ReactDOM from 'react-dom'
//引入react-router4
import { BrowserRouter, Router, HashRouter, Match, Route,Link, hashHistory, IndexLinl } from 'react-router-dom'
import Home from './home/index'
import Login from './login/index'
import Register from './register'
import Find from './find/homePage/inde'
import XianYuan from './xianyuanmizhong'

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
ReactDOM.render((
    <HashRouter>
        <Slider>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/find" component={Find} />
            <Route path="/xianyuan" component={XianYuan} />
        </Slider>
    </HashRouter>
),
document.querySelector('#root')
)