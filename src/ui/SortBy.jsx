import styled from "styled-components";

import Select from "./Select";

import { useSearchParams } from "react-router-dom";

const StyledSortBy = styled.div``;

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <StyledSortBy>
      <Select options={options} onChange={handleChange} value={sortBy} />
    </StyledSortBy>
  );
}

export default SortBy;
