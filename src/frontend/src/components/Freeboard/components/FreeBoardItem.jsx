// import React,{useState,useRef} from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Viewer } from '@toast-ui/react-editor';
// import '@toast-ui/editor/dist/toastui-editor-viewer.css';
// import styled from 'styled-components'
// import { requestGet, requestPost } from '../../../lib/api/api';
// import { BiLike } from "react-icons/bi";

// const TechBoardItem = ({ postid, title, detail, createAt, imagePath }) => {
//   const navigate = useNavigate();
//   console.log(createAt);
//   const moveToUpdate = () => {
//     navigate('/tech/update/' + postid);
//   };
  // const [postData, setPostData] = useState(null);
  // const [pictures, setPictures] = useState([]); 
  // const [pictureNum, setPictureNum] = useState(0);
  // const [like, setlike] = useState(false);
  // const [login, setLogin] = useState(false);
  // const [currentUser, setCurrentUser] = useState("현재 로그인한 사용자 정보");
  // const [postAuthor, setPostAuthor] = useState("게시글 작성자 정보");
  // const isAuthor = currentUser === postAuthor;
  // const [showModal, setShowModal] = useState(false);
  // const picturePlusBtn = () => {
  //   setPictureNum((pictureNum + 1) % "사진수");
  // };
  // const pictureMinusBtn = () => {
  //   setPictureNum((pictureNum + "사진수" - 1) % "사진수");
  // };
  // const likeBtn = () => {
  //   setlike(!like);
  // };

  // const deleteBoard = async () => {
  //   if (window.confirm('게시글을 삭제하시겠습니까?')) {
  //     try {
  //       const response = await axios.delete(`http://i9d108.p.ssafy.io:9999/api/tech/post/delete/${postid}`);
  //       if (response.status === 200) {
  //         alert('삭제되었습니다.');
  //         navigate('/tech');
  //       }
  //     } catch (error) {
  //       console.error("Error deleting board:", error);
  //     }
  //   }
  // };

  // const moveToList = () => {
  //   navigate('/tech');
  // };
//     // 마크다운
  
//     // HTML: span태그 글자색을 파란색으로 설정



//   return (
//     <Slayout>
      
//       <div>
//         <Profiletext>작성자</Profiletext>
//         <Titlecontainer>
//         <div>
//         <Titletext>{title}</Titletext>
//         <Createat>{createAt && createAt.slice(0,10)}</Createat>
//         </div>
//         <BiLike onClick={likeBtn}/>
//         </Titlecontainer>
//         <hr />
//         <Detailconteiner>
//         {/* <button onClick={pictureMinusBtn}>{"<"}</button>
//         {pictures.length > 0 && <SImg src={pictures[pictureNum]} alt="" />}
//         <button onClick={picturePlusBtn}>{">"}</button> */}
//         <Viewer initialValue={detail} />

//         </Detailconteiner>
//         <LIkeconteiner>
//         <p>조회수0</p>
//         <p></p>
//         <p>추천수0</p>
//         </LIkeconteiner>
//       </div>
//       <SBtnContainer>
//         <SBtn onClick={moveToUpdate}>수정</SBtn>
//         <SBtn onClick={deleteBoard}>삭제</SBtn>
//         <SBtn onClick={moveToList}>뒤로가기</SBtn>

//       </SBtnContainer>
//     </Slayout>
//   );
// };

// export default TechBoardItem ;

// const Slayout = styled.div`
//   margin-top: 170px;
//   width: 800px;
// `

// const SBtn = styled.div`
//   font-size: 8px;
//   display: flex;
//   height: 50px;
//   padding: 20px 30px;
//   justify-content: center;
//   align-items: center;
//   border-radius: 7px;
//   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
//   background-color: ${(props) => (props.color ? props.color : '#d9d9d9')};
//   color: white;
//   cursor: pointer;`

// const SBtnContainer = styled.div`
// display: flex;
// padding: 10px;
// margin-bottom: 100px;
// justify-content: center;
// align-items: center;
// gap: 10px;
// `;

// const Profiletext = styled.div`
  
//   width: 800px;
//   margin-bottom: 3px;
//   font-size: 12px;
//   border-bottom: 1px solid #f5a4a4;

// `

// const LIkeconteiner = styled.div`
//   display: flex;
//   font-size: 10px;
// `

// const Detailconteiner = styled.div`

// `

// const SImgs = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// gap: 10px;
// `

// const SImg = styled.img`
// width: 800px;
// height: 372px;
// `
// const Titletext = styled.div`
//   font-size: 20px;
//   margin-bottom: 3px;
// `
// const Titlecontainer = styled.div`
//   display: flex;
//   justify-content: space-between;
// `
// const Createat = styled.div`
//   font-size: 10px;
// `