import React from "react";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Menu = () => {
  const handleIconClick = () => {
    alert("Not implemented as of now!!");
  };

  return (
    <IconButton onClick={handleIconClick}>
      <MoreHorizIcon style={{ fontSize: 18 }} />
    </IconButton>
  );
};

export default Menu;
