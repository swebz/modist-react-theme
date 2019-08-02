import React from 'react'
import AboutHtml from '../template/aboutTemplate'
import Breadcrumb from './common/breadcrumb'
class About extends React.Component{

    constructor(props){
         super(props)
    }

    render(){
         return(<AboutHtml><Breadcrumb currentpage="About"/></AboutHtml>);
    }
}

export default About;