import styled from "styled-components";

const ModalHeading = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
`;

function ShippingModal({ customerName, shippingAddress }) {
  return (
    <>
      <ModalHeading>{customerName}</ModalHeading>
      <div>{shippingAddress}</div>
    </>
  );
}

export default ShippingModal;
