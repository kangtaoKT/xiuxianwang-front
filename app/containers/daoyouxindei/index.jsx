import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import style from './index.scss';

console.log('PIXI', PIXI);
export default class DaoYouXinDei extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.drawPicture();
  }
  drawPicture = () => {
    let dYXDContainer = document.getElementById('dYXDContainer');
    let app = new PIXI.Application({width: 256, height: 256});
    dYXDContainer.appendChild(app.view);
    app.renderer.backgroundColor = 0x061639;
    app.renderer.view.style.position = "absolute";
    app.renderer.view.style.display = "block";
    app.renderer.autoResize = true;
    app.renderer.resize(window.innerWidth, window.innerHeight);
    this.drawCircle(app);
  };
  drawCircle = (app) => {
    for (let i = 0; i < 1000; i++) {
      let circle = new PIXI.Graphics();
      circle.beginFill(0x9966FF);
      circle.drawCircle(0, 0, 32);
      circle.endFill();
      circle.x = Math.random()*window.innerWidth;
      circle.y = Math.random()*window.innerHeight;
      app.stage.addChild(circle);
    }
  };
  render() {
    return (
      <div id='dYXDContainer' className={style['dyxd-container']}>

      </div>
    )
  }
}
