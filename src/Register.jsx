import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Register() {

    const [user, setUser] = useState({name:'',email:'',password:''});

    function registerUser(event){
        event.preventDefault();
        if(user.name === '' || user.email === '' || user.password === ''){
            toast.error('All fields are mandatory');
        }
        else{
            localStorage.setItem('user',JSON.stringify(user));
            toast.success('Registration successfull');
        }
    }

    function handleChange(event){
        setUser({...user, [event.target.name]: event.target.value});
    }
  return (
    <div>
        <form onSubmit={registerUser}>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' onChange={handleChange}/><br/>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' onChange={handleChange}/><br/>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' onChange={handleChange}/><br/>
            <input type='submit'/>
        </form>
        <Toaster/>
    </div>
  )
}

export default Register