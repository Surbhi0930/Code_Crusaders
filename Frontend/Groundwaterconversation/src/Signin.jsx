import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Signin() {
    let navigate=useNavigate()
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const postDate=()=>{
        fetch("http://localhost:3000/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email,
                password:password
            })
        }).then(res=>res.json())
        .then((data)=>{
            console.log(data);
            localStorage.setItem("SIH2024",data);
            alert(`${email} signin successfully`)
            navigate("/")
        })
        .catch((err)=>{console.log(err)})
    }
  return (
    <div className='page'>
         <h1 style={{textAlign:"center",color:'black'}}>SignIn</h1>
        <div className="container">
            <div className="formin">
        <input type="text" name="email" id="email" placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" name="password" id="password" placeholder='Enter Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <input type="submit" value="Submit" onClick={postDate} style={{backgroundColor:"chartreuse",color:"black",border:"0.5px solid black"}} />
            </div>
        </div>
        <div style={{textAlign:"center"}}>
            <p style={{color:"white"}}>If not having Account ? <Link to='/signup'>SignUp</Link></p>
        </div>
    </div>
  )
}

export default Signin