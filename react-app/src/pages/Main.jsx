import styled from "styled-components";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <>
      <h1>고양이 밭에 어서오세요</h1>
      <Link to="/cats">
        <BtnLink>입장하기</BtnLink>
      </Link>
    </>
  );
};

const BtnLink = styled.button``;

export default Main;
