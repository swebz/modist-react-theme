import React from 'react';
import AlertMessage from "../util/alert-message"
function dashboard(prop){
       
     return(<div>
           <AlertMessage prop={prop}></AlertMessage>
           Welcome to dashboard
         </div>);
}

export default dashboard; 