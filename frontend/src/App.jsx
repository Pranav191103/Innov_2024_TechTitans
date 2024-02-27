import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Home from "./pages/Home.jsx";
import SignIn from "./pages/Signin.jsx";
import SignUp from "./pages/Signup.jsx";
/*import About from "./pages/About.jsx";
import Profile from "./pages/Profile.jsx";

import Header from "./components/Header.jsx";
import PrivateRoute from "./components/privateRoute.jsx";
*/
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
