import React,{Component} from "react"
import Header from "./Header"
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
class Find extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"发现",
            findList:[
                {
                    thumb:'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
                    title:'朋友圈'
                },
                {
                    thumb:'https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png',
                    title:'扫一扫'
                }
            ]
        }
    }
    render(){
        return(
            <div className="find" >
                <Header title={this.state.title} />
                <List >
                {
                    this.state.findList.map((value,key)=>{
                        return  <Item
                        key={key}
                        thumb={value.thumb}
                        arrow="horizontal"
                        onClick={() => {}}
                        >{value.title}</Item>
                    })
                }
                
            </List>
            </div>
        )
    }
    
}
export default Find