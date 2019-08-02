import React from 'react';
function login(prop){

    const handleSubmit=()=>{
       
          prop.history.push('/dashboard',{ response: {status:'success',msg:'Great'} })
    }
    return(<div id="login" className="h-100">
         
    <div className="col-md-4 offset-md-4 rounded-sm login-Box">
    <div className="text-center"><h4>LOGIN FORM</h4></div>   
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" className="form-control"/>
            
      </div>

      <div className="form-group">
      <label>Password</label>
      <input type="password" name="password" className="form-control"/>
      </div>
      
      <div className="text-center">
      <button className="btn btn-success" type="submit">LOGIN</button>
      </div>
      </form>
   </div>
</div>);
}

export default login;