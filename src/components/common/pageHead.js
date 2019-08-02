import React from 'react';
import Breadcrumb from './breadcrumb'
const PageHead=(props)=>(
<div className="hero-wrap hero-bread" style={{backgroundImage: 'url(images/bg_6.jpg)'}}>
<div className="container">
  <div className="row no-gutters slider-text align-items-center justify-content-center">
    <div className="col-md-9 ftco-animate text-center">
      <h1 className="mb-0 bread">{props.title}</h1>
      <Breadcrumb currentpage={props.bprop}/>
    </div>
  </div>
</div>
</div>)

export default PageHead