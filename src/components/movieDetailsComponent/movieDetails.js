import React, { useState } from "react";
import styled from "styled-components";
import movieDetailBG from "./../../assets/images/movieDetailBG.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import GradeIcon from "@material-ui/icons/Grade";
import yellow from "@material-ui/core/colors/purple";
import { useSelector } from "react-redux";
import illustration from "./../../assets/images/sorry_illustration.jpg";

const star = yellow[800];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "250px",
    float: "left",
    margin: "0 5rem 0 10rem",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    background: "#040f1a",
    textAlign: "-webkit-center",
    padding: "1rem",
  },
  cover:{
    height:"290px", 
      width:"250px"
  },
  star: {
    marginLeft: "0.5rem",
    color: "yellow",
    fontSize: "2rem",
  },
  mediaCover: {
    width: "10rem",
    height: "10rem",
  },
}));
const MovieDetails = () => {
  const classes = useStyles();
  const [booking, setBooking] = useState(false);
  const movie = useSelector((state) => state.movieDetail);
  const handleBookings = (value) => {
    setBooking(value);
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
            Director:
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
            style={{ margin: "2rem auto" }}
            className={classes.cover}
            image={illustration}
            title="Live from space album cover"
          />
          Due to Pandemic situation, bookings are currently closed.
          <BookButton
            margin= "5rem 40rem"
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
  position: relative;
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #020d18cc;
    backdrop-filter: blur(1px);
    overflow-y: auto;
  }
`;
const TitleContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  font-style: italic;
`;
const FirstTitle = styled.h1`
  color: #e91e63;
  font-size: 3rem;
  margin-left: 10rem;
`;
const SecondTitle = styled.h4`
  color: white;
  font-size: 2rem;
  margin: 2.8rem 1rem;
`;
const BookButton = styled.div`
  background: ${(props) => (props.color ? props.color : "#dd003f")};
  font-size: 0.8rem;
  padding: 1rem;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  margin: ${(props) => (props.margin ? props.margin : 0)};
`;
const MovieDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  position: relative;
  z-index: 1;
  &:first-child {
    width: 90%;
  }
`;
const MovieContent = styled.div`
  margin: 1rem;
  color: #ffffff;
  font-size: 2.5rem;
`;
const AboutMovie = styled(MovieContent)`
  font-size: 1rem;
  color: #dcf836;
  & > div {
    margin-top: 2rem;
    font-size: 1rem;
    color: #abb7c4;
  }
`;
const MovieMedia = styled(MovieContent)`
  font-size: 1.2rem;
  & > hr {
    margin: 1rem 0;
    border: 1px solid grey;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
`;
const Rating = styled(MovieContent)`
  font-size: 2rem;
  margin-top: 4rem;
`;
const MovieCast = styled(MovieContent)`
  font-size: 0.8rem;
  & > div {
    font-size: 1rem;
    margin-top: 1rem;
  }
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
  font-size: 2rem;
  font-style: italic;
  text-align: center;
  font-weight: 400;
`;

export default MovieDetails;
