import React,{useState} from 'react'
import Base from '../core/Base';
import {Link,Redirect} from 'react-router-dom'

import { signin,authenticate, isAutheticated}from "../auth/helper"

 const Signin=()=> {
     const [values,setValues]=useState({
        email: "d@hitesh.com",
        password: "12345",
        error: "",
        loading: false,
        didRedirect:false
     })

     const {email,password,error,loading,didRedirect}=values
     const {user}=isAutheticated();

     const onSubmit= event=>{
         event.preventDefault();
         setValues({...values,error:false,loading:true})
         signin({email,password})
         .then(data=>{
             if(data?.error){
                setValues({...values,error:data.error,loading:false})
             }
             else{
                 authenticate(data,()=>{
                     setValues({
                         ...values,
                         didRedirect:true
                     })
                 })
             }
         })
         .catch(console.log("signin request failed"))
     }
     
  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const performRedirect=()=>{
    if(didRedirect){
      if(user && user.role===1){
        return <Redirect to="/admin/dashboard"/>
      }else{
        return <Redirect to="/user/dashboard"/>
      }
    }
    if(isAutheticated()){
      return <Redirect to="/" />
    }
  }
  const LoadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>
            loading...
          </h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };


    const singinform=()=>{
        return(
         <div class="row">
          <div class="col-md-6 offset-sm-3 text-left">
              <form>
                  <div className="form-group">
                       <label className="text-white">email</label>
                       <input  onChange={handleChange("email")} value={email} className="form-control"  type="email"/>
                  </div>
                  <div className="form-group">
                       <label className="text-white">Password</label>
                       <input onChange={handleChange("password")} value={password} className="form-control" type="password"/>
                  </div>
                  <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
              </form>
          </div>
         </div>
        )
    }


    return (
        <Base title="sign in page" description="a page for user to sign in">
            {LoadingMessage()}
            {errorMessage()}
            {singinform()}
    <p className="text-center text-white ">{JSON.stringify(values)}</p>
            {performRedirect()}
        </Base>
    )
}
export default Signin;