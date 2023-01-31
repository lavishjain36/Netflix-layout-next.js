// import axios from "axios";
// import { useEffect, useState } from "react"

// const User=({userId})=>{
//     //create a hooks useState
//     const [user,setUser]=useState(null);

//     useEffect(()=>{
//         axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         .then(res=>{
//             setUser(res.data);
//         }).catch(error=>{
//             console.error(error);
//         });
//     },[userId])
//     if(!user){
//         return <p>Loading...</p>
//     }
//     return(
//         <div>
//             <h1>User:{user.id}</h1>
//             <p>Name:{user.name}</p>
//             <p>Email:{user.email}</p>
//             <p>Phone:{user.phone}</p>
//         </div>
//     )

// }

// User.getInitialProps=({query})=>{
//     return {userId:query.id};
// };

// export default User;


import React,{useState,useEffect} from 'react';
import axios  from 'axios';

const Comment=({commentId})=>{
    const [comment,setComment]=useState(null);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then((response)=>{
            setComment(response.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    },[commentId])
if(!comment){
    return <p>Loading...</p>
}

return(
    <div>
        <h1>Comment:{comment.id}</h1>
        <p>Name:{comment.name}</p>
        <p>Email:{comment.email}</p>
        <p>Body:{comment.body}</p>
    </div>
)

};
Comment.getInitialProps=({query})=>{
    return {commentId:query.id}
}

export default Comment;