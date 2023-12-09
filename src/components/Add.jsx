import React from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

const Add = () => {
  const handleIconClick = () => {
    alert("Cannot Add More!!");
  };
  return (
    <>
      <IconButton onClick={handleIconClick}>
        <AddIcon style={{ fontSize: 18 }} />
      </IconButton>
    </>
  );
};

export default Add;
