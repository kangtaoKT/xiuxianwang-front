import React, { Component } from 'react'
import Fi from '../index'

export default class Find extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 68,
      numOne: 123456,
    }
  }
  componentDidMount() {
    //let num = this.state.num
    //let numOne = this.state.numOne
    //setInterval(() => {
    //    if(num%2 !== 0) {
    //        num = num + parseInt(Math.random()*10)
    //    }else {
    //        num = num - parseInt(Math.random()*10)
    //    }
    //    this.setState({
    //        num: num
    //    },() => {
    //        console.log('++++++++++++++++++++++++')
    //        console.log(this.state.num)
    //    })
    //},1000)
    //
    //setInterval(() => {
    //    if(num%2 !== 0) {
    //        num = num + parseInt(Math.random()*10)
    //    }else {
    //        num = num - parseInt(Math.random()*10)
    //    }
    //    this.setState({
    //        numOne: num
    //    },() => {
    //        console.log('++++++++++++++++++++++++')
    //        console.log(this.state.num)
    //    })
    //},1000)
  }
  render() {
    return ( <
      div >
      哈哈 <
      Fi num = {
        this.state.num
      }
      /> <
      Fi num = {
        this.state.numOne
      }
      />
      </div>
    )
  }
}
