import React, { Component, Dimensions } from 'react'
import axios from 'axios';
export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            contact: [],
            width:window.innerWidth
        }
    }
    handleResize = (e) => {
        this.setState({ width: window.innerWidth });
    };

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
    
    render() {
        const {contact, width} = this.state

        return (
            <div>
                {
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
                                    <div className={'contact-edit'}>
                                        <div style={{fontSize:12, fontWeight:'bold'}}>Edit</div>
                                    </div> 
                                </div> 
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
