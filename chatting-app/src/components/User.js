import React,{Component} from "react"
import Header from "./Header"

class User extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"我的"
        }
    }
    render(){
        return(
            <div className="user" >
                <Header title={this.state.title} />
                <div>
                    我的页面
                </div>
            </div>
        )
    }
    
}
export default User