// import React, {useEffect, useState, useParams} from 'react';
// import axios from "axios";
// import styled from "styled-components"
// import { useNavigate } from 'react-router-dom';
// import {requestGet} from "../../../lib/api/api"



// const FreeBoardList = () => {
//   const navigate = useNavigate();
//   const [posts, setPosts] = useState([]);
//   const [page, setPage] = useState(0);
  


//   const getBoardList = () => {
//     // const resp = await axios.get(`http://i9d108.p.ssafy.io:9999/api/tech/post/${page}`)
//     requestGet(`free/comment/${postid}/${page}`)
//     .then(res=>{console.log(res.data);setPosts(res.data)})
   

//   }

//   useEffect(() => {
//     getBoardList() // 1) 게시글 목록 조회 함수 호출
//   }, []);

//   return (
    
//     <Slayout>
//       <Layout>

//       <div>
        
//         {/* {posts.slice(offset, offset + limit).map(({ id, title, detail, views, createAt,imagePath,memberId }) => ( */}
//         {posts.map(({ id, title, content, createAt,}) => (
//           <Contentbox key={id}>
//             <div>
              
//               <Titletext>
//                 {title}
//               </Titletext>
//               <Userbox>
//                 <Numbertext>|</Numbertext>
//                 <Numbertext>{createAt.slice(0,10)}</Numbertext>
//                 <Numbertext>|</Numbertext>
//               </Userbox>
//               {content}
//             </div>

            
//           </Contentbox>
//         ))}
//       </div>
//     </Layout>
      
//     </Slayout>
//   );
// };

// export default FreeBoardList;

// const Slayout = styled.div`
//   margin-top: 170px;
// `
// const Button = styled.div`
//   display: flex;
//   height: 50px;
//   padding: 20px 30px;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;
//   border-radius: 7px;
//   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
//   background-color: ${(props) => (props.color ? props.color : '#d9d9d9')};
//   color: white;
//   cursor: pointer;
// `

// const Layout = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   max-width: 800px;
//   margin: 0 auto;
// `;

// const Contentbox = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   border-top: 1px solid #f5a4a4;
//   border-bottom: 1px solid #f5a4a4;
//   margin-bottom: 20px;
//   border-radius: 3%;
//   width: 800px;
// `

// const Userbox = styled.div`
//   display: flex;
//   margin-bottom: 10px;
//   margin-top: 5px;
// `
// const Usertext = styled.div`
//   margin-left: 5px;
//   margin-right: 5px;
//   font-size: 13px;
// `
// const Numbertext = styled.div`
//   margin-left: 5px;
//   margin-right: 5px;
//   font-size: 13px;
//   margin-top: 3px;
// `
// const Titletext = styled.div`
//   font-size: 15px;
//   margin-left: 5px;
// `