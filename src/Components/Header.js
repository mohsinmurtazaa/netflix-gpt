import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../slices/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { showGptPage } from "../slices/gptSlice";
import { addLang } from "../slices/configSlice";
import { SUPPORTED_LANGUAGE } from "../utils/Constants";
const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGpt = useSelector((store) => store.gpt.show);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGptToggle = () => {
    dispatch(showGptPage(!showGpt));
  };
  const setLanguage = (e) => {
    console.log(e.target.value);
    dispatch(addLang(e.target.value));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="absolute z-10 bg-gradient-to-b from-black w-screen flex justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
        className="w-44"
      ></img>
      {Object.keys(user).length !== 0 && (
        <div className="flex p-2 m-2">
          {showGpt && (
            <select
              className="bg-gray-900 text-white rounded-lg  px-2"
              onChange={setLanguage}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}{" "}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptToggle}
            className="bg-blue-700 text-white rounded-md p-2 m-2"
          >
            {showGpt ? "Home Page" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12"
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          ></img>
          <button className="text-white font-bold mx-1" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
