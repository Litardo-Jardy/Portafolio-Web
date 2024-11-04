import styled from "styled-components";

//-------------------------- Styles Navegacion;
export const NavRedes = styled.ul`
  display: flex;
  width: 420px;
  justify-content: space-evenly;
  position: relative;
  bottom: 50px;
  margin-top: 6px;

  @media (max-width: 510px) {
    top: -10px;
    flex-direction: row;
  }
`;

export const LiRedes = styled.li`
  list-style: none;
  margin-left: -39px;
  margin-top: 15px;
  width: 55px;
  height: 15px;
  text-align: center;
  border: rgba(255, 255, 255, 0.08);
  border-radius: 50%;

  @media (max-width: 510px) {
    padding: 20px;
    width: 60px;
    height: 60px;
  }
`;

export const LinkRedes = styled.a`
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  background-color: transparent;
  color: #fff;
  font-family: "IBM Plex Serif", serif;
  margin-top: 20px;

  @media (max-width: 510px) {
    font-size: 15px;
    margin-top: 12px;
  }
`;

//----------------------------- Style Navegacion;

interface NavProps {
  scroll: number;
}

export const Nav = styled.ul<NavProps>`
  display: flex;
  width: 420px;
  justify-content: space-between;
  position: ${(props) => (props.scroll > 530 ? "fixed" : "relative")};
  bottom: ${(props) => (props.scroll > 530 ? "895px" : "35px")};
  margin-top: 20px;

  @media (max-width: 510px) {
    margin-top: 25px;
    top: -5px;
    width: 60%;
    flex-direction: row;
    text-align: center;
  }
`;

export const LiNav = styled.li`
  list-style: none;
  margin-left: -39px;

  &:hover {
    border-bottom: 2px solid #18d26e;
  }

  @media (max-width: 510px) {
    position: relative;
    padding: 5px 10px 5px 10px;
  }
`;

export const LinkNav = styled.a`
  text-decoration: none;
  font-size: 18px;
  background-color: transparent;
  color: #fff;
  font-family: "IBM Plex Serif", serif;

  @media (max-width: 510px) {
    font-size: 14px;
  }
`;

//-------------------------- Style SeccionOne;

export const Container = styled.div`
  align-items: center;
  position: absolute;
  top: 10px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 600px;
`;

export const ImageContainer = styled.div`
  width: 300px;
  height: 500px;
  padding: 3px;
  position: relative;
  display: flex;
  justify-content: center;
  top: 75px;
`;

export const Img = styled.img`
  height: 260px;
  width: 260px;
  object-fit: cover;
  image-rendering: crisp-edges;
  border-radius: 51%;
  text-align: center;

  @media (max-width: 510px) {
    height: 210px;
    width: 210px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  font-family: "IBM Plex Serif", serif;

  @media (max-width: 510px) {
    text-align: center;
    width: 270px;
    font-size: 25px;
    position: relative;
    top: 25px;
  }
`;

export const SubTitle = styled.h2`
      text-align:center;
      font-size: 18px;
      border-bottom: 2px solid #18d26e;
      padding: 3px;
      margin-top: 20px;
      position: relative;
      top: -35px;
      width: 200px;
      font-family: 'Karla', sans-serif;

      @media (max-width:510px){
           font-size: 16px;
           position: relative;
           width: 165px;
           top: -10px`;
