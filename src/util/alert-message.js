import React from 'react';
function AlertMessage(props){
    var handleAlertDismiss=()=>{
         
    }
    let prop=props.prop;
    var msg=""
    if(typeof prop.history.location.state!=undefined){
        console.log(prop.history.location.state)
        let response=prop.history.location.state.response
        
        msg=<div className={`alert alert-${response.status}`} >
                <button  className="close" data-dismiss="alert" aria-label="close" onClick={handleAlertDismiss.bind(this)}>&times;</button>
                    {response.msg}
                    </div>
       
    }

    
    return(msg);
}

export default AlertMessage;

