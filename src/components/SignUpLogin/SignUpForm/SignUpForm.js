import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import loginLogo from "../../../Img/loginLogo/loginLogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { signUp } from "../../../redux/AuthSlice";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../firebase/firebase";

const SignUpForm = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log("user created: ", cred.user);

        setUserName("");
        setEmail("");
        setPassword("");
        navigate("/");
      })
      .catch((e) => {
        console.log(e.message);
      });

    updateProfile(auth.currentUser, { displayname: userName })
      .then(() => {
        console.log("Current user: ", auth.currentUser);

        // console.log("Profile updated, username: ", userName);
      })
      .catch((e) => {
        console.log(e.message);
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
          minHeight: "512px",
          boxShadow: "0 3px 10px 0 rgba(0, 0, 0, .14)",
          borderRadius: "4px",
        }}
      >
        {/* 註冊 */}
        <Box display={"flex"} alignItems={"center"} sx={{ minHeight: "80px" }}>
          <Box sx={{ width: "100%", padding: "1.375rem 30px" }}>
            <Typography fontSize={"1.25rem"}>註冊</Typography>
          </Box>
        </Box>

        <Box>
          <Box sx={{ padding: "0 30px 30px" }}>
            {/* form 本體 */}
            <form>
              <TextField
                variant="outlined"
                label="註冊使用者名稱"
                sx={{ mb: "30px" }}
                fullWidth
                size="small"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <TextField
                variant="outlined"
                label="註冊信箱"
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
                type="password"
                label="註冊密碼"
                sx={{ mb: "30px" }}
                size="small"
                fullWidth
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Button
                fullWidth
                onClick={onSubmit}
                sx={{
                  bgcolor: "#ee4d2d",
                  color: "white",
                  boxShadow: "0 1px 1px rgba(0,0,0,.09)",
                  mb: "30px",
                  ":hover": { opacity: "0.9", bgcolor: "#ee4d2d" },
                }}
              >
                註冊
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
            {/* 同意服務條款與隱私政策 */}
            <Box mt={"1.5625rem"}>
              <Typography fontSize={"12px"} textAlign={"center"}>
                點擊「下一步」或繼續註冊，即表示您已閱讀並同意蝦皮購物的
                <span style={{ color: "#ee4d2d" }}>服務條款</span>與
                <span style={{ color: "#ee4d2d" }}>隱私政策</span>
              </Typography>
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
            已經有帳號了嗎？
            <Link
              to="/login"
              style={{ color: "#ee4d2d", textDecoration: "none" }}
            >
              登入
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpForm;
