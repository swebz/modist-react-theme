import React from 'react'

class Breadcrumb extends React.Component{

    constructor(props){
         super(props)
    }

    render(){
         return(<p className="breadcrumbs"><span className="mr-2"><a href={'/'}>Home</a></span> <span>{this.props.currentpage}</span></p>)
    }
}

export default Breadcrumb;