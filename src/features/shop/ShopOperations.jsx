import styled from "styled-components";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

const StyledShopOperations = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 4.8rem;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;

function ShopOperations() {
  return (
    <StyledShopOperations>
      <Filter
        filterField="discount"
        options={[
          {
            value: "all",
            label: "All",
          },
          {
            value: "with-discount",
            label: "With discount",
          },
          {
            value: "no-discount",
            label: "No discount",
          },
        ]}
      />
      <SortBy
        options={[
          { value: "rating-desc", label: "Sort by rating (Most Popular)" },
          { value: "rating-asc", label: "Sort by rating (Least Popular)" },
          { value: "discountedPrice-asc", label: "Sort by price (low-high)" },
          { value: "discountedPrice-desc", label: "Sort by price (high-low)" },
          { value: "discount-asc", label: "Sort by Discount (low first)" },
          { value: "discount-desc", label: "Sort by Discount (high first)" },
        ]}
      />
    </StyledShopOperations>
  );
}

export default ShopOperations;
