import React,{Component} from "react"
import Header from "./Header"

class MailList extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"通讯录"
        }
    }
    render(){
        return(
            <div className="home" >
                <Header title={this.state.title} />
                <div>
                    通讯录list组件
                </div>
            </div>
        )
    }
    
}
export default MailList