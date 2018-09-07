import React, { Component } from 'react';
import zrender from 'zrender';
import { nodes, links } from '../../data/zrData'
import style from './index.scss';

export default class DaoYouJiaoLiu extends Component {
  constructor(props) {
    super(props);
    this.zr = null;
    this.state = {};
  }
  componentDidMount() {
    let daoYouContainer = document.getElementById('daoYouContainer');
    let width = daoYouContainer.clientWidth;
    let height = daoYouContainer.clientHeight;
    let radius = 10;
    let avd = 360/(radius*2);
    let ahd = avd*Math.PI/180;
    this.zr = zrender.init(daoYouContainer);
    links.map((obj, index) => {
      let line = new zrender.Line({
        shape: {
          x1: width/2,
          y1: height/2,
          x2: 500+Math.asin((ahd*index))*radius,
          y2: 500+Math.acos((ahd*index))*radius,
          percent: 0,
        },
        style: {
          stroke: '#434348',
          lineDash: [0, 0]
        }
      });
      line.animate('shape', false)
        .when(500, {
          percent: 1
        }).start();
      this.zr.add(line);
    });
    nodes.map((obj, index) => {
      if (index) {
        let circle = new zrender.Circle({
          shape: {
            cx: 500+Math.asin((ahd*index))*radius,
            cy: 500+Math.acos((ahd*index))*radius,
            r: radius
          },
          // draggable: true,
          style: {
            fill: 'skyBlue',
            stroke: 'skyBlue'
          }
        });
        let text = new zrender.Text({
          shape: {
            x: 500+Math.asin((ahd*index))*radius,
            y: 500+Math.acos((ahd*index))*radius,
          },
          text: obj.name,
          style: {
            text: obj.name,
            color: 'red'
          }
        });
        this.zr.add(circle);
        this.zr.add(text);
      } else {
        let circle = new zrender.Circle({
          shape: {
            cx: width/2,
            cy: height/2,
            r: radius
          },
          // draggable: true,
          style: {
            fill: 'green',
            stroke: 'green'
          }
        });
        let text = new zrender.Text({
          shape: {
            x: width/2,
            y: height/2,
          },
          text: obj.name,
          style: {
            text: obj.name,
            color: 'red'
          }
        });
        this.zr.add(circle);
        this.zr.add(text);
      }
    });
    this.zr.attr('draggable', true);
    // let circleOne = new zrender.Circle({
    //   id: 0,
    //   shape: {
    //     cx: 250,
    //     cy: 50,
    //     r: 40
    //   },
    //   draggable: true,
    //   style: {
    //     fill: 'green',
    //     stroke: 'green'
    //   },
    //   zlevel: 0,
    //   onmouseover: function(params) {console.log('catch you!')}
    // });
    // circleOne.animateTo({
    //   shape: {
    //     cx: 500,
    //     cy: 500,
    //     r: 40
    //   }
    // }, 500, 0, 'linear');
    // let line = new zrender.Line({
    //   shape: {
    //     x1: 250,
    //     y1: 50,
    //     x2: 500,
    //     y2: 500,
    //     percent: 0,
    //   },
    //   style: {
    //     stroke: '#434348',
    //     lineDash: [1, 1]
    //   }
    // });
    // line.animate('shape', false)
    //   .when(500, {
    //     percent: 1
    //   }).start();
    // this.zr.add(line);
    // this.zr.add(circleOne);
    // this.zr.add(new zrender.Circle({
    //   id: 1,
    //   shape: {
    //     cx: 250,
    //     cy: 50,
    //     r: 40
    //   },
    //   draggable: true,
    //   style : {
    //     color : 'rgba(220, 20, 60, 0.8)'
    //   },
    //   zlevel: 1,
    // }));
    // this.zr.on('click', function(params) {alert('Hello, zrender!')});
  }
  componentWillUnmount() {
    zrender.dispose(this.zr);
  }
  render() {
    return (
      <div className={style['daoYou-container']} id="daoYouContainer">

      </div>
    )
  }
}
