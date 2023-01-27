// // import styled from "styled-components"


// // const Title = styled.h1`
// //   font-size: 1.5em;
// //   text-align: center;
// //   color: red;
// // `;

// // const Wrapper = styled.section`
// //   padding: 20px;
// //   width: 500px;
// //   margin:200px;
// //   background: blue;
// // `;


// // function HomePage(){
// //   return(
// //     <Wrapper>
// //      <Title>Hello Buddy</Title>
// //     </Wrapper>
// //   )
// // }

// // export default HomePage;


// function MyComponent(){
// return(
//   <div>
//     <p className="my-class">Hello World</p>
//      <button className="btn">Submit</button>
//     <style jsx>{`
//     .my-class{
//       font-size:30px;
//       color:red;
//       font-weight:bold;
//       background-color:yellow;
//       width:800px;
//       padding:100px;
//     }
//     .btn{
//       padding:20px;
//       background-color:green;
//       cursor:pointer;
//       outline:none;
//       margin:5px;
//       font-size:20px;
//     }
//     `}</style>
//   </div>
// )
// }
// export default MyComponent;

import Title from "./styles.js";


function MyComponent(){
  return(
    <div>
      <Title>Hello Shital.You are Learning Styled jsx</Title>
    </div>
  )
}

export default MyComponent;