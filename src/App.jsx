import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/Store/Slices/userInfo";
import MovieGPT from "./components/MovieGPT/MovieGPT";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchGPT = useSelector((store) => store?.searchGPTToggle?.toggle);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(addUser({ uid: uid, email: email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return <main>{searchGPT ? <MovieGPT /> : <Outlet />}</main>;
}

export default App;
