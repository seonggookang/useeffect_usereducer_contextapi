import React from "react";

const AuthContext = React.createContext({
  //앱이나 빈 state의 컴포넌트
  isLoggedIn: false,
});

export default AuthContext;
