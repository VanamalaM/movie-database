import React, { useState } from "react";
import styled from "styled-components";
import movieDetailBG from "./../../assets/images/movieDetailBG.jpg";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import image from "./../../assets/images/endgame.jpg";
import GradeIcon from "@material-ui/icons/Grade";
import yellow from "@material-ui/core/colors/purple";
import { useSelector } from "react-redux";
import illustration from "./../../assets/images/sorry_illustration.jpg";

const star = yellow[800];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "360px",
    float: "left",
    margin: "12rem 5rem 0 10rem",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    background: "#040f1a",
    textAlign: "-webkit-center",
    padding: "2rem",
  },
  star: {
    marginLeft: "0.5rem",
    color: "yellow",
    fontSize: "2rem",
  },
  cover: {
    width: "22rem",
    height: "500px",
  },
  mediaCover: {
    width: "15rem",
    height: "15rem",
  },
}));
const MovieDetails = () => {
  const classes = useStyles();
  const [booking, setBooking] = useState(false);
  const movie = useSelector((state) => state.movieDetail);
  console.log(movie);
  const handleBookings = (value) => {
    setBooking(value);
    console.log(booking);
  };
  return (
    <ContainerDetail>
      <TitleContainer>
        <FirstTitle>Movie</FirstTitle>
        <SecondTitle>Database</SecondTitle>
      </TitleContainer>
      <Card className={classes.root}>
        <CardActionArea>
          {movie &&
            movie.image &&
            movie.image.map((image) => (
              <CardMedia
                component="img"
                className={classes.cover}
                image={image.url1}
                title="Live from space album cover"
              />
            ))}
          <div className={classes.details}>
            <BookButton
              onClick={() => {
                handleBookings(true);
              }}
            >
              Book Now
            </BookButton>
          </div>
        </CardActionArea>
      </Card>
      <MovieDetailContainer>
        <div style={{ width: "70%" }}>
          <MovieContent>{movie.name}</MovieContent>
          <AboutMovie>
            OVERVIEW
            <div>{movie.about}</div>
          </AboutMovie>
          <MovieMedia>
            MEDIA
            <hr />
            {movie &&
              movie.image &&
              movie.image.map((image) => (
                <ImageContainer>
                  <CardMedia
                    className={classes.mediaCover}
                    image={image.url3}
                  />
                  <CardMedia
                    className={classes.mediaCover}
                    image={image.url2}
                  />
                  <CardMedia
                    className={classes.mediaCover}
                    image={image.url1}
                  />
                </ImageContainer>
              ))}
          </MovieMedia>
        </div>
        <div>
          <Rating>
            {movie.rating} /
            <GradeIcon className={classes.star} color={star} />
          </Rating>
          <MovieCast>
            Director
            <div>{movie.Director}</div>
          </MovieCast>
          <MovieCast>
            Release Date:<div>{movie.Release_date}</div>
          </MovieCast>
          <MovieCast>
            Run Time:<div>{movie.Run_time}</div>
          </MovieCast>
        </div>
      </MovieDetailContainer>
      {booking && (
        <BookingPopup>
          <CardMedia
            style={{ margin: "5rem auto" }}
            className={classes.cover}
            image={illustration}
            title="Live from space album cover"
          />
          Due to Pandemic situation, bookings are currently closed.
          <BookButton
            style={{ margin: "5rem 55rem" }}
            onClick={() => handleBookings(false)}
          >
            Close
          </BookButton>
        </BookingPopup>
      )}
    </ContainerDetail>
  );
};
const ContainerDetail = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${movieDetailBG});
  /* display: flex; */
  position: relative;
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #020d18cc;
    backdrop-filter: blur(2px);
    overflow-y: auto;
  }
`;
const TitleContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;
const FirstTitle = styled.h1`
  font-style: italic;
  color: #e91e63;
  font-size: 3rem;
  margin-left: 10rem;
`;
const SecondTitle = styled.h4`
  font-style: italic;
  color: white;
  font-size: 2rem;
  margin: 2.8rem 1rem;
`;
const BookButton = styled.div`
  background: ${(props) => (props.color ? props.color : "#dd003f")};
  font-size: 1.2rem;
  padding: 1.2rem;
  color: white;
  cursor: pointer;
  border-radius: 4px;
`;
const BookingPopup = styled.div`
  position: absolute;
  background-color: #488f98;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  color: #ffffff;
  font-size: 3rem;
  font-style: italic;
  text-align: center;
  font-weight: 400;
`;
const MovieDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  position: relative;
  z-index: 1;
  padding-top: 10rem;
  &:first-child {
    width: 90%;
  }
`;
const MovieContent = styled.div`
  margin: 2.5rem;
  color: #ffffff;
  font-size: 4rem;
`;
const AboutMovie = styled(MovieContent)`
  font-size: 2rem;
  color: #dcf836;
  & > div {
    margin-top: 3rem;
    font-size: 1.2rem;
    color: #abb7c4;
  }
`;
const MovieMedia = styled(MovieContent)`
  font-size: 1.5rem;
  & > hr {
    margin: 1rem 0;
    border: 1px solid grey;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
`;
const Rating = styled(MovieContent)`
  font-size: 2rem;
  margin-top: 4rem;
`;
const MovieCast = styled(MovieContent)`
  font-size: 1rem;
  & > div {
    font-size: 1.2rem;
    margin-top: 2rem;
  }
`;

export default MovieDetails;
