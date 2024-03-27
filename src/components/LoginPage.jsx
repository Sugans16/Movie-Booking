import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Input, Button } from "antd";

const LoginPage = () => { 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = existingUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (matchedUser) {
      setLoginSuccess(true);
    } else {
      alert("Invalid Username or Password");
    }
  };

  if (loginSuccess) {
    return <Navigate to="/Movies" />;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
         backgroundColor:"#4096FF",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "98vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage:
              "url(https://img.freepik.com/free-psd/3d-cinema-blank-banner-background_23-2150822402.jpg)",
            backgroundSize: "auto 450px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            marginTop: "18px",
            width: "75%",
            height: "65%",
          }}
        >
          <h2>Welcome!</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                marginBottom: "10px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <label style={{ marginRight: "10px" }}>Username</label>
              <Input
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  borderBottom: "1px solid #333",
                  paddingRight: "27px",
                  border: "none",
                  backgroundColor: "#ffe",
                  marginTop: "10px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <label style={{ marginRight: "10px" }}>Password</label>
              <Input.Password
                placeholder="Enter Password"
                visibilityToggle={{
                  visible: passwordVisible,
                  onVisibleChange: setPasswordVisible,
                }}
                value={password}
                style={{
                  borderBottom: "1px solid #333",
                  border: "none",
                  backgroundColor: "#ffe",
                  marginTop: "10px",
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <Button
            type="primary"
            block
            onClick={handleLogin}
            style={{ width: "25%", margin: "15px 0px 20px 0px" }}
          >
            Login
          </Button>
          <div>
            <label>Don't have an account?</label>
            <Link
              to="/signup"
              style={{
                textDecorationLine: "none",
                color: "black",
                marginLeft: "10px",
              }}
            >
              Signup here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
