import React from 'react';
//import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link } from "react-router-dom";
import router from './Router';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  let i=0;
  return (<Router><div>
                 {router.map(obj=>{
                            return <Route key={i++} 
                                          path={obj.path} 
                                          exact={obj.exact} 
                                          component={(props)=>
                                                            {
                                                              return <obj.layout {...props}>
                                                                        <obj.component {...props}/>
                                                                    </obj.layout>
                                                            }} />
                                                                                      
                               
             
                                  })
                  }
  </div>
  </Router>
  )
}

export default App;
