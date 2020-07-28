import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import GradeIcon from "@material-ui/icons/Grade";
import yellow from "@material-ui/core/colors/purple";
import CardActionArea from "@material-ui/core/CardActionArea";
import styled from "styled-components";
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
    background: "#233a50",
  },
  content: {
    fontSize:"1rem",
    flex: "1 0 auto",
    color: "#ffffff",
  },
  text:{
    fontSize:"0.8rem",
  },
  star: {
    color: "#FFC107",
  },
}));

const MovieList = ({ moviesData = [], handleMovieSelection }) => {
  const classes = useStyles();
  console.log(moviesData);
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
                title="Live from space album cover"
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography className={classes.text} variant="h5">
                    {value.name}
                  </Typography>
                  <Typography className={classes.text} color="white">
                    {value.cast[0].name1}, {value.cast[0].name2}
                  </Typography>
                  <Typography className={classes.star} variant="subtitle1">
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

// styles

const CardContainer = styled.div`
  height: 18rem;
  width: 10rem;
  background-color: blue;
  flex: none;
  margin: 2rem;
`;

// const CardImage=
export default MovieList;
