// import axios from "axios";
// //fetch the data with the helps of props
// function Users({users}){
// return(
//   <ol>
//     {users.map((user)=>(
//       <li key={user.id}>
//        {user.name}   
//        {user.email}
//        </li>
//     ))}
//   </ol>
// )
// }
// //Logic to fetch the data
// export async function getServerSideProps(){
//   const {data:users}=await axios.get("https://jsonplaceholder.typicode.com/users");
//   return{
//     props:{
//       users,
//     }
//   };
// }
// export default Users;



// import {getStaticProps} from "next";

// export async  function getStaticProps(){
//   const res=await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts=await res.json();
//   //return the posts data as props 
//   return {props:{posts}}
// }

// const Page=(props)=>{
//   const {posts}=props;
//   return(
//     <ul>
//       {posts.map((post)=>(
//         <li key={post.id}>
//           <h2>{post.title}</h2>
//           <p>{post.body}</p>
//         </li>
        
//       ))}
//     </ul>
//   )
// }

// export default Page;


import Head from 'next/head';

function HomPage(){
  return(
    <>
      <Head>
      <title>My Next.js Website</title>
      <meta name="description" content="A great website using next.js" />
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <h1>Welcome to My Website </h1>
    </>
  )
}
export default HomPage;













