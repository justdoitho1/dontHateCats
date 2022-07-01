import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Cats from "./pages/Cats";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/cats" element={<Cats />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
