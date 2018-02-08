import React, { Component } from 'react'
import style from './index.scss'

class Find extends Component {
  constructor(props) {
    super(props)
    this.state = {
      marginTopOne: 0,
      marginTopTwo: 0,
      marginTopThree: 0,
      marginTopFour: 0,
      marginTopFive: 0,
      marginTopSix: 0,
      arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      num: this.props.num,
      data: []
    }
  }
  componentDidMount() {
    let marginTopOne = this.state.marginTopOne
    let marginTopTwo = this.state.marginTopTwo
    let marginTopThree = this.state.marginTopThree
    let marginTopFour = this.state.marginTopFour
    let marginTopFive = this.state.marginTopFive
    let marginTopSix = this.state.marginTopSix
    let arr = this.state.arr
    let data = []
    const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let flag = 1
    let num = this.props.num
    setInterval(() => {
      if (num % 2 !== 0) {
        num = num + parseInt(Math.random() * 10)
      } else {
        num = num - parseInt(Math.random() * 10)
      }
      console.log('++++++++++++++++++++++++')
      console.log(num)
      if (num < 10) {
        data = num.toString().split('')
        data.unshift(0, 0, 0, 0, 0)
      } else if (num >= 10 && num < 100) {
        data = num.toString().split('')
        data.unshift(0, 0, 0, 0)
      } else if (num >= 100 && num < 1000) {
        data = num.toString().split('')
        data.unshift(0, 0, 0)
      } else if (num >= 1000 && num < 10000) {
        data = num.toString().split('')
        data.unshift(0, 0)
      } else if (num >= 100000 && num < 100000) {
        data = num.toString().split('')
        data.unshift(0)
      } else if (num >= 100000 && num < 1000000) {
        data = num.toString().split('')
      }

      let numArr = []
      console.log(num.toString())
      //for(let k=data.length-1;k<6;k++) {
      //    if(data.length < 6) {
      //        data.unshift(0)
      //    }
      //}
      console.log(data)
      let time = setTimeout(() => {
        marginTopOne = -100 * Number(data[0])
        this.setState({
          marginTopOne: marginTopOne,
        }, () => {
          console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
          console.log(marginTopOne)
          console.log(arr)
        })
      }, 1000)
      //clearTimeout(time)
      let timeOne = setTimeout(() => {
        marginTopTwo = -100 * Number(data[1])
        this.setState({
          marginTopTwo: marginTopTwo
        })
      }, 1000)
      //clearTimeout(timeOne)
      let timeTwo = setTimeout(() => {
        marginTopThree = -100 * Number(data[2])
        this.setState({
          marginTopThree: marginTopThree
        })
      }, 1000)
      //clearTimeout(timeTwo)
      let timeThree = setTimeout(() => {
        marginTopFour = -100 * Number(data[3])
        this.setState({
          marginTopFour: marginTopFour
        })
      }, 1000)
      //clearTimeout(timeThree)
      let timeFour = setTimeout(() => {
        marginTopFive = -100 * Number(data[4])
        this.setState({
          marginTopFive: marginTopFive
        })
      }, 1000)
      //clearTimeout(timeFour)
      let timeFive = setTimeout(() => {
        marginTopSix = -100 * Number(data[5])
        this.setState({
          marginTopSix: marginTopSix
        })
      }, 1000)
    }, 1000)

    //clearTimeout(timeFive)

  }

  //cloneObj = (obj) => {
  //    let str,newobj = obj.constructor === Array?[]:{};
  //    if(typeof obj !== 'object') {
  //        return;
  //    }else if(window.JSON) {
  //        str = JSON.stringify(obj)
  //        newobj = JSON.parse(str)
  //    }else {
  //        for(let i in obj) {
  //            newobj[i] = typeof obj[i] === 'object'?
  //                cloneObj(obj[i]):obj[i]
  //        }
  //    }
  //    return newobj
  //}
  render() {
    return ( <
      div className = {
        style['find']
      } >
      <
      span > 仙缘觅踪 < /span> <
      div >
      <
      span > {
        `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
      } < /span> <
      /div> <
      div >
      <
      div className = {
        style["show"]
      } >
      <
      ul className = "show-list"
      style = {
        {
          marginTop: this.state.marginTopOne
        }
      } > {
        this.state.arr.map((obj, index) => ( <
          li key = {
            index
          }
          className = {
            style["number"]
          } > {
            obj
          } < /li>
        ))
      } <
      /ul> <
      /div> <
      div className = {
        style["show"]
      } >
      <
      ul className = {
        style["show-list"]
      }
      style = {
        {
          marginTop: this.state.marginTopTwo
        }
      } > {
        this.state.arr.map((obj, index) => ( <
          li key = {
            index
          }
          className = {
            style["number"]
          } > {
            obj
          } < /li>
        ))
      } <
      /ul> <
      /div> <
      div className = {
        style["show"]
      } >
      <
      ul className = {
        style["show-list"]
      }
      style = {
        {
          marginTop: this.state.marginTopThree
        }
      } > {
        this.state.arr.map((obj, index) => ( <
          li key = {
            index
          }
          className = {
            style["number"]
          } > {
            obj
          } < /li>
        ))
      } <
      /ul> <
      /div> <
      div className = {
        style["show"]
      } >
      <
      ul className = {
        style["show-list"]
      }
      style = {
        {
          marginTop: this.state.marginTopFour
        }
      } > {
        this.state.arr.map((obj, index) => ( <
          li key = {
            index
          }
          className = {
            style["number"]
          } > {
            obj
          } < /li>
        ))
      } <
      /ul> <
      /div> <
      div className = {
        style["show"]
      } >
      <
      ul className = {
        style["show-list"]
      }
      style = {
        {
          marginTop: this.state.marginTopFive
        }
      } > {
        this.state.arr.map((obj, index) => ( <
          li key = {
            index
          }
          className = {
            style["number"]
          } > {
            obj
          } < /li>
        ))
      } <
      /ul> <
      /div> <
      div className = {
        style["show"]
      } >
      <
      ul className = {
        style["show-list"]
      }
      style = {
        {
          marginTop: this.state.marginTopSix
        }
      } > {
        this.state.arr.map((obj, index) => ( <
          li key = {
            index
          }
          className = {
            style["number"]
          } > {
            obj
          } < /li>
        ))
      } <
      /ul> <
      /div> <
      /div> <
      /div>
    )
  }
}

module.exports = Find
