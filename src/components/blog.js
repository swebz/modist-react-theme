import React from 'react'

import BlogHtml from '../template/blogTemplate'
class Blog extends React.Component{
    constructor(props){
        super(props)
   }

   render(){
        return(<BlogHtml></BlogHtml>);
   }
}

export default Blog;