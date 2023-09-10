import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import Layout from "./components/Layout/Layout.jsx";
import {SingleUserPage} from "./pages/SingleUserPage/SingleUserPage.jsx";
import UsersPage from "./pages/UsersPage/UsersPage.jsx";
import {RedirectPage} from "./pages/RedirectPage/RedirectPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RedirectPage/>}/>
          <Route path={'/users'} element={<UsersPage />} />
          <Route path={'users/:id'} element={<SingleUserPage/>}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
