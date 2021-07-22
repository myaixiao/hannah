import React,{Component} from "react"
import Header from "./Header"

class Find extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"发现"
        }
    }
    render(){
        return(
            <div className="find" >
                <Header title={this.state.title} />
                <div>
                    sdfsfsaf
                </div>
            </div>
        )
    }
    
}
export default Find