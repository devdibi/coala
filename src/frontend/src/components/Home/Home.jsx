import React, { useState } from 'react';
import { styled } from 'styled-components';
import ContractContainer from '../Contract/containers/ContractContainer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onChangeModalFlag = () => {
    setIsOpen(!isOpen);
  }

  // 카카오페이 테스트 데이터 경로 입니다.
  function payment() {
    var url = 'https://developers.kakao.com/demo/pay/prepare'
    var params = {
        agent: 'web',
        itemCode: '1',
        quantity: '5',
    }
    return url + '?' + '1regjlenrgqlhsajkd'
  }
  // ================

  return(
    <SLayout>
      <div>Home</div>
      <button onClick={onChangeModalFlag}>계약서(임의)</button>
      <a href={payment()}> <img src="/assets/images/payment__small.png" /></a>
      {isOpen && <ContractContainer onChangeModalFlag={onChangeModalFlag}/>}
    </SLayout>
  )
};

const SLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`
const Homelayout = styled.div`
  width: 100%;
  height : 300px;
`
const Img  = styled.img`
  display: flex;
  flex-direction: column;
  justify-content:start;
  width: 100vw;
  height: 1080px;

`
const Img2 = styled.img`
   width: 100vw;
`
export default Home;
