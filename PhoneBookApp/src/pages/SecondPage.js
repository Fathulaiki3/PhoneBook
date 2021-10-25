import React, { Component } from 'react'

export default class SecondPage extends Component {
    render() {
        return (
            <div className={'test2'} style={{ marginTop:50,  display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div className={'input-container'} style={{height:350, width:600, borderRadius:45,
                display:'flex', flexDirection:'column', justifyContent:'space-evenly',backgroundColor:'white'}}>
                    <input placeholder={'Contact Name'} style={{width:'80%', height:40, display:'flex', alignSelf:'center',
                    borderRadius:24, paddingLeft:20}}/>
                    <input placeholder={'Contact Number'} style={{width:'80%', height:40, display:'flex', alignSelf:'center',
                    borderRadius:24, paddingLeft:20}}/>
                    <div style={{width:100, display:'flex', border:'solid 1px', justifyContent:'center', height:35, alignItems:'center' ,alignSelf:'center',
                    borderRadius:12, backgroundColor:'#CC4C6E', color:'white'}}>
                        Save
                    </div>
                </div>
            </div>
        )
    }
}
