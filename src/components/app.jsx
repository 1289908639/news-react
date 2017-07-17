import React,{Component} from "react"
//主路由
export default class App extends Component{
    render(){
        return(
            <div>
                <div>李虎双是神</div>
                {this.props.children}
                <div>神是李虎双！</div>
            </div>
        )
    }
}