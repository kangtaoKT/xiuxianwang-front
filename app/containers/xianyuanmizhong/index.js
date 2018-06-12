import React,{Component} from 'react'
import * as d3 from 'd3'
import MySelect from '../../components/MySelect/index.jsx'
import style from './index.scss'
import bg from './images/home-bg.jpg'
import root from './json/relation.json'
import tianhe from './images/tianhe.jpg'
import lingsha from './images/lingsha.jpg'
import mengli from './images/mengli.jpg'
import ziying from './images/ziying.jpg'

console.log(d3)
export  default class XianYuan extends Component {
    constructor() {
        super()
        this.state = {
            showText: '请选择',
            options: [
                {value: 'one',label: '第一名'},
                {value: 'two',label: '第二名'},
                {value: 'three',label: '第三名'},
                {value: 'four',label: '第四名'},
            ]
        }
    }
    componentDidMount() {
        // this.drawD3()
        // this.drawCicle()
        this.drawRelationShip()
    }
    handleClick = (obj,name) => {
        let label = obj.label
        let v = obj.value
        this.setState({
            [name]: label
        })
    }

    drawD3 = () => {
        var margin = {top: 100, right: 100, bottom: 100, left: 100},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var x = d3.scaleLinear()
            .domain([0, 5.9])
            .range([0, width]);

        var y = d3.scaleLinear()
            .domain([-1, 1])
            .range([height, 0]);

        var z = d3.scaleLinear()
            .domain([0, 5.9])
            .range([0, 360]);

        var points = d3.range(0, 6, .1).map(function(t) {
            return {value: t, 0: x(t), 1: y(Math.sin(t))};
        });

        var svg = d3.select("#xianyuan").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var path = svg.selectAll("path")
            .data(quad(points))
            .enter().append("path")
            .style("fill", function(d) { return d3.hsl(z(d[1].value), 1, .5); })
            .style("stroke", "#000");

        var t0 = Date.now();
        d3.timer(function() {
            var dt = (Date.now() - t0) * .001;
            points.forEach(function(d) { d[1] = y(d.scale = Math.sin(d.value + dt)); });
            path.attr("d", function(d) { return lineJoin(d[0], d[1], d[2], d[3], 80 * d[1].scale * d[1].scale + 10); });
        });

// Compute quads of adjacent points [p0, p1, p2, p3].
        function quad(points) {
            return d3.range(points.length - 1).map(function(i) {
                return [points[i - 1], points[i], points[i + 1], points[i + 2]];
            });
        }

// Compute stroke outline for segment p12.
        function lineJoin(p0, p1, p2, p3, width) {
            var u12 = perp(p1, p2),
                r = width / 2,
                a = [p1[0] + u12[0] * r, p1[1] + u12[1] * r],
                b = [p2[0] + u12[0] * r, p2[1] + u12[1] * r],
                c = [p2[0] - u12[0] * r, p2[1] - u12[1] * r],
                d = [p1[0] - u12[0] * r, p1[1] - u12[1] * r];

            if (p0) { // clip ad and dc using average of u01 and u12
                var u01 = perp(p0, p1), e = [p1[0] + u01[0] + u12[0], p1[1] + u01[1] + u12[1]];
                a = lineIntersect(p1, e, a, b);
                d = lineIntersect(p1, e, d, c);
            }

            if (p3) { // clip ab and dc using average of u12 and u23
                var u23 = perp(p2, p3), e = [p2[0] + u23[0] + u12[0], p2[1] + u23[1] + u12[1]];
                b = lineIntersect(p2, e, a, b);
                c = lineIntersect(p2, e, d, c);
            }

            return "M" + a + "L" + b + " " + c + " " + d + "Z";
        }

// Compute intersection of two infinite lines ab and cd.
        function lineIntersect(a, b, c, d) {
            var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3,
                y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3,
                ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
            return [x1 + ua * x21, y1 + ua * y21];
        }

// Compute unit vector perpendicular to p01.
        function perp(p0, p1) {
            var u01x = p0[1] - p1[1], u01y = p1[0] - p0[0],
                u01d = Math.sqrt(u01x * u01x + u01y * u01y);
            return [u01x / u01d, u01y / u01d];
        }
    }

    drawCicle = () => {
      console.log(innerHeight, innerWidth);

      let drag = d3.drag().on("start", function(d){

        console.log("start");

      }).on("end", function(d){

        console.log("end");

      }).on("drag", function(d){
        d3.select(this)
          .attr("cx", d.cx = d3.event.x)
          .attr("cy", d.cy = d3.event.y);
      });

      let width = Math.max(960, innerWidth),
            height = Math.max(500, innerHeight);

      let circles = [{cx:width/2, cy:height/2, r:30},{cx:250, cy:200, r:30}];

      let i = 0;


      let svg = d3.select("#xianyuan").append("svg")
            .attr("width", width)
            .attr("height", height);
            // .on("ontouchstart" in document ? "touchmove" : "mousemove", particle);

        svg.append("line")
          .attr("x1", 250)
          .attr("y1", 200)
          .attr("x2", width/2)
          .attr("y2", height/2)
          .attr("stroke", "red")
          .attr("stroke-width", 2);
        //
        // svg.append("rect")
        //   .attr("width", 100)
        //   .attr("height", 100)
        //   .style("fill", "orange");
        //
        // svg.append("circle")
        //   .attr("cx", width/2)
        //   .attr("cy", height/2)
        //   .attr("r", 100)
        //   .style("stroke", "red")
        //   .style("fill", "orange");

        svg.selectAll("circle")
          .data(circles)
          .enter()
          .append("circle")
          .attr("cx", function(d){ console.log(d); return d.cx;})
          .attr("cy", function(d){return d.cy;})
          .attr("r", function(d){return d.r;})
          .style("stroke", "red")
          .style("fill", "orange")
          .call(drag);

        function particle() {
            let m = d3.mouse(this);

            svg.insert("circle", "rect")
                .attr("cx", m[0])
                .attr("cy", m[1])
                .attr("r", 1e-6)
                .style("stroke", d3.hsl((i = (i + 1) % 360), 1, .5))
                .style("stroke-opacity", 1)
                .transition()
                .duration(2000)
                .ease(Math.sqrt)
                .attr("r", 100)
                .style("stroke-opacity", 1e-6)
                .remove();

            d3.event.preventDefault();
        }
    }

    drawRelationShip = () => {

      let width = document.getElementById('xianyuan').clientWidth;
      let height = document.getElementById('xianyuan').clientHeight;
      let img_w = 90;
      let img_h = 90;

      let svg = d3.select("#xianyuan").append("svg")
        .attr("width",width)
        .attr("height",height);

      d3.json("/api/d3",function(error,root){

        if( error ){
          return console.log(error);
        }
        console.log(root);

        let force = d3.layout.force()
          .nodes(root.nodes)
          .links(root.edges)
          .size([width,height])
          .linkDistance(200)
          .charge(-1500)
          .start();

        let edges_line = svg.selectAll("line")
          .data(root.edges)
          .enter()
          .append("line")
          .style("stroke","deepskyblue")
          .style("stroke-width",1);

        let edges_text = svg.selectAll(".linetext")
          .data(root.edges)
          .enter()
          .append("text")
          .attr("class","linetext")
          .text(function(d){
            return d.relation;
          });


        let nodes_img = svg.selectAll("image")
          .data(root.nodes)
          .enter()
          .append("image")
          .attr("width",img_w)
          .attr("height",img_h)
          .attr("xlink:href",function(d){
            switch (d.image) {
              case 'tianhe.jpg': return tianhe;
              case 'lingsha.jpg': return lingsha;
              case 'mengli.jpg': return mengli;
              case 'ziying.jpg': return ziying;
            };
          })
          .on("mouseover",function(d,i){
            //显示连接线上的文字
            edges_text.style("fill-opacity",function(edge){
              if( edge.source === d || edge.target === d ){
                return 1.0;
              }
            });
          })
          .on("mouseout",function(d,i){
            //隐去连接线上的文字
            edges_text.style("fill-opacity",function(edge){
              if( edge.source === d || edge.target === d ){
                return 0.0;
              }
            });
          })
          .call(force.drag);

        let text_dx = -20;
        let text_dy = 20;

        let nodes_text = svg.selectAll(".nodetext")
          .data(root.nodes)
          .enter()
          .append("text")
          .attr("class","nodetext")
          .attr("dx",text_dx)
          .attr("dy",text_dy)
          .text(function(d){
            return d.name;
          });


        force.on("tick", function(){

          //限制结点的边界
          root.nodes.forEach(function(d,i){
            d.x = d.x - img_w/2 < 0     ? img_w/2 : d.x ;
            d.x = d.x + img_w/2 > width ? width - img_w/2 : d.x ;
            d.y = d.y - img_h/2 < 0      ? img_h/2 : d.y ;
            d.y = d.y + img_h/2 + text_dy > height ? height - img_h/2 - text_dy : d.y ;
          });

          //更新连接线的位置
          edges_line.attr("x1",function(d){ return d.source.x; });
          edges_line.attr("y1",function(d){ return d.source.y; });
          edges_line.attr("x2",function(d){ return d.target.x; });
          edges_line.attr("y2",function(d){ return d.target.y; });

          //更新连接线上文字的位置
          edges_text.attr("x",function(d){ return (d.source.x + d.target.x) / 2 ; });
          edges_text.attr("y",function(d){ return (d.source.y + d.target.y) / 2 ; });


          //更新结点图片和文字
          nodes_img.attr("x",function(d){ return d.x - img_w/2; });
          nodes_img.attr("y",function(d){ return d.y - img_h/2; });

          nodes_text.attr("x",function(d){ return d.x });
          nodes_text.attr("y",function(d){ return d.y + img_w/2; });
        });
      });
    };

    render() {
        return (
            <div className={style['xianyuan']}>
                <header className={style.header}>仙缘觅踪</header>
                {/*<div className={style['select']}>*/}
                    {/*<MySelect*/}
                        {/*value={this.state.showText}*/}
                        {/*options={this.state.options}*/}
                        {/*handleClick={this.handleClick}*/}
                        {/*name="showText"*/}
                    {/*/>*/}
                {/*</div>*/}
                <div id="xianyuan" className={style['svg-container']}>

                </div>
            </div>
        )
    }
}
