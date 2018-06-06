import React, { Component } from 'react'
import style from './index.scss'
import * as THREE from 'three'

export default class XianDaoXueXi extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.drawThreeD();
  }

  drawThreeD = () => {
    let graph = document.getElementById('graph');
    let scene = new THREE.Scene();  // 场景
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);// 透视相机
    let renderer = new THREE.WebGLRenderer();   // 渲染器
    renderer.setSize(window.innerWidth, window.innerHeight);
    graph.append(renderer.domElement);
    let geometry = new THREE.CubeGeometry(.5,.5,.5);
    let lineGeometry = new THREE.Geometry();
    let lineMaterial = new THREE.LineBasicMaterial({ vertexColors: THREE.VertexColors });
    let colorOne = new THREE.Color( 'orange' );
    let colorTwo = new THREE.Color( 'red' );
    let p1 = new THREE.Vector3( -1, -1, -1 );
    let p2 = new THREE.Vector3( 1, 1, 1 );
    lineGeometry.vertices.push(p1);
    lineGeometry.vertices.push(p2);
    lineGeometry.colors.push( colorOne, colorTwo );
    let line = new THREE.Line( lineGeometry, lineMaterial, THREE.LineSegments );
    let material = new THREE.MeshBasicMaterial({color: 'orange'});
    let cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    scene.add(line);
    camera.position.z = 5;
    function render() {
      requestAnimationFrame(render);
      cube.rotation.x += .01;
      cube.rotation.y += .01;
      renderer.render(scene, camera);
    }
    render();
  };

  render() {
    return (
      <div className={style['container']}>
        <div id='graph' className={style['graph']}>

        </div>
      </div>
    )
  }
}
