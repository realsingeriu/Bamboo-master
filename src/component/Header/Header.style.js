import { styled } from "styled-components";

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  height: 150px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 100px;

  background-color: black;
  z-index: 3;

  max-width: 1550px;
  width: 100%;
  margin: 0 auto;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

export const ProfileImg = styled.img`
  width: 70px;
  height: 70px;

  margin-left: 10px;

  border-radius: 100%;
`;

export const ButtonBox = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
