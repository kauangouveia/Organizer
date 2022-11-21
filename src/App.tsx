import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ListAssignment } from "./pages/listAssigment";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { GlobalStyle } from "./styles/global";
import { useNavigate } from "react-router-dom";




export function App() {
  

  return (



    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/list" element={<ListAssignment/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

