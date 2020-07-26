import React, { useState, useEffect } from "react";
import MovieList from "./../movieListComponent/movieList";
import styled from "styled-components";
import { getMovieList, setMovie } from "./../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import backgroundCover from "./../../assets/images/backgroundCover.jpg";
import searchIcon from "./../../assets/images/searchicon.png";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [pageNo, setPageNo] = useState(1);
  const [filterQuery, setFilterQuery] = useState(0);
  useEffect(() => {
    dispatch(getMovieList({ searchTerm, filterQuery, pageNo }));
  }, [searchTerm, filterQuery, pageNo]);
  const movies = useSelector((state) => state.movieList.data) || [];
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
  const stars = [1, 2, 3, 4, 5];
  const handleSelectStarRating = (val) => {
    setFilterQuery(val);
  };
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
          <RatingDropdown>
            {stars.map((val) => (
              <Star
                active={val <= filterQuery}
                onClick={() => handleSelectStarRating(val)}
              />
            ))}
          </RatingDropdown>
        </FilterButton>
        <Input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </FeatureContainer>
      <Body>
        <MovieList
          moviesData={movies}
          handleMovieSelection={handleMovieSelection}
        />
      </Body>
      <PaginationContainer>
        <PageButton hover onClick={() => stepPage("BACKWARD")}>
          {"<"}
        </PageButton>
        <PageButton>{pageNo}</PageButton>
        <PageButton hover onClick={() => stepPage("FORWARD")}>
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
`;
const FeatureContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem;
  overflow-y: auto;
  overflow: visible;
`;
const FilterButton = styled.div`
  background: #233a50;
  font-size: 1.2rem;
  padding: 0.2rem;
  color: white;
  cursor: pointer;
  margin-right: 0.3rem;
  border-radius: 4px;
  overflow: visible;
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
const Star = styled.div`
  height: 3rem;
  width: 3rem;
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
const RatingDropdown = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default LandingPage;
