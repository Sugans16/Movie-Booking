import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "antd";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    capital: false,
    small: false,
    numeric: false,
    specialChar: false,
  });

  useEffect(() => {
    setPasswordValidation((prev) => ({
      ...prev,
      length: password.length >= 8,
    }));

    setPasswordValidation((prev) => ({
      ...prev,
      capital: /[A-Z]/.test(password),
    }));

    setPasswordValidation((prev) => ({
      ...prev,
      small: /[a-z]/.test(password),
    }));

    setPasswordValidation((prev) => ({
      ...prev,
      numeric: /\d/.test(password),
    }));

    setPasswordValidation((prev) => ({
      ...prev,
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    }));
  }, [password]);

  const handlePasswordChange = () => {
    if (
      passwordValidation.length &&
      passwordValidation.capital &&
      passwordValidation.small &&
      passwordValidation.numeric &&
      passwordValidation.specialChar
    ) {
      setPasswordValidation({
        length: false,
        capital: false,
        small: false,
        numeric: false,
        specialChar: false,
      });
    }
  };

  const handleSignup = () => {
    try {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      console.log("Before storing in local storage:", existingUsers);

      const userExists = existingUsers.some(
        (user) => user.username === username
      );

      if (userExists) {
        alert("Username already exists. Please choose a different username.");
        return;
      }
      // else if (
      //   !passwordValidation.length ||
      //   !passwordValidation.capital ||
      //   !passwordValidation.small ||
      //   !passwordValidation.numeric ||
      //   !passwordValidation.specialChar
      // ) {
      //   alert('Password does not meet the requirements.');
      //   return;
      // }

      const newUser = { username, password };
      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      console.log("After storing in local storage:", existingUsers);

      alert("Account created successfully!!!");
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "url(https://png.pngtree.com/background/20210711/original/pngtree-coming-soon-movie-in-cinema-theater-billboard-sign-on-red-theater-picture-image_1157635.jpg)",
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
          <h2>Signup Page</h2>
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
              <form>
                <Input.Password
                  placeholder="Enter Password"
                  visibilityToggle={{
                    visible: passwordVisible,
                    onVisibleChange: setPasswordVisible,
                  }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={handlePasswordChange}
                  style={{
                    borderBottom: "1px solid #333",
                    border: "none",
                    backgroundColor: "#ffe",
                    marginTop: "10px",
                  }}
                />
              </form>
            </div>
            {Object.values(passwordValidation).some((value) => value) && (
              <div
                id="passwordvalidation"
                style={{
                  padding: "20px",
                  flexDirection: "column",
                  display: "flex",
                  fontSize: "15px",
                  position: "Absolute",
                  backgroundColor: Object.values(passwordValidation).every(
                    (value) => value
                  )
                    ? "transparent"
                    : "white",
                  right: "80px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {!passwordValidation.length && (
                    <p style={{ color: "red" }}>⨂ Minimum 8 characters</p>
                  )}
                  {!passwordValidation.capital && (
                    <p style={{ color: "red" }}>
                      ⨂ At least one capital letter
                    </p>
                  )}
                  {!passwordValidation.small && (
                    <p style={{ color: "red" }}>⨂ At least one small letter</p>
                  )}
                  {!passwordValidation.numeric && (
                    <p style={{ color: "red" }}>
                      ⨂ At least one numeric character
                    </p>
                  )}
                  {!passwordValidation.specialChar && (
                    <p style={{ color: "red" }}>
                      ⨂ At least one special character
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
          <Button
            type="primary"
            onClick={handleSignup}
            style={{ width: "25%", margin: "15px 0px 20px 0px" }}
          >
            Signup
          </Button>
          <div>
            <label>Already have an account? </label>
            <Link
              to="/"
              style={{
                textDecorationLine: "none",
                color: "black",
                marginLeft: "10px",
              }}
            >
              Login here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
