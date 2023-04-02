import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { IndexPage } from "./pages/IndexPage/IndexPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { UserContextProvider } from "./context/UserContext";
import { CreateNewPost } from "./pages/CreateNewPost/CreateNewPost";

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/create" element={<CreateNewPost />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
