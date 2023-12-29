import React from "react";
import logoutStyle from "./Logout.module.css"

const Logout = () => {
  return (
    <div className={logoutStyle.banner}>
        <div className={logoutStyle.heading}>
          <b>You have LOGGED OUT succesfully!!</b>
          <br />
          <small className={logoutStyle.small}>Thank you for visiting...🙏</small>
        </div>
      </div>
    
    
  );
};

export default Logout;
