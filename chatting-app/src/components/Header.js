import { NavBar, Icon } from 'antd-mobile';
import React,{ Component } from 'react';

class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            <NavBar
              mode="dark"
              icon={<Icon type="left" />}
              onLeftClick={() => console.log('onLeftClick')}
              rightContent={[
                // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
              ]}
            >{this.props.title}</NavBar>
          </div>
        )
    }
}
export default Header;