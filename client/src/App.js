import Home from "./pages/home/Home";
import Teammates from "./pages/teammates/Teammates";
import Contests from "./pages/contests/Contests";
import Reviews from "./pages/reviews/Reviews";
import Personals from "./pages/personals/Personals";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import ContestRegister from "./pages/contest_register/ContestRegister";
import Contest from "./pages/contest/Contest";
import NotFound from "./pages/notFound/NotFound";
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
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import PersonalsFav from "./pages/personalsFav/PersonalsFav";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/contests" element={<Contests />} exact></Route>
        <Route
          path="/contests/register"
          element={<ContestRegister />}
          exact
        ></Route>
        <Route path="/contests/:id" element={<Contest />}></Route>
        <Route path="/teammates" element={<Teammates />} exact></Route>
        <Route
          path="/teammates/register"
          element={<TeammateRegister />}
          exact
        ></Route>
        <Route path="/teammates/:id" element={<Teammate />}></Route>
        <Route path="/reviews" element={<Reviews />} exact></Route>
        <Route
          path="/reviews/register"
          element={<ReviewRegister />}
          exact
        ></Route>
        <Route path="/reviews/:id" element={<Review />}></Route>
        <Route path="/personals/:id" element={<Personals />} exact></Route>
        <Route path="/personals/fav/:id" element={<PersonalsFav />}></Route>
        <Route path="/signIn" element={<SignIn />} exact></Route>
        <Route path="/signUp" element={<SignUp />} exact></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
