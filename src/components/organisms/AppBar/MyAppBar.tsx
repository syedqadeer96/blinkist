import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";



import { Stack } from "@mui/material";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import MyExplore from "../../molecules/Explore/Explore";
import MyAvatar from "../../atoms/Avatar/MyAvatar";


const MyAppBar = () => {
  return (
    <AppBar
      elevation={0}
      position="sticky"
      sx={{ backgroundColor: "#FFFFFF", color: "black" }}
      enableColorOnDark={true}
    >
      <Toolbar>
        <Stack direction="row" spacing={50}>
          <Stack direction="row" spacing={10}>
            <img
              src="http://127.0.0.1:8887/Blinklist.png"
              alt="bl-img"
              width={125}
              height={26}
              style={{ paddingTop: 8 }}
            />
            <SearchOutlinedIcon sx={{ paddingTop: 1 }} />

            <MyExplore></MyExplore>
            <Typography variant="body1" pt={1}>
              My Library
            </Typography>
          </Stack>
          <MyAvatar></MyAvatar>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default MyAppBar;
