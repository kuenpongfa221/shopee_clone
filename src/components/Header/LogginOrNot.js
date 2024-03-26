import {
  Box,
  Typography,
  Divider,
  Paper,
  Button,
  Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";
import userImg from "../../Img/user/user.jpg";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

const LogginOrNot = () => {
  const [user, setUser] = useState();
  const [isHovered, setIsHovered] = useState(false);

  const userName = useSelector((state) => state.auths);
  // console.log(userName);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log("user status is: ", user);
    });
  });
  return (
    <Box sx={{ margin: "0", padding: "0", display: "flex" }}>
      {user ? (
        <>
          <Button
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="noUserImage"
                style={{ borderRadius: "100%", width: "20.66667px" }}
              />
            )}
            {!user.photoURL && (
              <img
                src={userImg}
                alt="WrongFile"
                style={{
                  borderRadius: "100%",
                  width: "20.66667px",
                  marginRight: "2px",
                }}
              />
            )}

            <Typography color="white" fontSize=".875rem">
              {user.displayName}
              {!user.displayName && "Test"}
            </Typography>
            {isHovered && (
              <button
                style={{ position: "absolute", top: "30px" }}
                onClick={() => signOut(auth)}
              >
                登出
              </button>
            )}
          </Button>
        </>
      ) : (
        <Box sx={{ margin: "0", padding: "0", display: "flex" }}>
          <Link
            to="/signup"
            style={{
              textDecoration: "none",
              padding: "0",
              height: "28.8px",
              color: "white",
            }}
          >
            <Typography variant="h6" fontSize="0.8125rem" padding="4px">
              註冊
            </Typography>
          </Link>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              padding: "0",
              height: "28.8px",
              color: "white",
            }}
          >
            <Typography variant="h6" fontSize="0.8125rem" padding="4px">
              登入
            </Typography>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default LogginOrNot;
