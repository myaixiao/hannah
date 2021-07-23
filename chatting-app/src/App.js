import React,{Component} from 'react';
import './App.less';
import "./assets/css/index.css"
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import routes from "./model/router"
import TabBar from "./components/TabBars"
// import { Button } from 'antd-mobile';
class App extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <Router >
        <div className="App">
          {/* <div>
          <Button type="primary">Button</Button>
          </div> */}
          <TabBar />
          {
            routes.map((route,key)=>{
             if(route.extact){
              return <Route key={key} exact path={route.path} component={route.component}
              />
             }else{
              return <Route key={key}  path={route.path} component={route.component}
              />
             }
            })
          }
        </div>
        
      </Router>
    )
  }
}

export default App;
