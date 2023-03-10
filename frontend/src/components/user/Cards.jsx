import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Grid } from "@mui/material";
// import { styled } from "@mui/material/styles";

export default function Cards() {

//  const custCard = styled(Card)({
//     height: "250px",
//     width: "250px",
//     backgroundColor:"whitesmoke"
//  })

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
            <Box
        component="div"
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Box
          component={"div"}
          sx={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "30px",
            borderRadius: "10px",
            backgroundColor: "#EEEE",
            width: "200px",
          }}
        >
          12-FEB-2023
        </Box>
      </Box>
      <Card sx={{ maxWidth: 250, maxHeight: 250, minWidth: "310px", marginTop:"20px", marginLeft:"30px" }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140px"
            image="../assets/docicon.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="overline" component="div">
              Report 1
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card  sx={{ maxWidth: 250, maxHeight: 250, minWidth: "310px", marginTop:"20px",marginLeft:"30px" }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="../assets/docicon.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="overline" component="div">
            Report 2
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card  sx={{ maxWidth: 250, maxHeight: 250, minWidth: "310px", marginTop:"20px",marginLeft:"30px" }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="../assets/docicon.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="overline" component="div">
            Report 3
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 250, maxHeight: 250, minWidth: "310px", marginTop:"20px", marginLeft:"30px" }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="../assets/docicon.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="overline" component="div">
            Report 4
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
