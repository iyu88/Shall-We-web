import Home from "./pages/home/Home";
import Teammates from "./pages/teammates/Teammates";
import Contests from "./pages/contests/Contests";
import Reviews from "./pages/reviews/Reviews";
import Personals from "./pages/personals/Personals";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import ContestRegister from "./pages/contest_register/ContestRegister";
import Contest from "./pages/contest/Contest";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import TeammateRegister from "./pages/teammate_register/TeammateRegister";
import Teammate from "./pages/teammate/Teammate";
import ReviewRegister from "./pages/review_register/ReviewRegister";
import Review from "./pages/review/Review";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/contests" element={<Contests />}></Route>
        <Route path="/contests/:id" element={<Contest />}></Route>
        <Route path="/contests/register" element={<ContestRegister />}></Route>
        <Route path="/teammates" element={<Teammates />}></Route>
        <Route path="/teammates/:id" element={<Teammate />}></Route>
        <Route
          path="/teammates/register"
          element={<TeammateRegister />}
        ></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/reviews/:id" element={<Review />}></Route>
        <Route path="/reviews/register" element={<ReviewRegister />}></Route>
        <Route path="/personals" element={<Personals />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
