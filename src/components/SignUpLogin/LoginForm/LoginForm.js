import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import loginLogo from "../../../Img/loginLogo/loginLogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../../firebase/firebase";

const LoginForm = () => {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("testtest");
  const navigate = useNavigate();

  const onSubmitEmail = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((cred) => {
      console.log("user logged in: ", cred.user);
    });
    navigate("/");
    setEmail("");
    setPassword("");
  };

  const onSubmitGoogle = (e) => {
    e.preventDefault();
    const providerGoogle = new GoogleAuthProvider();
    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log("result: ", result);
        console.log("credential: ", credential);
        console.log("token: ", token);
        console.log("user: ", user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      sx={{ width: "100%" }}
    >
      <Box mr="40px"></Box>
      <Box
        sx={{
          bgcolor: "white",
          width: "400px",
          minHeight: "482px",
          boxShadow: "0 3px 10px 0 rgba(0, 0, 0, .14)",
          borderRadius: "4px",
        }}
      >
        {/* 登入 */}
        <Box display={"flex"} alignItems={"center"} sx={{ minHeight: "80px" }}>
          <Box sx={{ width: "100%", padding: "1.375rem 30px" }}>
            <Typography fontSize={"1.25rem"}>登入</Typography>
          </Box>
        </Box>

        <Box>
          <Box sx={{ padding: "0 30px 30px" }}>
            {/* form 本體 */}
            <form>
              <TextField
                variant="outlined"
                label="帳號"
                sx={{ mb: "30px" }}
                fullWidth
                size="small"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TextField
                variant="outlined"
                label="密碼"
                sx={{ mb: "30px" }}
                size="small"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Button
                fullWidth
                onClick={onSubmitEmail}
                sx={{
                  bgcolor: "#ee4d2d",
                  color: "white",
                  boxShadow: "0 1px 1px rgba(0,0,0,.09)",
                  mb: "30px",
                  ":hover": { opacity: "0.9", bgcolor: "#ee4d2d" },
                }}
              >
                登入
              </Button>
            </form>
            {/* "或" google登入 */}
            <Box>
              <Box pb="14px" display={"flex"} alignItems={"center"}>
                <Box
                  sx={{ height: "1px", width: "100%", bgcolor: "#dbdbdb" }}
                />
                <span
                  style={{
                    padding: "0 16px",
                    color: "#ccc",
                    fontSize: ".75rem",
                  }}
                >
                  或
                </span>
                <Box
                  sx={{ height: "1px", width: "100%", bgcolor: "#dbdbdb" }}
                />
              </Box>
              <Box display={"flex"}>
                <Button
                  display="flex"
                  alignItems="center"
                  variant="outlined"
                  sx={{
                    borderColor: "#ccc",
                    width: "100%",
                    height: "40px",
                    margin: "5px",
                    padding: "0 2px",
                  }}
                >
                  <Box
                    sx={{
                      width: "36px",
                      height: "36px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundImage: `url(${loginLogo})`,
                        backgroundPosition: "5.55556% 62.6667%",
                        backgroundSize: "325% 287.5%",
                        width: "22px",
                        height: "22px",
                      }}
                    />
                  </Box>
                  <Typography variant="h6" fontSize={"0.875rem"}>
                    Facebook
                  </Typography>
                </Button>
                <Button
                  display="flex"
                  alignItems="center"
                  variant="outlined"
                  onClick={onSubmitGoogle}
                  sx={{
                    borderColor: "#ccc",
                    width: "100%",
                    height: "40px",
                    margin: "5px",
                    padding: "0 2px",
                  }}
                >
                  <Box
                    sx={{
                      width: "36px",
                      height: "36px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundImage: `url(${loginLogo})`,
                        backgroundPosition:
                          "83.92857142857143% 5.154639175257732%",
                        backgroundSize: "722.2222222222222% 638.8888888888889%",
                        width: "22px",
                        height: "22px",
                      }}
                    />
                  </Box>
                  <Typography variant="h6" fontSize={"0.875rem"}>
                    Google
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box>
          <Typography
            variant="h6"
            color="#ccc"
            fontSize={".875rem"}
            textAlign={"center"}
          >
            蝦皮新朋友？
            <Link
              to="/signUp"
              style={{ color: "#ee4d2d", textDecoration: "none" }}
            >
              註冊
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
