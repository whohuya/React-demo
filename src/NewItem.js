import React, { Component } from 'react'

const NewItem =(props)=>{

const detailStyle={
    background: 'linear-gradient(52deg,#F0FFFF,#F0F8FF)',
    borderRadius: '15px',
    width:'100%',
    display:'flex',
  flexDirection:'column',
  padding:'16px',
  border:'2px solid #2F6B40'
}
const trafficInformation={
  margin: '16px',
}
  const {newDetail}=props
  return(
    <div style={detailStyle}>
      <div style={{border:'1px solid #2F6B40',borderRadius: '15px',backgroundColor:'#F0F6FB'}}>
        <h1 style={{textAlign:'center',}}>请确认预定{newDetail.carNumber}次车辆</h1>
      </div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',border:'1px solid #2f6b40',borderRadius: '15px',marginTop:'16px'}}>
        <div id='start' style={trafficInformation}>
          <p style={{fontWeight:900,fontSize:'20px'}}>{newDetail.startTime}</p>
          <p style={{textAlign:'center'}}><span style={{marginRight:'4px',color:'#3399FF'}}>始</span>{newDetail.start}</p>
        </div>
        <div id='mess' style={trafficInformation}>
          <p style={{fontWeight:900, textAlign:'center'}}>{newDetail.carNumber}</p>
          <hr />
          <p>{newDetail.allTime}</p>
        </div>
        <div id='end' style={trafficInformation}>
          <p style={{fontWeight:900,fontSize:'20px'}}>{newDetail.endTime}</p>
          <p style={{textAlign:'center'}}><span style={{marginRight:'4px',color:'#F09D3D'}}>终</span>{newDetail.end}</p>
        </div>

      </div>
      <div >
        <h3>添加乘客信息：</h3>
        <hr/>
        <p><span>姓名&nbsp;&nbsp;&nbsp;：</span><input type='text' style={{width:'70%',height:'30px', border:'0px'}}/></p>
        <p><span>学工号：</span><input type='text' style={{width:'70%',height:'30px', border:'0px'}}/></p>
        <p><span>手机号：</span><input type='text' style={{width:'70%',height:'30px', border:'0px'}}/></p>
        <button
          style={{width:'100%',height:'100%',borderRadius: '15px',backgroundColor:'#457DDD',color:'#fff',fontSize:'10px'}}> 立即提交</button>
      </div>
      <div>

      </div>
    </div>
  )
}
export default NewItem;