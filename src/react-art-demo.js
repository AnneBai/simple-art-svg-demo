import React, { Component } from 'react';
import ReactART from 'react-art';
import 'art/modes/svg';
import SVGPath from 'art/modes/svg/path';
const {Shape, Transform, Surface, Text} = ReactART;

class ChildNode extends Component {
  constructor(props) {
    super(props);
    this.state={
      startX:100,
      startY:100,
      endX:200,
      endY:200,
      rx:20,
      ry:8,
      c1x:200,
      c1y:400,
      c2x:400,
      c2y:0,
      rotate:30,
      largeArcFlag: 0,
      pathStr:'M 200 50 a 30 10 0 0 0 0 100 l -100 150 a 30 10 0 1 0 0 -100 z'
    }
  }
  changeState = (e) =>{
    const stateToChange = e.target.id;
    this.setState({
      [stateToChange]:e.target.value,
    })
  }

  render() {
    const {startX,startY,endX,endY,rx,c2x,c1y,c1x,ry,c2y,largeArcFlag,rotate,pathStr} = this.state;
   
    let curve = new SVGPath()
      .moveTo(startX, startY)
      .curve(c1x,c1y,c2x,c2y)
    let path1 = new SVGPath()
      .moveTo(startX,startY)
      .arcTo(endX,endY,rx,ry,largeArcFlag)
    let path2 = new SVGPath()
      .moveTo(+startX+100,+startY+100)
      .counterArcTo(+endX+100,+endY+100,rx,ry,largeArcFlag)
    const path = new SVGPath()
      .moveTo(200,50)
      .counterArc(0,100,30,10,0)
      .line(-100,150)
      .counterArc(0,-100,30,10,1)
      .close()  
    console.log("path", path);

    return (
      <div style={{padding:"20px 50px"}}>
        <div>
          <label>startX: <input type="number" id="startX" onChange={this.changeState} value={this.state.startX} min={0} max={600} step={50}/></label>,&nbsp;
          <label>startY: <input type="number" id="startY" onChange={this.changeState} value={this.state.startY} min={0} max={300} step={50}/></label><br/>
          <h3>curve</h3>
          <label>c1x: <input type="number" id="c1x" onChange={this.changeState} value={this.state.c1x} min={-400} max={400} step={50}/></label>,&nbsp;
          <label>c1y: <input type="number" id="c1y" onChange={this.changeState} value={this.state.c1y} min={-400} max={400} step={50}/></label>,&nbsp;
          <label>c2x: <input type="number" id="c2x" onChange={this.changeState} value={this.state.c2x} min={-400} max={400} step={50}/></label>,&nbsp;
          <label>c2y: <input type="number" id="c2y" onChange={this.changeState} value={this.state.c2y} min={-400} max={400} step={50}/></label>
          <h3>arcTo, counterArcTo</h3>
          <label>endX: <input type="number" id="endX" onChange={this.changeState} value={this.state.endX} min={0} max={600} step={100}/></label>,&nbsp;
          <label>endY: <input type="number" id="endY" onChange={this.changeState} value={this.state.endY} min={0} max={600} step={100}/></label>,&nbsp;
          <label>rx: <input type="number" id="rx" onChange={this.changeState} value={this.state.rx} min={0} max={50} step={2}/></label>,&nbsp;
          <label>ry: <input type="number" id="ry" onChange={this.changeState} value={this.state.ry} min={0} max={50} step={2}/></label>,&nbsp;
          <label>largeArcFlag: <input type="number" id="largeArcFlag" onChange={this.changeState} value={this.state.largeArcFlag} min={0} max={1} step={1}/></label>
          <h3>rotate</h3>
          <span>文字旋转角度 </span> 
          <label>rotate: <input type="number" id="rotate" onChange={this.changeState} value={this.state.rotate} min={-180} max={180} step={10}/></label><br/>
        </div>
        <Surface width={800} height={500} style={{margin:"20px", backgroundColor:"#eef"}}>
            <Text
                x={50}
                y={50}
                strokeWidth={2}
                fill="#666"
                font="normal 15px Microsoft Yahei"
                transform={new Transform().rotate(rotate)}
            >
                curve = new SVGPath().moveTo(startX, startY).curve(c1x,c1y,c2x,c2y) 
            </Text>
          <Shape d={curve} stroke={"#000"} strokeWidth={3} />
        </Surface>
        <Surface width={800} height={500} style={{margin:"20px", backgroundColor:"#eef"}}>
            <Text
                x={50}
                y={50}
                strokeWidth={2}
                fill="#944"
                font="normal 15px Microsoft Yahei"
                transform={new Transform().rotate(rotate)}
            >
                path1 = new SVGPath().moveTo(startX,startY).arcTo(endX,endY,rx,ry,largeArcFlag) 
            </Text>
            <Text
                x={50}
                y={100}
                strokeWidth={2}
                fill="#449"
                font="normal 15px Microsoft Yahei"
                transform={new Transform().rotate(rotate)}
            >
                path2 = new SVGPath().moveTo(+startX+100,+startY+100).counterArcTo(+endX+100,+endY+100,rx,ry,largeArcFlag) 
            </Text>
          <Shape d={path1} stroke={"#944"} strokeWidth={3}/>
          <Shape d={path2} stroke={"#449"} strokeWidth={3}/>
        </Surface>
        <p>
          一个简单的例子<br/>
            path = new SVGPath()<br/>
                .moveTo(200,50)<br/>
                .counterArc(0,100,30,10,0)<br/>
                .line(-100,150)<br/>
                .counterArc(0,-100,30,10,1)<br/>
                .close();<br/>
                
          {"d={path}"} 等同于 d="M 200 50 a 30 10 0 0 0 0 100 l -100 150 a 30 10 0 1 0 0 -100 z"
        </p>
        <Surface width={350} height={350} style={{margin:50, backgroundColor:"#eef", border:"1px solid #ccc"}}>
          <Shape 
            d={path} 
            stroke={"#55e"} 
            strokeWidth={3}
            fill="#ccf"
          />
          <Text
            x={150}
            y={150}
            strokeWidth={1}
            fill="#eaa"
            font="bold 20px Microsoft Yahei"
            transform={new Transform().rotate(-45)}
          >
          这是一个例子
          </Text>
        </Surface>
        <div>
        <h3>用字符串作为Shape的d属性</h3>
          <span>字符串表示的路径</span> 
          <label>d: <textarea id="pathStr" onChange={this.changeState} value={this.state.pathStr} cols="50" rows="5" ></textarea></label><br/>
        <Surface width={1000} height={800} style={{margin:50, backgroundColor:"#eef", border:"1px solid #ccc"}}>
          <Shape d={pathStr} stroke={"#000"} strokeWidth={3} />
        </Surface>
        </div>
      </div>
    )
  }
}

export default ChildNode;