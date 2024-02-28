import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx"; // Import your Header component
import SignIn from "./pages/Signin.jsx"; // Import your SignIn component
import SignUp from "./pages/Signup"; // Import your SignUp component
import Home from "./pages/Home.jsx";
import Levels from "./pages/Levels.jsx";
import Profile from "./pages/Profile.jsx";
let isAuthPage = "";

const HeaderContainer = () => {
  const location = useLocation();
  isAuthPage = location.pathname === "/" || location.pathname === "/sign-up";

  return !isAuthPage && <Header />;
};

const App = () => {
  return (
    <BrowserRouter>
      {!isAuthPage && <HeaderContainer />}
      {/* Render the Header component conditionally */}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/:_id/Home" element={<Home />} />
        <Route path="/:user/selectedLanguageLevels" element={<Levels />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
