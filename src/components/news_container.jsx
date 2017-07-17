import React,{Component} from "react"
import {Link} from "react-router"
//新闻列表路由
export default class NewsContainer extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <Link to="/detail/11111111">新闻1</Link>
                    </li>
                    <li>
                        <Link to="/detail/22222223">新闻1</Link>
                    </li>
                    <li>
                        <Link to="/usercenter">个人中心</Link>
                    </li>
                </ul>
            </div>
        )
    }
}