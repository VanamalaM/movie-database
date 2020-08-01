import React, { useState, useEffect } from "react";
import MovieList from "./../movieListComponent/movieList";
import styled from "styled-components";
import { getMovieList, setMovie } from "./../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import backgroundCover from "./../../assets/images/backgroundCover.jpg";
import searchIcon from "./../../assets/images/searchicon.png";
import { useHistory } from "react-router-dom";
import Checkbox from "@material-ui/icons/CheckBox";

const LandingPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const [ratingFilter, setFilterQuery] = useState(0);
  const [releaseDateQuery, setReleaseDateQuery] = useState(false);

  useEffect(() => {
    dispatch(
      getMovieList({
        searchTerm,
        ratingFilter,
        pageNo,
        latestMovies: releaseDateQuery,
      })
    );
  }, [searchTerm, ratingFilter, pageNo, releaseDateQuery]);
  const movieList = useSelector((state) => state.movieList.data) || [];

  // trigger input values
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // sort by latest
  const latestMovieToggle = () => {
    setReleaseDateQuery(!releaseDateQuery);
  };

  // pagination
  const stepPage = (direction) => {
    let newPage = pageNo;
    if (direction === "FORWARD") {
      newPage += 1;
      if (newPage <= 3) {
        setPageNo(newPage);
      }
    } else if (direction === "BACKWARD") {
      newPage -= 1;
      if (newPage >= 1) {
        setPageNo(newPage);
      }
    }
  };

  // rating filter
  const stars = [1, 2, 3, 4, 5];
  const handleSelectStarRating = (val) => {
    setFilterQuery(val);
  };

  // selected movie dispatch
  const handleMovieSelection = (movie) => {
    history.push("/details");
    dispatch(setMovie(movie));
  };
  return (
    <Container>
      <TitleContainer>
        <FirstTitle>Movie</FirstTitle>
        <SecondTitle>Database</SecondTitle>
      </TitleContainer>
      <FeatureContainer>
        <FilterButton>
          Filter By Rating
          <StarContainer>
            {" "}
            {stars.map((val) => (
              <Star
                active={val <= ratingFilter}
                onClick={() => handleSelectStarRating(val)}
              />
            ))}{" "}
          </StarContainer>
        </FilterButton>
        <Input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />{" "}
        <ToggleButton onClick={latestMovieToggle} active={releaseDateQuery}>
          Sort By: Latest Movies
        </ToggleButton>
        {/* <Checkbox checked={checked} onChange={latestMovieToggle} inputProps={{ 'aria-label': 'primary checkbox' }} /> */}
      </FeatureContainer>
      <Body>
        <MovieList
          moviesData={movieList}
          handleMovieSelection={handleMovieSelection}
        />
      </Body>
      <PaginationContainer>
        <PageButton hover onClick={() => stepPage("BACKWARD")}>
          {"<"}{" "}
        </PageButton>
        <PageButton>{pageNo}</PageButton>
        <PageButton hover onClick={() => stepPage("FORWARD")}>
          {">"}{" "}
        </PageButton>
      </PaginationContainer>
    </Container>
  );
};

// css styles
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  background-image: url(${backgroundCover});
  display: flex;
  flex-direction: column;
  align-items: stretch;
  font-family: Dosis, sans-serif;
  font-weight:400;
  letter-spacing:1.5px;
`;
const TitleContainer = styled.div`
  height: 4rem;
  background-color: #031f3a;
  display: flex;
  flex-wrap: wrap;
  font-style: italic;
`;
const FirstTitle = styled.h4`
  color: #f50057;
  font-size: 1.3rem;
  margin: 1.2rem 0 0 10rem;
`;
const SecondTitle = styled.h4`
  color: #ffffff;
  font-size: 1rem;
  margin: 1.5rem 0.5rem;
`;
const Body = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: auto;
  & > div {
    width: 13rem;
    height: 25rem;
    background: #233a50;
    align-self: baseline;
    margin: 2rem;
  }
`;
const FeatureContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem;
  overflow-y: auto;
  overflow: visible;
`;
const FilterButton = styled.div`
  background: #233a50;
  font-size: 0.8rem;
  padding: 0.2rem;
  font-weight:600;
  color: white;
  cursor: pointer;
  margin-right: 0.3rem;
  border-radius: 4px;
  overflow: visible;
  width: 7rem;
`;
const Star = styled.div`
  height: 1.1rem;
  width: 1.1rem;
  filter: ${(props) => (props.active ? "" : "grayscale(100%)")};
  background-color: yellow;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
`;
const StarContainer = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Input = styled.input`
  background: #233a50;
  border: 1px solid #122832;
  padding: 0.5em;
  font-size: 1.3rem;
  width: 40rem;
  border-radius: 4px;
  color: #ffffff;
  outline: none;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: 1.5rem 1.5rem;
  background-position: 39rem 0.5rem;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-family: Dosis, sans-serif;
    font-weight:600;
  }
`;
const ToggleButton = styled.div`
  background: ${(props) => (props.active ? "white" : "#233a50")};
  color: ${(props) => (props.active ? "#233a50" : "white")};
  cursor: pointer;
  margin-left: 0.3rem;
  display: flex;
  align-items: center;
  border-radius: 4px;
  max-width: 8rem;
  text-align: center;
  font-weight:600;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`;
const PageButton = styled.div`
  padding: 0.5rem;
  font-size: 1rem;
  margin: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: white;
  background-color: ${(props) => (props.color ? props.color : "#233a50")};
  &:hover {
    ${(props) =>
      props.hover && " background-color: #031f3a;transform: scale(1.2);"}
  }
  transition: all 0.2s ease;
  font-weight: 900;
`;

export default LandingPage;
