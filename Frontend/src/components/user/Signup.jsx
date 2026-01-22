import React,{Fragment,useState,useEffect} from 'react'
import toast, { Toaster } from "react-hot-toast"
import {useDispatch,useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getSignup} from "../../store/User/user-action";
import { userActions } from '../../store/User/user-slice';


const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {isAuthenticated,errors,loading} = useSelector((state)=>state.user);
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        phoneNumber:""
    })

    const {name, email, password, confirmPassword, phoneNumber} = user;

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log('Submit handler called');
        
        if(!name || !email || !password || !confirmPassword || !phoneNumber){
            toast.error("Please fill all fields");
            return;
        }
        
        if(password !== confirmPassword){
            toast.error("Passwords do not match");
            return;
        }
        
        if(password.length < 6){
            toast.error("Password must be at least 6 characters");
            return;
        }
        
        const userData = {
            name,
            email,
            password,
            passwordConfirm: confirmPassword,
            phoneNumber
        };
        
        console.log("Sending signup data:", userData);
        dispatch(getSignup(userData))
    }

    const onChange = (e) =>{
      setUser({...user,[e.target.name]:e.target.value})
    }
    
    useEffect(()=>{
        if(errors){
            toast.error(errors);
            dispatch(userActions.clearErrors())
        }
        else if(isAuthenticated){
            navigate("/");
            toast.success("User registered successfully")
        }
    },[isAuthenticated,errors,navigate,dispatch])
    
  return (
    <Fragment>
        <Toaster position="top-right" />
        <div className='row wrapper'>
            <form onSubmit={submitHandler} className='col-10 col-lg-5'>
            <h1 className='mb-3'>Register</h1>
            <div className='form-group'>
                <label htmlFor='name_field'>Name</label>
                <input type='text' id='name_field' className='form-control' name='name' value={name} onChange={onChange}/>
            </div>
            <div className='form-group'>
                <label htmlFor='email_field'>Email</label>
                <input type='email' id='email_field' className='form-control' name='email' value={email} onChange={onChange}/>
            </div>
            <div className='form-group'>
                <label htmlFor='password_field'>Password</label>
                <input type='password' id='password_field' className='form-control' name='password' value={password} onChange={onChange}/>
            </div>
            <div className='form-group'>
                <label htmlFor='confirmPassword_field'>Confirm Password</label>
                <input type='password' id='confirmPassword_field' className='form-control' name='confirmPassword' value={confirmPassword} onChange={onChange}/>
            </div>
            <div className='form-group'>
                <label htmlFor='phoneNumber_field'>Phone Number</label>
                <input type='text' id='phoneNumber_field' className='form-control' name='phoneNumber' value={phoneNumber} onChange={onChange}/>
            </div>
            <button id='register_button' type='submit' className='btn btn-block py-3' disabled={loading}>
                {loading ? 'REGISTERING...' : 'REGISTER'}
            </button>
            </form>
        </div>
    </Fragment>
  )
}

export default Signup
