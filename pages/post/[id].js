import { useRouter } from "next/router";

const post=(props)=>{
    const router =useRouter();
    const {id}=router.query;
    return (
     <h1>Post with name:{id}</h1>
    )
}


export async function getServerSideprops(params){
    return {props:{post:data}}
}


export default post;