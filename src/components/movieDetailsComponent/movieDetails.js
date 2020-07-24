import React, { useState } from "react";
import { Container } from "@material-ui/core";
import styled from "styled-components";
import backgroundCover from "./../../assets/images/movieDetailBG.jpg";

const MovieDetails = () => {
  return (
    <React.Fragment>
      <ContainerDetail>
        <MovieDetails>
          <MovieContent>Mission: Impossible – Fallout</MovieContent>
          <AboutMovie>OverView</AboutMovie>
          <MovieMedia>Media</MovieMedia>
        </MovieDetails>
      </ContainerDetail>
    </React.Fragment>
  );
};

const ContainerDetail = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  background-image: url(${backgroundCover});
  display: flex;
  flex-direction: column;
  align-items: stretch;
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #020d18cc;
  }
`;
const MovieContent = styled.div`
  margin: 3rem;
  color: #ffffff;
`;
const AboutMovie = styled(MovieContent)`
  font-size: 2rem;
  & > div {
    font-size: 1rem;
  }
`;
const MovieMedia = styled(MovieContent)`
  font-size: 1rem;
  & > hr {
    color: grey;
  }
`;

export default MovieDetails;
