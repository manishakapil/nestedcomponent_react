import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';
import { LOGOUT } from '../actions/authActions';
import Navbar from '../components/navbar';
import CommentWrapper from '../components/CommentWrapper';
import useFnc from '../hooks/useFnc';
import Button from '@mui/material/Button';

function Dashboard() {

  const userData = useSelector((state)=>state.authReducer);
  const dispatch = useDispatch();
  const functions =  useFnc()

  let comments = [
    {
        "id" : 1000,
        "data" : "hello",
        "reply" : [
            {
                "id" : 2,
                "data" : "hello world",
                "reply" : [
                    {
                        "id" : 3,
                        "data" : "hello world 123",
                        "reply" : []
                    },
                    {
                        "id" : 4,
                        "data" : "hello world 567",
                        "reply" : []
                    }
                ]
            }
        ]   
    },
  ]

  if (localStorage.getItem("comments")) {
    comments = JSON.parse(localStorage.getItem("comments"))
  }

  const [commentstate,setcommentstate] = useState("")
  const [commentdata,setCommentdata] = useState(comments)


  function handlecommentClick(){
    let valueadd = functions.addComment(commentdata,commentstate)
    setCommentdata(valueadd)
    setcommentstate("")
    console.log(valueadd)
  }

  function logout(){
    googleLogout();
    console.log("getting logout")
    dispatch({type : LOGOUT} )
    localStorage.removeItem("username")
  
    return <Navigate to="/signin" replace />
  }

  if(userData.isLoggedIn === false){
    return <Navigate to="/signin" replace />
  }

  return (
    <div>
      <Navbar NavLogout= {logout}/>
      <div className="text-box-container mt-5 text-center">
      <input
        type="text"
        value={commentstate}
        onChange={(e)=>{setcommentstate(e.target.value)}}
        placeholder="Enter some text"
        className='input_add_text'
      />
      <Button onClick={handlecommentClick} color="success" variant="contained">SUBMIT</Button>
    </div>
      <CommentWrapper  
        comments = {commentdata}  
        allcomments = {commentdata}  
        functions = {functions} 
        setCommentdata ={setCommentdata}
        />
    </div>

  )
}

export default Dashboard