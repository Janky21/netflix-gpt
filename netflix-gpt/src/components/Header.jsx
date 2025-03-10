import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubcribe when components unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-40 py-2 bg-gradient-to-b from-black z-30 flex justify-between">
      <img
        className="w-50"
        src={LOGO_URL}
        alt="logo"
      />
      {user && (
        <div className="flex font-bold text-2xl text-white">
          <img className="w-12 h-12 " alt="user icon" src={user.photoURL} />
          <button className="rounded-lg cursor-pointer" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
