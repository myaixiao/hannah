import Home from "../components/Home"
import MailList from "../components/MailList"
import Find from "../components/Find"
import User from "../components/User"
const routes=[
    {
        path:'/',
        component:Home,
        extact:true
    },
    {
        path:'/maillist',
        component:MailList
    },
    {
        path:'/find',
        component:Find,
    },
    {
        path:'/user',
        component:User
    }
]
export default routes