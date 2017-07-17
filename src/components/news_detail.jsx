import React,{Component} from "react"
//新闻详情路由
export default class NewsDetail extends Component{
    render(){
        return(
            <div>
                新闻unique为：{this.props.params.uniqueKey}
            </div>
        )
    }
}