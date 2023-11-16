import styled from "styled-components";
import OrderCard from "./OrderCard";
import { useOrders } from "./useOrders";
import Spinner from "../../ui/Spinner";
import FullPage from "../../ui/FullPage";
import { Link } from "react-router-dom";

const StyledOrderDetails = styled.section`
  padding-top: 10rem;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  padding: 12rem 1.5rem;
`;

const Heading = styled.div`
  font-size: 2.8rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const EmptyOrder = styled.span`
  font-size: 2rem;
`;

const StyledLink = styled(Link)`
  color: blue;
  border-bottom: 1px solid blue;
`;

function OrderSection() {
  const { orders, isLoading } = useOrders();

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (!orders.length)
    return (
      <StyledOrderDetails>
        <Container>
          <Heading>Your Orders</Heading>
          <EmptyOrder>
            You have not ordered anything yet! Start{" "}
            <StyledLink to="/shop">shopping :)</StyledLink>
          </EmptyOrder>
        </Container>
      </StyledOrderDetails>
    );

  return (
    <StyledOrderDetails>
      <Container>
        <Heading>Your Orders</Heading>
        {orders.map((order) => (
          <OrderCard order={order} key={order.id} />
        ))}
      </Container>
    </StyledOrderDetails>
  );
}

export default OrderSection;
