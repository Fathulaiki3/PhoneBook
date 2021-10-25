import React, { Component } from 'react'
import axios from 'axios';

export default class SecondPage extends Component {
    constructor() {
        super();
        this.state = {
          name: '',
          phoneno: '',
        };
      }
    
    submitContact=()=>{
        axios.get(`http://127.0.0.1:8000/create/?name=${this.state.name}&phoneno=${this.state.phoneno}`,).then(res=>{
            console.log(res.data)
            this.setState({
                contact:res.data
            })
        })
    }
      handleName=(text)=>{
        this.setState({
          name:text
        })
      }
      handlePhoneno=(text)=>{
        this.setState({
          phoneno:text
        })
      }
    render() {
        console.log(this.state.phoneno)
        return (
            <div className={'test2'} style={{ marginTop:50,  display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div className={'input-container'} style={{height:350, width:600, borderRadius:45,
                display:'flex', flexDirection:'column', justifyContent:'space-evenly',backgroundColor:'white'}}>
                    <input placeholder={'Contact Name'} style={{width:'80%', height:40, display:'flex', alignSelf:'center',
                    borderRadius:24, paddingLeft:20}} value={this.state.name} onChange={(event)=>{
                        this.setState({
                            name:event.target.value
                        })
                    }}/>
                    <input placeholder={'Contact Number'} style={{width:'80%', height:40, display:'flex', alignSelf:'center',
                    borderRadius:24, paddingLeft:20}} value={this.state.phoneno} onChange={(event)=>{
                        this.setState({
                            phoneno:event.target.value
                        })
                    }}/>
                    {/* <input placeholder={'Contact Name'} style={{width:'80%', height:40, display:'flex', alignSelf:'center',
                    borderRadius:24, paddingLeft:20}} onChange={()=>this.handleName}/>
                    <input placeholder={'Contact Number'} style={{width:'80%', height:40, display:'flex', alignSelf:'center',
                    borderRadius:24, paddingLeft:20}}/> */}
                    <button style={{width:100, display:'flex', border:'solid 1px', justifyContent:'center', height:35, alignItems:'center' ,alignSelf:'center',
                    borderRadius:12, backgroundColor:'#CC4C6E', color:'white'}}  onClick={this.submitContact}>
                        Save
                    </button>
                </div>
            </div>
        )
    }
}
