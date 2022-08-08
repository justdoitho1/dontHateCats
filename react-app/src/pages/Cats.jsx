import { useState, useEffect } from "react";
import ajax_get from "../api/Api";

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

  // todo css : 좋아요든 싫어요든 클릭하면 fade out 애니메이션
  // todo   싫어요 버튼을 세 번 이상 눌렀을 때 어떻게 할 것인가
  // ROUTE 처리
  // 컴포넌트 구분 !

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
      {{ url } && <img src={url} alt="cats" width={300} />}
      <br />
      <button onClick={likeClickHandler}>좋아요</button>
      <button onClick={disLikeClickHandler}>싫어요</button>
      {modalVisible && (
        <div>
          {afterDislikeMessageObj[disLikeCount]}
          <button onClick={modalOkBtnHandler}>네</button>
          <button>아니오</button>
        </div>
      )}
      {warningModalVisible && (
        <div>
          {warningMessageObj[warningCount]}
          <button onClick={warningModalOkBtnHandler}>
            흥! 난 그래도 고양이가 싫어
          </button>
        </div>
      )}
    </>
  );
};

export default Cats;
