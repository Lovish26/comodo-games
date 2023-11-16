import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import { BsCaretDownFill } from "react-icons/bs";
import styled from "styled-components";

import { useOutsideClick } from "../hooks/useOutsideClick";
import { useUser } from "../features/authentication/useUser";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: 3px;
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: #374151;
  }
`;

const StyledList = styled.ul`
  position: fixed;

  background-color: #fff;
  box-shadow: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  border-radius: 3px;

  right: ${(props) => props.position.x - 10}px;
  top: ${(props) => props.position.y}px;
  z-index: 999;
  padding-top: 1rem;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2rem;
  font-size: 1.4rem;
  font-weight: 500;
  color: black;
  transition: all 0.3s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: #f9fafb;
  }

  &:hover,
  &:active {
    background-color: var(--color-brand-primary);
    color: #fff;
  }

  & > svg {
    font-size: 1.8rem;
  }
`;

const DropdownButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 3px;
`;

const StyledBsCaretDownFill = styled(BsCaretDownFill)`
  font-size: 12px;
`;

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);
  const { user } = useUser();

  function handleClick(e) {
    e.stopPropagation();

    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === "" || openId !== id ? open(id) : close();
  }

  return id !== "dropdown" ? (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  ) : (
    <DropdownButton onClick={handleClick}>
      Hello, {user?.user_metadata?.username?.split(" ")?.at(0)}
      <StyledBsCaretDownFill />
    </DropdownButton>
  );
}
function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);

  if (openId !== id) return null;

  return createPortal(
    <StyledList position={position} ref={ref}>
      {children}
    </StyledList>,
    document.body
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <>
      <StyledButton onClick={handleClick}>
        {icon} <span>{children}</span>
      </StyledButton>
    </>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
