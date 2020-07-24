import React, { useState, useEffect } from "react";
import MovieList from "./../movieListComponent/movieList";
import styled from "styled-components";
import { getMovieList } from "./../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import backgroundCover from "./../../assets/images/backgroundCover.jpg";
import searchIcon from "./../../assets/images/searchicon.png";

const LandingPage = () => {
  const dispatch = useDispatch();
  let maxPage = 99999;
  useEffect(() => {
    dispatch(getMovieList());
  }, []);
  const movies = useSelector((state) => state.movieList.data) || [];

  // const [count, setCount] = useState(null);
  const checkCount = (value) => {
    let count = 0;
    if (value === "increment") count = count + 1;
    if (value === "decrement") count = count - 1;
    console.log(value, count);
  };
  return (
    <Container>
      <TitleContainer>
        <FirstTitle>Movie</FirstTitle>
        <SecondTitle>Database</SecondTitle>
      </TitleContainer>
      <FeatureContainer>
        <FilterButton>Filter By Rating</FilterButton>
        <Input />
      </FeatureContainer>
      <Body>
        <MovieList moviesData={movies} />
      </Body>
      <PaginationContainer>
        <PageButton hover onClick={() => checkCount("decrement")}>
          {"<"}
        </PageButton>
        <PageButton>1</PageButton>
        <PageButton hover onClick={() => checkCount("increment")}>
          {">"}
        </PageButton>
      </PaginationContainer>
    </Container>
  );
};

// styles
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  /* background: #010d18; */
`;
const FeatureContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem;
  overflow-y: auto;
`;
const FilterButton = styled.div`
  background: #233a50;
  font-size: 1.2rem;
  padding: 1.2rem;
  color: white;
  cursor: pointer;
  margin-right: 0.3rem;
`;
const Input = styled.input`
  background: #233a50;
  border: 1px solid #122832;
  padding: 1.3rem;
  font-size: 1.3rem;
  width: 40rem;
  border-radius: 4px;
  color: #ffffff;
  outline: none;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: 2rem 2rem;
  background-position: 40rem 1rem;
`;
const PageButton = styled.div`
  padding: 1.1rem;
  font-size: 1.4rem;
  margin: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: white;
  background-color: ${(props) => (props.color ? props.color : "#233a50")};
  &:hover {
    ${(props) =>
      props.hover && " background-color: #010d18;transform: scale(1.2);"}
  }
  transition: all 0.2s ease;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  background-image: url(${backgroundCover});
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
const TitleContainer = styled.div`
  height: 8rem;
  background-color: #010d18;
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

const Body = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: auto;
  & > div {
    width: 20rem;
    align-self: baseline;
    margin: 3rem;
  }
`;
export default LandingPage;
