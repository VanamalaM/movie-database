import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import GradeIcon from "@material-ui/icons/Grade";
import yellow from "@material-ui/core/colors/purple";
import CardActionArea from "@material-ui/core/CardActionArea";
const star = yellow[500];

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      transform: "scale(1.1)",
      transition: "all 0.2s ease",
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    color: "#ffffff",
  },
  text:{
    // fontFamily:"DosisBold",
    fontSize:"0.8rem",
  },
  star: {
    color: "#FFC107",
    marginTop:"0.3rem"
  },
}));

const MovieList = ({ moviesData = [], handleMovieSelection }) => {
  const classes = useStyles();
  return (
    <>
      {moviesData.map((value) => {
        let elements = [];
        for (let i = 0; i < value.rating; i++) {
          elements.push(<GradeIcon color={star} />);
        }
        return (
          // <CardContainer onClick={routeToDetail}></CardContainer>
          <Card
            className={classes.root}
            onClick={() => handleMovieSelection(value)}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="250px"
                image={value.image[0].url1}
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography className={classes.text}>
                    {value.name}
                  </Typography>
                  <Typography className={classes.text}>
                    {value.cast[0].name1}, {value.cast[0].name2}
                  </Typography>
                  <Typography className={classes.text}>
                    Released On: {value.Release_date}
                  </Typography>
                  <Typography className={classes.star}>
                    {elements}
                  </Typography>
                </CardContent>
              </div>
            </CardActionArea>
          </Card>
        );
      })}
    </>
  );
};

export default MovieList;
