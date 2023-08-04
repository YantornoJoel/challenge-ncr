import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Detail } from "../components/Detail.component";
import { List } from "../components/List.component";
import { Nav } from "../components/Nav.component";

export const ApiRouter = () => {
  return (
    <>
      <Router>
        <Nav />
        <div className="mt-[100px]">
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/:id" element={<Detail />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};
