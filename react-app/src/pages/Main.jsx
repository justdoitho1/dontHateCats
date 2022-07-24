import styled from "styled-components";
import { Link } from "react-router-dom";
import { ajax_get } from "../api/Api";
import { useEffect } from "react";
const Main = () => {
  //param : url, callback
  // let id = "";
  // let imgData = "";

  // const getCatImage = ajax_get(
  //   "https://api.thecatapi.com/v1/images/search?size=full",
  //   function(data){
  //     console.log(data);
  //     id = data[0].id;
  //     imgData = data[0].url;
  //   }
  // );

  return (
    <>
      <h1>Don't Hate Cats</h1>
      {/* <Link to="/cats">
        <BtnLink>입장하기</BtnLink>
      </Link> */}
    </>
  );
};

const BtnLink = styled.button``;

export default Main;
