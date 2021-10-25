import React, { Component, Dimensions } from 'react'
import axios from 'axios';
export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            contact: [],
            width:window.innerWidth,
            renderEdit:false,
            editContact:'',
            editName: '',
            editPhone: '',
            editID: '',
            counter: 0
        }
    }
    handleResize = (e) => {
        this.setState({ width: window.innerWidth });
    };

    getContact = () => {
        axios.get('http://127.0.0.1:8000/read/',).then(res=>{
            console.log(res.data)
            this.setState({
                contact:res.data
            })
        })
    }

    deleteContact=(item)=>{
        axios.get(`http://127.0.0.1:8000/delete/?id=${item.id}`,).then(res=>{
            console.log(res.data)
            this.setState({
                counter:this.state.counter+1
            })
            
        })
        // this.getContact()
    }

    componentDidMount () {
        window.addEventListener("resize", this.handleResize);
        console.log(this.state.width)
        axios.get('http://127.0.0.1:8000/read/',).then(res=>{
            console.log(res.data)
            this.setState({
                contact:res.data
            })
        })
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
       } 

    editContact=()=>{
        axios.get(`http://127.0.0.1:8000/update/?id=${this.state.editID}&name=${this.state.editName}&phoneno=${this.state.editPhone}`,).then(res=>{
            console.log(res.data)
            this.setState({
                renderEdit:false, 
                editContact:''
            })
        })
    }
    
    render() {
        const {contact, width, renderEdit} = this.state
        console.log(this.state.counter)

        return (
            <div>
                {
                    contact.length>0 &&
                    contact.map(item=>{     
                        return(
                            <div className={'contact-container'}>
                                <div className={(item.id % 2) == 0 ?('contact'):('contact-2')}>
                                    <div className={'icon-contact'}>
                                    </div>
                                    <div style ={{marginLeft:20, display:'flex', flexDirection:'column', justifyContent:'space-between',width:'60%'}}>
                                        <div>
                                            {item.name}
                                        </div>
                                        <div style={{fontSize:12}}>
                                            {item.phoneno}
                                        </div>
                                    </div>
                                    <div className={'contact-edit'} onClick={()=>{
                                        this.setState({
                                            renderEdit:true,
                                            editName:item.name,
                                            editPhone:item.phoneno,
                                            editID:item.id,
                                            counter:this.state.counter+1
                                        })
                                    }}>
                                        <div style={{fontSize:12, fontWeight:'bold'}}>Edit</div>
                                    </div> 
                                    <div style={{marginLeft:5, marginRight:5}} className={'contact-edit'} onClick={()=>this.deleteContact(item)}>
                                        <div style={{fontSize:12, fontWeight:'bold'}}>Remove</div>
                                    </div> 
                                </div> 
                            </div>
                        )
                    })
                }
                {
                    renderEdit==true &&
                    this.renderEdit()
                }
            </div>
        )
    }
    renderEdit(){
        return(
            <div className={'test2'} style={{ marginTop:50,  display:'flex',justifyContent:'center',alignItems:'center', borderWidth:4}}>
                
                <div className={'input-container'} style={{height:350, width:600, borderRadius:45,
                display:'flex', flexDirection:'column', justifyContent:'space-evenly',backgroundColor:'white'}}>
                    <div style={{display:'flex', alignSelf:'center', fontSize:18, fontWeight:'bold'}}> 
                        EDIT CONTACT
                    </div>
                    <input placeholder={this.state.editName} style={{width:'80%', height:40, display:'flex', alignSelf:'center',
                    borderRadius:24, paddingLeft:20}} value={this.state.name} onChange={(event)=>{
                        this.setState({
                            editName:event.target.value
                        })
                    }}/>
                    <input placeholder={this.state.editPhone} style={{width:'80%', height:40, display:'flex', alignSelf:'center',
                    borderRadius:24, paddingLeft:20}} value={this.state.phoneno} onChange={(event)=>{
                        this.setState({
                            editPhone:event.target.value
                        })
                    }}/>
                   
                    <button style={{width:100, display:'flex', border:'solid 1px', justifyContent:'center', height:35, alignItems:'center' ,alignSelf:'center',
                    borderRadius:12, backgroundColor:'#CC4C6E', color:'white'}}  onClick={this.editContact}>
                        Edit
                    </button>
                </div>
            </div>
        )
    }
}
