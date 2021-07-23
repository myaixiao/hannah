import React,{Component} from "react"
import Header from "./Header"
import { List,SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
// import "../assets/css/index.css"
const Item = List.Item;
const Brief = Item.Brief;
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"微信",
            disabled: false,
            chatList:[
                {
                    // ../../src/assets/images/head.jpg
                    username:'爱笑的眼睛',
                    content:'你今天吃饭了吗？',
                    head:'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
                    created_at:'14:20'
                },
                {
                    username:'爱笑的眼睛',
                    content:'你今天吃饭了吗？',
                    head:'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
                    created_at:'14:20'
                },
                {
                    username:'爱笑的眼睛',
                    content:'你今天吃饭了吗？',
                    head:'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
                    created_at:'14:20'
                },
                {
                    username:'爱笑的眼睛',
                    content:'你今天吃饭了吗？',
                    head:'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
                    created_at:'14:20'
                },
                {
                    username:'爱笑的眼睛',
                    content:'你今天吃饭了吗？',
                    head:'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
                    created_at:'14:20'
                },
                {
                    username:'爱笑的眼睛',
                    content:'你今天吃饭了吗？',
                    head:'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
                    created_at:'14:20'
                },
                {
                    username:'爱笑的眼睛',
                    content:'你今天吃饭了吗？',
                    head:'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
                    created_at:'14:20'
                },
                {
                    username:'爱笑的眼睛',
                    content:'你今天吃饭了吗？',
                    head:'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
                    created_at:'14:20'
                },
                {
                    username:'爱笑的眼睛',
                    content:'你今天吃饭了吗？',
                    head:'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
                    created_at:'14:20'
                }
            ],
            serchnmae:''
        }
    }
    render() {
        return (<div>
            <Header title={this.state.title} />
            <SearchBar placeholder="搜索" value={this.state.serchnmae} maxLength={8} />
         
          <List  className="my-list">
            {
                this.state.chatList.map((value,key)=>{
                    return <Item key={key} extra={value.created_at} align="top" thumb={value.head} multipleLine>
                    {value.username} <Brief>{value.content}</Brief>
                  </Item>
                })
            }
            
          </List>
         
         
        </div>);
      }
    // render(){
    //     return(
    //         <div className="home" >
    //             <Header title={this.state.title} />
    //             <div>
    //                 首页组件
    //             </div>
    //         </div>
    //     )
    // }
    
}
export default Home