import  { useEffect, useState } from 'react';
import styled from 'styled-components';

const useFixed = () => {

  const [scrollY, setScroolY] = useState(0);
  const handleScroll = () =>{
    setScroolY(window.scrollY)}

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
   
    return () => {
      window.removeEventListener('scroll', handleScroll)}
  }, []);

  /*Style components*/
const Nav = styled.ul`
      display: flex;
      width: 420px;
      justify-content: space-between;
      position: relative;
      bottom: 35px;
      margin-top: 6px;

     @media(max-width: 510px){
         margin-top: 25px;
         top: -5px;
         width: 60%;
         flex-direction: row;
         text-align: center}`;

const LiNav = styled.li`
      list-style:none;
      margin-left: -39px;

      &:hover{
         border-bottom: 2px solid #18d26e}

      @media(max-width: 510px){
         position: relative;
         padding: 5px 10px 5px 10px;}`;

const LinkNav = styled.a`
      text-decoration: none;
      font-size: 18px;
      background-color: transparent;
      color: #fff;
      font-family: 'IBM Plex Serif', serif;

      @media(max-width: 510p){
        font-size: 14px}`;

  const NavBar = () => {
    return (
         <Nav>
               <LiNav><LinkNav href="#presentacion">Home</LinkNav></LiNav>
               <LiNav><LinkNav href="#sobreMi">About me</LinkNav></LiNav>
               <LiNav><LinkNav href="#proyects">Proyects</LinkNav></LiNav>
               <LiNav><LinkNav href="#Contacto">Contact</LinkNav></LiNav>
         </Nav>)}
}
