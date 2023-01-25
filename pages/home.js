// function Home(){
//     return(
//     <div>
//     <h2>This is Home Page</h2>
//     </div>
//     )
    
// }

// export default Home;

import Router from "next/router";

function handleClick(){
    Router.push('/about')
}

const Home=()=>{
    return(
        <div>
        <h1>Welcome to my website</h1>
        <button onClick={handleClick}>Learn more about us</button>
    </div>
    )
   
}
export default Home;