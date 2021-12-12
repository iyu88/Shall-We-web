import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  const SHALLWE_URL = "https://shall-we-web.herokuapp.com";
  // const SHALLWE_URL = "http://localhost:5055";
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(
      `${SHALLWE_URL}/api/auth/signIn`,
      userCredential
    );
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
  }
};
