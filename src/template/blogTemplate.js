import React from 'react';
import PageHead from '../components/common/pageHead'
import { Link } from 'react-router-dom'
const BlogHtml=(props)=>(
    <div>
       <PageHead title="Blog" bprop="Blog"/>
    <section className="ftco-section">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <Link to={'/blog-single'} className="block-20" style={{backgroundImage:' url(images/image_1.jpg)'}} replace>
              </Link>
              <div className="text mt-3 d-block pl-md-5">
                <h3 className="heading mt-3"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                <div className="meta mb-3">
                  <div><a href="#">Dec 6, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
            <Link to={'/blog-single'} className="block-20" style={{backgroundImage:' url(images/image_2.jpg)'}}>
              </Link>
              <div className="text mt-3 d-block pl-md-5">
                <h3 className="heading mt-3"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                <div className="meta mb-3">
                  <div><a href="#">Dec 6, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
            <Link to={'/blog-single'} className="block-20" style={{backgroundImage:' url(images/image_3.jpg)'}}>
              </Link>
              <div className="text mt-3 d-block pl-md-5">
                <h3 className="heading mt-3"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                <div className="meta mb-3">
                  <div><a href="#">Dec 6, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
            <Link to={'/blog-single'} className="block-20" style={{backgroundImage:' url(images/image_4.jpg)'}}>
              </Link>
              <div className="text mt-3 d-block d-block pl-md-5">
                <h3 className="heading mt-3"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                <div className="meta mb-3">
                  <div><a href="#">Dec 6, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <Link to={'/blog-single'} className="block-20" style={{backgroundImage:' url(images/image_5.jpg)'}}>
              </Link>
              <div className="text mt-3 d-block pl-md-5">
                <h3 className="heading mt-3"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                <div className="meta mb-3">
                  <div><a href="#">Dec 6, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <Link to={'/blog-single'} className="block-20" style={{backgroundImage:' url(images/image_6.jpg)'}}>
              </Link>
              <div className="text mt-3 d-block pl-md-5">
                <h3 className="heading mt-3"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                <div className="meta mb-3">
                  <div><a href="#">Dec 6, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <div className="block-27">
              <ul>
                <li><a href="#">&lt;</a></li>
                <li className="active"><span>1</span></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">&gt;</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </div>
)

export default BlogHtml