import Home from './components/home'
import About from './components/about'
import Blog from './components/blog'
import BlogSingle from './components/blogSingle'
import Contact from './components/contact'
import FrontLayout from './components/layouts/frontLayout'
var router=[];
export default router=[
    {
        path:"/",
        exact:true,
        layout:FrontLayout,
        component:Home
   },
   {
        path:"/about",
        exact:false,
        layout:FrontLayout,
        component:About
    },
    {
        path:"/blog",
        exact:false,
        layout:FrontLayout,
        component:Blog
    },
    {
         path:'/blog-single',
         exact:false,
         layout:FrontLayout,
         component:BlogSingle
    },
    {
         path:'/contact',
         exact:false,
         layout:FrontLayout,
         component:Contact
    }

]