import React,{Component} from "react"
import Header from "./Header"

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"首页"
        }
    }
    render(){
        return(
            <div className="home" >
                <Header title={this.state.title} />
                <div>
                    首页组件
                </div>
            </div>
        )
    }
    
}
export default Home