import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Rhome from '../components/route-nest/Rhome'
import User from '../components/route-nest/User'
import Shop from '../components/route-nest/Shop'
import NewsInfo from '../components/route-nest/NewsInfo'
import Main from '../components/route-nest/User/Main'
import UserInfo from '../components/route-nest/User/UserInfo'
let router = [
    {
        path: '/',
        component: Rhome,
        exact: true,
    },
    {
        path: '/user',
        component: User,
        routes: [ //嵌套路由
            {   
                type: Route,
                path: '/user/',
                component: Main
            },
            {
                type: Route,
                path: '/user/info/',
                component: UserInfo
            }
        ]
    },
    {
        path: '/shop',
        component: Shop,
    },{
        path: '/news',
        component: NewsInfo,
    },
]

export default router