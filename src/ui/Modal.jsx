import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled, { css } from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

const StyledModal = styled.div`
  position: fixed;
  top: 0%;
  width: 50rem;
  height: 100vh;
  right: 0%;
  background-color: #f8f9fa;
  overflow-y: auto;

  z-index: 999;
  padding: 3.2rem 4rem;
  transition: all 0.5s;

  @media (max-width: 500px) {
    width: 100%;
  }

  /* ${(props) =>
    props.type === "dropdown" &&
    css`
      position: absolute;
      top: 28px;
      width: auto;
      height: auto;
      right: 0;
      background-color: #fff;

      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      overflow: hidden;
      padding: 1rem 0 0;
      border-radius: 3px;
    `} */
  ${(props) =>
    props.type === "shipping" &&
    css`
      position: absolute;
      top: 40px;
      left: 0;
      width: 15rem;
      height: auto;
      background-color: #fff;
      border: 1px solid #d3d3d3;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      overflow: hidden;
      padding: 1rem 2.4rem;
      border-radius: 3px;
      z-index: 9;
    `}

  ${(props) =>
    props.type === "checkout" &&
    css`
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: auto;
      height: auto;

      background-color: #f8f9fa;
      overflow: hidden;

      z-index: 9999;
      padding: 3.2rem 4rem;
      transition: all 0.5s;
    `}
  ${(props) =>
    props.type === "mobile-nav" &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 75%;
      height: 100vh;
    `}
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

const ModalContext = createContext();

function Modal({ children, type }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close, type }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name, type }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  if (!type) {
    return createPortal(
      <Overlay>
        <StyledModal ref={ref}>
          <Button onClick={close}>
            <HiXMark />
          </Button>

          <div>{cloneElement(children, { onCloseModal: close })}</div>
        </StyledModal>
      </Overlay>,
      document.body
    );
  } else if (type === "checkout" || type === "mobile-nav") {
    return createPortal(
      <Overlay>
        <StyledModal ref={ref} type={type}>
          <Button onClick={close}>
            <HiXMark />
          </Button>

          <>{cloneElement(children, { onCloseModal: close })}</>
        </StyledModal>
      </Overlay>,
      document.body
    );
  } else {
    return (
      <StyledModal ref={ref} type={type}>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    );
  }
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
