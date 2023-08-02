import * as React from "react";
import { styled } from "styled-components";
import { useState } from "react";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

export default function ImgMediaCard({ item, onLike }) {
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike(item);
  };

  return (
    <SCard $isRented={item.isRented}>
      <SCardMedia image={item.image}>
        <div>{item.isRented ? <SRental>대여 완료</SRental> : ""}</div>
      </SCardMedia>
      <SLike onClick={handleLike} isLiked={isLiked}>
        {isLiked ? <StarRoundedIcon /> : <StarOutlineRoundedIcon />}
      </SLike>
      <SCardText>
        <STitleAndProduct>
          <STitle>{item.title}</STitle>
          <SProduct>{item.product}</SProduct>
        </STitleAndProduct>
        <SDayAndCost>
          <SDay>
            최소 {item.minday}일 / 최대 {item.maxday}일
          </SDay>
          <SCostAndReservation>
            {item.isReservation ? <SReservation>예약 중</SReservation> : ""}
            <SCost>
              {item.daycost}원 / {item.savecost}원
            </SCost>
          </SCostAndReservation>
        </SDayAndCost>
      </SCardText>
    </SCard>
  );
}

const SCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px black;
  max-width: 345px;
  ${(props) => props.$isRented && `background: rgba(128, 128, 128, 0.5);`}
  border-radius: 10px;
`;

const SCardMedia = styled.div`
  width: 185px;
  height: 122px;
  border-radius: 10px 10px 0px 0px;
  background: url(${(props) => props.image}),
    ${(props) => (props.$isRented ? "rgba(128, 128, 128, 0.5)" : "lightgray")}
      50% / cover no-repeat;
  position: relative;
`;

const SLike = styled(({ isLiked, ...props }) => <div {...props} />)`
  width: 19px;
  height: 19px;
  position: absolute;
  left: 158px;
  top: 8px;
`;

const SCardText = styled.div`
  display: flex;
  width: 185px;
  height: 85px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const STitleAndProduct = styled.div`
  display: flex;
  width: 167px;
  justify-content: space-between;
  align-items: center;
`;

const SDayAndCost = styled.div`
  display: flex;
  width: 167px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const SCostAndReservation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%
`;

const STitle = styled.p`
  color: #000;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
`;

const SProduct = styled.p`
  color: #000;
  text-align: center;
  font-size: 8px;
  font-weight: 700;
  line-height: normal;
`;

const SDay = styled.p`
  align-self: flex-end;
  color: #000;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
`;

const SReservation = styled.p`
  padding: 4px 8px;
  border-radius: 5px;
  background: var(--reserved, #bd84fc);
  color: white;
  font-size: 8px;
  font-weight: 700;
`;

const SCost = styled.p`
  display: flex;
  height: 18px;
  flex-direction: column;
  justify-content: center;
  color: #000;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
`;

const SRental = styled.div`
  position: absolute;
  bottom: 0;
  color: #fff;
  width: 100%;
  text-align: center;
  padding: 5px 0;
  font-size: 18px;
  font-weight: 700;
`;