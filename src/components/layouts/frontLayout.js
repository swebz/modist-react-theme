import React from 'react';
import Header from '../common/header'
import Footer from '../common/footer'
let FrontLayout=({children})=>{
       
     return(
          <div>
               <Header/>
               {children}
               <Footer/>
          </div>
     );
}

export default FrontLayout; 