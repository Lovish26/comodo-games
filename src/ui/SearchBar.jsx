import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";

import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const StyledSearchBar = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 30rem;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 500;
  border: none;
  box-shadow: var(--box-shadow);

  @media (max-width: 960px) {
    width: 100%;
    box-shadow: none;
  }
`;

const Button = styled.button`
  color: rgb(60, 51, 141);

  background: none;
  border: none;
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
`;

function SearchBar({ searchField, onCloseModal = null }) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState("");
  const location = useLocation();

  const page = searchParams.get("page");

  function handleInputChange(e) {
    setSearchText(e.target.value);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") handleSearch();
  }

  function handleSearch() {
    if (!searchText) {
      searchParams.delete(searchField);
      searchParams.delete("page");
      setSearchParams(searchParams);
    }

    if (searchText) {
      navigate("/shop");
      if (page) searchParams.delete("page");
    }
  }

  useEffect(() => {
    if (searchText) {
      searchParams.set(searchField, searchText);
      setSearchParams(searchParams.toString());
      if (onCloseModal) onCloseModal();
    }

    if (!location.pathname.startsWith("/shop")) {
      setSearchParams("");
    }
  }, [searchField, searchParams, setSearchParams, location.pathname]);

  return (
    <StyledSearchBar>
      <Input
        type="text"
        placeholder="Search games..."
        value={searchText}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <Button onClick={handleSearch}>
        <BsSearch />
      </Button>
    </StyledSearchBar>
  );
}

export default SearchBar;
