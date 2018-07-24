import React, { Component } from 'react'

 class AddCar extends Component {

  constructor (props){
  super(props);
  this.state={
    newDetail:{
      id:new Date().getTime(),
      start:'',
      end:'',
      startTime:'',
      endTime:'视具体情况而定',
      allTime:'',
      carNumber:'临时',
    },
    start:'',
    end:'',
    startTime:'',
    allTime:'',


  }
 }


  getStartTime=(e)=>{
    let value=e.target.value;
    this.setState({
      startTime:value,
  })}
  getStart=(e)=>{
    this.setState({
      start:e.target.value
    })
  }
  getEnd=(e)=>{
    this.setState({
      end:e.target.value
    })
  }
  getAllTime=(e)=>{
    this.setState({
      allTime:e.target.value
    })
  }
  onSubmit=(event)=>{

    this.setState({
      newDetail:{
        id:new Date().getTime(),
        endTime:'∞：∞',
        start:this.state.start,
        end:this.state.end,
        startTime:this.state.startTime,
        allTime:'申请人：'+this.state.allTime,
        carNumber:'临时',
      },
    })
    event.preventDefault();
  }


   render() {
     const onAdd=this.props.onAdd
     const date=new Date()
     const detailStyle={
       background: 'linear-gradient(52deg,#F0FFFF,#F0F8FF)',
       borderRadius: '15px',
       width:'100%',
       display:'flex',
       flexDirection:'column',
       padding:'16px',
       marginTop:'16px',
       border:'2px solid #2F6B40'
     }
     return (
       <div style={detailStyle}>
         <div style={{border: '1px solid #2F6B40', borderRadius: '15px',}}>
           <h1 style={{textAlign: 'center'}}>请确认需要临时加车信息</h1>
         </div>
         <div>
           <h3>申请车次信息：</h3>
           <hr />
           <form action='' onSubmit={this.onSubmit}>
             <p>
               <span>车辆起止时间&nbsp;&nbsp;&nbsp;：</span>
               <select name="endPlace" onChange={this.getStartTime} style={{width:'70%'}}>
                 <option> </option>
                 <option
                   value={date.getHours() + ':' + date.getMinutes()} >{date.getHours() + ':' + date.getMinutes() }</option>
                 <option value={date.getHours() + 1 + ':00'}>{date.getHours() + 1 + ':00'}</option>
                 <option value={date.getHours() + 2 + ':00'}>{date.getHours() + 2 + ':00'}</option>
                 <option value={date.getHours() + 3 + ':00'}>{date.getHours() + 3 + ':00'}</option>
                 <option value={date.getHours() + 4 + ':00'}>{date.getHours() + 4 + ':00'}</option>
                 <option value={date.getHours() + 5 + ':00'}>{date.getHours() + 5 + ':00'}</option>
               </select>
               </p>
             <p><span>车辆起止地点：</span>
               <select name="car" onChange={this.getStart} style={{width:'35%'}}>
                 <option> </option>
                 <option value='成均桥' >成均桥</option>
                 <option value='枣园'>枣园</option>
                 <option value='北大门'>北大门</option>
               </select>
               -<input type="text" value={this.state.end} onChange={this.getEnd} style={{width:'35%'}}/></p>
             <h3>申请加车乘客信息：</h3>
             <hr />
             <p><span>姓名&nbsp;&nbsp;&nbsp;：</span><input type='text'
               style={{width: '70%', height: '30px', border: '0px'}}  value={this.state.allTime} onChange={this.getAllTime}/></p>
             <p><span>学工号：</span><input type='text'
               style={{width: '70%', height: '30px', border: '0px'}} /></p>
             <p><span>联系方式：</span><input type='text'
               style={{width: '70%', height: '30px', border: '0px'}} /></p>
             <button type='submit'
               style={{width:'100%',height:'100%',borderRadius: '15px',backgroundColor:'#F09D3D',color:'#fff',fontSize:'10px'}}
             > 信息确认</button>
           </form>
           <button
             style={{width:'100%',height:'100%',borderRadius: '15px',backgroundColor:'#457DDD',color:'#fff',fontSize:'10px'}}
             onClick={()=>{onAdd(this.state.newDetail)}}>提交</button>
         </div>
       </div>
     )
   }
}
export default AddCar;