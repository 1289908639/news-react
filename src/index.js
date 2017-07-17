import  React from "react"
import ReactDOM from "react-dom"
import {Router,Route,hashHistory,IndexRoute} from "react-router"
import App from "./components/app.jsx"
import NewsContainer from "./components/news_container.jsx"
import NewsDetail from "./components/news_detail.jsx"
import UserCenter from "./components/user_center.jsx"

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={NewsContainer} />
        <Route path="/detail/:uniqueKey" component={NewsDetail} />
        <Route path="/usercenter" component={UserCenter} />
        </Route>
 </Router>
),document.getElementById("root"))