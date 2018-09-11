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
    this.drawPicture();
    // links.map((obj, index) => {
    //   let line = new zrender.Line({
    //     shape: {
    //       x1: width/2,
    //       y1: height/2,
    //       x2: 500+Math.asin((ahd*index))*radius,
    //       y2: 500+Math.acos((ahd*index))*radius,
    //       percent: 0,
    //     },
    //     style: {
    //       stroke: '#434348',
    //       lineDash: [0, 0]
    //     }
    //   });
    //   line.animate('shape', false)
    //     .when(500, {
    //       percent: 1
    //     }).start();
    //   this.zr.add(line);
    // });
    // nodes.map((obj, index) => {
    //   if (index) {
    //     let circle = new zrender.Circle({
    //       shape: {
    //         cx: 500+Math.asin((ahd*index))*radius,
    //         cy: 500+Math.acos((ahd*index))*radius,
    //         r: radius
    //       },
    //       // draggable: true,
    //       style: {
    //         fill: 'skyBlue',
    //         stroke: 'skyBlue'
    //       }
    //     });
    //     let text = new zrender.Text({
    //       shape: {
    //         x: 500+Math.asin((ahd*index))*radius,
    //         y: 500+Math.acos((ahd*index))*radius,
    //       },
    //       text: obj.name,
    //       style: {
    //         text: obj.name,
    //         color: 'red'
    //       }
    //     });
    //     this.zr.add(circle);
    //     this.zr.add(text);
    //   } else {
    //     let circle = new zrender.Circle({
    //       shape: {
    //         cx: width/2,
    //         cy: height/2,
    //         r: radius
    //       },
    //       // draggable: true,
    //       style: {
    //         fill: 'green',
    //         stroke: 'green'
    //       }
    //     });
    //     let text = new zrender.Text({
    //       shape: {
    //         x: width/2,
    //         y: height/2,
    //       },
    //       text: obj.name,
    //       style: {
    //         text: obj.name,
    //         color: 'red'
    //       }
    //     });
    //     this.zr.add(circle);
    //     this.zr.add(text);
    //   }
    // });
    // this.zr.attr('draggable', true);
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
  drawPicture = () => {
    let daoYouContainer = document.getElementById('daoYouContainer');
    let width = daoYouContainer.clientWidth;
    let height = daoYouContainer.clientHeight;
    let radius = 15;
    let r = 50;
    const PI = Math.PI;
    let radians = (Math.PI / 180) * Math.round(360 / 5);
    let radiansT = (Math.PI / 180) * Math.round(360 / 10);
    let circleLength = 2*Math.PI*length;
    this.zr = zrender.init(daoYouContainer);
    for (let i = 0; i < 10; i++) {
      if (i < 6) {
        this.drawLine(width, height, r, radians, i);
      } else {
        this.drawLine(width, height, r * 2, radiansT, i);
      }
    }
    for (let i = 0; i < 10; i++) {
      if (i === 0) {
        let circle = new zrender.Circle({
          shape: {
            cx: width/2,
            cy: height/2,
            r: radius
          },
          draggable: true,
          style: {
            fill: 'skyBlue',
            stroke: 'skyBlue'
          }
        });
        setTimeout(() => {
          this.zr.add(circle);
        });
      } else if (i < 6) {
        this.drawCircle(width, height, radius, r, radians, i);
        this.drawText(width, height, r, radians, i)
      } else {
        this.drawCircle(width, height, radius, r * 2, radiansT, i);
        this.drawText(width, height, r * 2, radiansT, i)
      }
    }
  };
  drawText = (width, height, r, radians, i) => {
    let text = new zrender.Text({
      style: {
        text: `fuck${i}`,
        fontSize: 14,
        textFill: '#FF4949',
        textBackgroundColor: '#FFF',
      },
      draggable: true,
    });
    text.attr('position', [width/2 + r * Math.sin(radians * i), height/2 + r * Math.cos(radians * i)]);
    this.zr.add(text);
  };
  drawCircle = (width, height, radius, r, radians, i) => {
    let circle = new zrender.Circle({
      shape: {
        cx: width/2 + r * Math.sin(radians * i),
        cy: height/2 + r * Math.cos(radians * i),
        r: radius
      },
      draggable: true,
      style: {
        fill: 'skyBlue',
        stroke: 'skyBlue'
      }
    });
    this.zr.add(circle);
  };
  drawLine = (width, height, r, radians, i) => {
    let line = new zrender.Line({
      shape: {
        x1: width/2,
        y1: height/2,
        x2: width/2 + r * Math.sin(radians * i),
        y2: height/2 + r * Math.cos(radians * i),
        percent: 1,
      },
      style: {
        stroke: '#434348',
        lineDash: [0, 0]
      }
    });
    this.zr.add(line);
  };
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
