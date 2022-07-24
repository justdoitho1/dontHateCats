import { useState, useEffect } from "react";
//import { ajax_get } from "../api/Api";

const Cats = () => {
  const ajax_get = (url, callback) => {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        console.log("responseText:" + xmlhttp.responseText);
        try {
          var data = JSON.parse(xmlhttp.responseText);
        } catch (err) {
          console.log(err.message + " in " + xmlhttp.responseText);
          return;
        }
        callback(data);
      }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  };

  const [url, setUrl] = useState("");
  const [disLikeCount, setDisLikeCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

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

  //배열로? 객체로?
  const warningMessageObj = {
    1: "확실합니까?",
    2: "정말 이 고양이를 싫어하십니까?",
    3: "마지막으로 묻습니다. 이 고양이를 싫어하십니까?",
  };

  //싫어요 버튼 누를 때, 경고 메시지를 보여주기 위해 disLikeCount+1
  const disLikeClickHandler = () => {
    setDisLikeCount(disLikeCount + 1);
    setModalVisible(true);

    if (disLikeCount === 4) {
      //disLikeCount가 3초과 마지막 페이지 나옴
    }
  };

  const modalOkBtnHandler = () => {
    // setDisLikeCount(10);
  };

  //싫어요 버튼을 세 번 이상 눌렀을 때 어떻게 할 것인가

  //싫어요 버튼 누를 때마다 +1씩 함 +1되면 메시지를 보여주고,
  return (
    <>
      {{ url } && <img src={url} alt="cats" width={300} />}
      <br />
      <button onClick={likeClickHandler}>좋아요</button>
      <button onClick={disLikeClickHandler}>싫어요</button>
      {modalVisible && (
        <div>
          {warningMessageObj[disLikeCount]}
          <button onClick={modalOkBtnHandler}>네</button>
          <button>아니오</button>
        </div>
      )}
    </>
  );
};

export default Cats;
