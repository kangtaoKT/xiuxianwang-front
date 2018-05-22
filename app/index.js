import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import routes from './router'

ReactDOM.render((
    <div>
      {routes(hashHistory)}
    </div>
),
document.querySelector('#root')
)
