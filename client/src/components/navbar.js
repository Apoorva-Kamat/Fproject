import React from "react";
import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };
  
  return (
    <div className="navbar">
<Link className="navbar-brand" to="/">
  <img
    src="https://tse4.mm.bing.net/th?id=OIP.WbsdKUjQh4d-jJPwYUSXzAHaHa&pid=Api&P=0&h=180"
    alt="Loading"
    style={{ width: '100px', height: '100px' }} // Set the width and height as per your preference
  />
</Link>

                    
      <Link to="/">Home</Link>
      <Link to="/create-recipe">Create Recipe</Link>
      <Link to="/saved-recipes">Saved Recipes</Link>

        <Link to="/auth">Register</Link>
        
      {!cookies.access_token ? (
        <Link to="/auth1">Login</Link>
        
      ) : (
        <button
  onClick={logout}
  style={{ width: "120px", height: "40px" }} // Adjust width and height as needed
>
  Logout
</button>

      )}

    </div>
  );
};