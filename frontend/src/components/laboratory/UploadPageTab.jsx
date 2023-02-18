import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid, Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import UploadFileSharpIcon from "@mui/icons-material/UploadFileSharp";
import { styled } from "@mui/material/styles";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Button from "@mui/material/Button";

const Search = styled("div")({
  display: "flex",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: "10px",
  marginLeft: "10px",
  width: "65vw",
});

const SearchIconWrapper = styled(Button)({
  color: "black",
  padding: " 0px 10px",
});

const StyledInputBase = styled("input")({
  border: "none",
  borderRadius: "10px",
  height: "40px",
  outline: "none",
  width: "60vw",
});

const searchBar = (
  <Search
    component="input"
    sx={{
      //  justifyContent:"center",
      width: "80%",
      //  background:"blue",
      border: "1px solid black",
      marginTop: "20px",
    }}
  >
    <SearchIconWrapper>
      <SearchRoundedIcon sx={{ fontSize: "30px" }} />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Enter Patient ID"
      inputProps={{ "aria-label": "search" }}
    />
  </Search>
);

const UploadPage = () => {
  const [upload, setUpload] = React.useState("");

  const handleChange = (event) => {
    setUpload(event.target.value);
  };

  return (
    <Box
      component={"div"}
      sx={{
        display: { xs: "none", md: "flex" },
        // backgroundColor: "blue",
        direction: "column",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {searchBar}
        <Box
          component={"div"}
          sx={{
            paddingLeft: "10px",
            marginTop: "20px",
            marginLeft: "10px",
            width: "80%",
            backgroundColor: "bisque",
            border: "1px solid grey",
            borderRadius: "5px",
          }}
        >
          <Typography variant="h2" align="left" component={"h1"}>
            Upload Laboratory Reports
          </Typography>
          <Typography variant="subtitle1" align="left" component={"h6"}>
            Documents and Attachement that have to be Uploaded as part of this
            Profile.
          </Typography>
        </Box>
        <Box component="div" sx={{ width: "100%", marginTop: "10px" }}>
          <FormControl fullWidth sx={{marginLeft:"150px"}}>
            <InputLabel id="demo-simple-select-label">Upload</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={upload}
              label="Upload"
              onChange={handleChange}
              sx={{
                width: "300px",
                marginLeft: "10px",
                marginTop: "10px",
                color: "black",
              }}
            >
              <MenuItem value={10}>Medical History</MenuItem>
              <MenuItem value={20}>Medical Reciept</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          component={"div"}
          sx={{
            width: "80%",
            marginTop: "10px",
            textAlign: "center",
            justifyContent: "center",
            borderRadius: "10px",
            marginLeft: "15px",
            border: "1px solid #c4cae4",
            cursor: "pointer",
            backgroundColor: "#f5f8ff",
          }}
        >
          <Box component={"div"} sx={{ marginTop: "30px" }}>
            <UploadFileSharpIcon sx={{ fontSize: "50px", color: "#5e61b3" }} />
          </Box>
          <Typography
            variant="subtitle1"
            component="p"
            sx={{ color: "#7980cb", padding: "10px" }}
          >
            Click To Upload or Drag and Drop PDF Files.
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default UploadPage;
