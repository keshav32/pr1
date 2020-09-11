import React,{useState} from 'react'
import Base from '../core/Base';
import { isAutheticated } from '../auth/helper';
import { Link } from 'react-router-dom';
import { createCategory } from './helper/adminapicall';


const  AddCategory= ()=> {

    const [name,setName]=useState("")
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const{user , token}=isAutheticated();

    const goBack=()=>(
        <div className="mt-5">
        <Link className="btn btn-success btn-sm mb-3" to="/admin/dashboard">Admin Home</Link>
        </div>
    )
    const handleChange= event=>{
      setError("");
      setName(event.target.value);
    }
    const onsubmit=event=>{
      event.preventDefault();
      setError("");
      setSuccess(false);

      //backend
      createCategory(user._id,token,{name})
      .then(data=>{
          if(data.error){
              setError(true)
          }
          else{
              setError("")
              setSuccess(true)
              setName("")
          }
      })
    }

    const successMessage=()=>{
        if(success){
            return <h4 className="text-success">Category Created successfully</h4>
        }

    }
    const warningMessage=()=>{
       if(error){
        return <h4 className="text-success">Failed to create category</h4>

       }
    }

    const myCategoryForm =()=>(
        <form>
        <div className="form-group">
        <p className="lead">Enter the Category</p>
        <input type="text" className="form-control my-3" autoFocus required onChange={handleChange} value={name} placeholder="For Ex. Summer "/>
        <button className="btn btn-outline-info" onClick={onsubmit}>Create Category</button>
        </div>
        </form>
    )
    return (
      <Base title="Create a category here" description="add a new category of tshirt"
      className="container bg-info p-4">
      <div className="row bg-white rounded">
         <div className="col-md-8 offset-md-2">
         {successMessage()}
         {warningMessage()}
         {myCategoryForm() }
          {goBack()}
         </div>
      </div>
      </Base>
    )
}
export default AddCategory;
