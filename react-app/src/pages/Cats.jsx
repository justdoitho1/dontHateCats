import { useState, useEffect } from "react";
import ajax_get from "../api/Api";
import styled from "styled-components";

/**
 * todo : 모달 버튼 CSS, 로직 추가, 길이에 따른 위치 조정(미정), FADE OUT, 고양이가 싫으세요? 질문 대답에 아니오 시 로직 추가 필요
 * @returns
 */
const Cats = () => {
  const [url, setUrl] = useState("");
  const [disLikeCount, setDisLikeCount] = useState(0);
  const [warningCount, setWarningCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [warningModalVisible, setWarningModalVisible] = useState(false);

  const getImgAPI = () => {
    ajax_get(
      "https://api.thecatapi.com/v1/images/search?size=full",
      function (data) {
        setUrl(data[0]["url"]);
      }
    );
  };

  useEffect(() => {
    getImgAPI();
  }, []);

  const likeClickHandler = () => {
    getImgAPI();
  };

  //질문 메시지
  const afterDislikeMessageObj = {
    1: "고양이를 싫어하세요?",
    2: "고양이의 효능~ 이토록 사랑스럽고 아름답고 골져스한 고양이가 정말로 싫으세요?",
    3: "마지막으로 묻습니다. 고양이를 싫어하십니까?",
  };

  //경고 메시지
  const warningMessageObj = {
    1: "흠... 알겠습니다.",
    2: "흠. 그렇군요?",
    3: "그래도 고양이를 미워하지 말아주세요!",
  };

  /**
   * 싫어요 버튼 로직.
   * 싫어요 버튼 첫 번째로 누르면, 경고메시지 모달 뜸.
   * 경고메시지 모달에서 Y 클릭하면, 흠.... 알겠습니다 모달 뜬 뒤 fade out
   * 싫어요 버튼 두 번째로 누르면, 경고메시지 모달 뜸.
   * 경고메시지 모달에서 y 클릭하면, 흠. 그렇군요? 모달 뜬 뒤 fade out
   * 싫어요 버튼 세 번째로 누르면, 마지막으로 묻습니다. 고양이를 싫어하십니까? 경고메시지.
   * Y 클릭하면 새 페이지로 넘어감.
   * N 클릭하면 새 페이지로 넘어가지 않음.
   */
  //싫어요 버튼 누를 때, 경고 메시지를 보여주기 위해 disLikeCount+1

  //싫어요 버튼 클릭 시
  const disLikeClickHandler = () => {
    setDisLikeCount(disLikeCount + 1);
    setModalVisible(true);
  };

  //질문 모달 Y 클릭 시
  const modalOkBtnHandler = () => {
    setModalVisible(false);
    setWarningCount(warningCount + 1);
    getImgAPI();
    setWarningModalVisible(true);
  };

  //경고 모달 Y 클릭 시
  const warningModalOkBtnHandler = () => {
    setWarningModalVisible(false);
  };

  return (
    <>
      <Main>
        <LogoBox>
          <h1>고양이 좋아하세요?</h1>
          <h7>좋아요 버튼을 눌러보세요! </h7>
          <br></br>
          <h7> 끊임없이 고양이가 나온답니다!</h7>
          <LogoImg></LogoImg>
        </LogoBox>
        <CatsImgBox>
          {{ url } && <CatsImg src={url} alt="cats" width={300} />}
        </CatsImgBox>
        <BtnBox>
          <LikeBtn backgroundColor={"yellow"} onClick={likeClickHandler}>
            완전 진짜 너무 좋아요
          </LikeBtn>
          <LikeBtn onClick={disLikeClickHandler}> 별로.. 싫어요...</LikeBtn>
        </BtnBox>
        {modalVisible && (
          <ModalBox>
            {afterDislikeMessageObj[disLikeCount]}
            <br></br>
            <BtnBox>
              <button onClick={modalOkBtnHandler}>네</button>
              <button>아니오</button>
            </BtnBox>
          </ModalBox>
        )}
        {warningModalVisible && (
          <ModalBox>
            {warningMessageObj[warningCount]}
            <BtnBox>
              <button onClick={warningModalOkBtnHandler}>
                흥! 그래도 고양이가 싫어
              </button>
            </BtnBox>
          </ModalBox>
        )}
      </Main>
    </>
  );
};

const Main = styled.div`
  position: absolute;
`;

const ModalBox = styled.div`
  width: 60%;
  height: 10%;
  position: fixed;
  text-align: center;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 10%;
  border-radius: 10px;
`;

const LogoBox = styled.div`
  height: 20vh;
  width: 100%;
  text-align: center;
`;

//이미지 할거면 추가
const LogoImg = styled.img``;

const CatsImgBox = styled.div`
  height: 45vh;
  text-align: center;
  overflow: hidden;
  //background-color: skyblue;
`;

const CatsImg = styled.img`
  width: 100%;
  height: auto;
`;

const BtnBox = styled.div`
  text-align: center;
  padding : 5% 0;
`;

const LikeBtn = styled.button`
  position: relative;
  border: none;
  display: inline-block;
  padding: 15px 30px;
  border-radius: 10px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;
  margin: 10px;
  background-color: ${(props) => props.backgroundColor};
`;
export default Cats;
