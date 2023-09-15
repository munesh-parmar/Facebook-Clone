import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Editprofile from "./pages/editprofile/Editprofile";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";


function App() {
  return (
    <div className="app">
   <BrowserRouter>
   <Routes>
    <Route path="/">
      <Route path="login" element={<Login />}/>
      <Route path="register" element={<Register />}/>
       <Route index element={<Home />}/>

<Route path="profile">

<Route path=":userId" element={<Profile />}/>
<Route path=":userId/edit" element={<Editprofile/>}/>
    </Route>
    </Route>

   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
