import React, { Component } from "react"
import Header from "./Header"
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
class MailList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "通讯录",
            chatList:[
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
                },
                {
                    username:'爱笑的眼睛',
                    content:'你今天吃饭了吗？',
                    head:'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
                    created_at:'14:20'
                }
            ]
        }
    }
    render() {
        return (
            <div className="home" >
                <Header title={this.state.title} />
                <List  className="my-list">
                    {
                        this.state.chatList.map((value,key)=>{
                            return <Item key={key}  align="top" thumb={value.head} multipleLine onClick={() => { }}>
                            {value.username} <Brief>{value.content}</Brief>
                        </Item>
                        })
                    }
                    
                </List>
         
                {/* <List  className="my-list">
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        onClick={() => { }}
                    >
                        Title <Brief>subtitle</Brief>
                    </Item>
                </List> */}
            </div>
        )
    }

}
export default MailList