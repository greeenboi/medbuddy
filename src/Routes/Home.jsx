import React from 'react'
import "../Components/home.scss"
import styled from 'styled-components'
import Dna from '../Components/Dna'
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Stage, Preload } from "@react-three/drei";

const Section = styled.section`
  height: 80vh;
  width: 100vw;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  
`
const Container = styled.div`
  height: 100vh;
  width: 99vw;
  
  justify-content: space-around;
  display: flex;
  flex-direction: row;
`;

const CardContainer = styled.div`
  height: auto;
  width: 99vw;    
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
  padding: 1em;
`

const Left = styled.div`
  flex:2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap:20px;
`;

const WhatWeDo = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap:10px;
`;

const Right = styled.div`
  flex:3;
  
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  `;

const Title = styled.h1`
  font-size: 120px;
  display: flex;
  font-family: 'Quicksand', sans-serif;
  font-style: oblique;
  border-radius: clamp(0.4rem, 0.75vw, 1rem);
  color: rgba(255,255,255,0.9);
  font-weight: bold;
  width: 90%;
  justify-content: center;
  align-items:center;
  text-align: left;
  padding-left:2rem;
`;

const Desc = styled.h3`
  font-size:25px;
  color: rgba(120,120,120,0.9);
  align-items: bottom;
  justify-content: left;
  margin: 0px 0px 0px 0px;
`;

const Subtitle = styled.h4`
  display: flex;
  justify-content: left;
  align-items: top;
  font-family:'Rajdhani', sans-serif;
  font-size:20px;
  padding-left: 2rem;
  margin: 0px 0px 0px 0px;
`;

const Sidebar = styled.div`
  display: flex;  
  position: relative;
  align-items: center;
  flex-direction: column;
  background-color:rgba(0,0,0,0.2);
  border:1px solid rgba(255,255,255,0.2);
  border-radius:30px;
  justify-content: space-evenly;
  margin:0px;
  transform: rotate(-90deg);
  padding: 10px 30px ;
  backdrop-filter: blur(3px);
  transform-origin: left right; 
  right:-100px;
  white-space: nowrap;
  transition: all 500ms ease-in-out;
  &:hover{
    padding:20px;
    background-color:rgba(0,0,0,0.3);
  }
`

const Card = styled.div`
  width:30%;
  padding:0.5rem;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  backdrop-filter: blur(3px);
  background-color: rgba(255,255,255, 0.1);
  border: 1px solid rgba(255,255,255, 0.1);    
  border-radius:50px;
  box-shadow: 2px 2px 4px rgba(black, 0.25);
`
const List = styled.ul`
  list-style-type: none;
  display: flex;
  gap:30px;
  margin:0px 0px 0px 0px;
  font-size: 12px;
`
const ListItem = styled.li`
    cursor: pointer;  
    font-family: 'Lexend Deca', sans-serif;
`;

const Cimg = styled.img`
  border: 1px solid rgba(255,255,255,0.2);
  border-radius:80px;
  height:60px;
  width:60px;
  gap:5px;
  align-items: center;
  margin:0px 0px 0px 0px;
  transition: all 500ms ease-in-out;
  &:hover{
    height:50px;
    width:50px;
    opacity:0.8;
    border: 4px solid rgba(255,255,255,0.2);
  }
`

const Home = () => {
  return (
    <Section>
      <Container >
        <Left>
        <Canvas style={{position:"relative", left:"-110px" }} >        
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[2,3,1]} />
            <Sphere args={[1,100,200]} scale={2.6}>
            <MeshDistortMaterial color="#2b6f71" attach="material" distort={0.5} speed={2} />
            </Sphere>
            <Preload all />
          </Canvas>
          <div style={{position:"absolute", float:"center"}}>
            <Desc>Decentralizing Patient Data through </Desc>
            <Title>MedBuddy</Title>
            <Subtitle>Welcome to our company where we are dedicated to help and innovate</Subtitle>
            <Link to="/Download">
              <button className="learn-more">
                <div className="circle">
                  <span className="icon arrow"></span>
                <p className="button-text">Learn More</p>
                </div>
              </button>
            </Link>
          </div>
        </Left>
        <Right>
        <Sidebar>
          <List>
            <ListItem onClick={() => window.open("https://www.linkedin.com/")}>Linkedin</ListItem>
            <ListItem onClick={() => window.open("https://www.instagram.com/")}>Instagram</ListItem>
            <ListItem onClick={() => window.open("https://www.reddit.com/")}>Reddit</ListItem>
          </List>
        </Sidebar>
          <Canvas style={{paddingLeft:"10px",cursor:"grab"}}>
            <Stage environment="city" intensity={30} adjustCamera={0.6}>
              <Dna/>
            </Stage>
            <OrbitControls enableZoom={false} autoRotate={false} />
          </Canvas>
          <div></div>
        </Right>
      </Container>
      <CardContainer>
        <Card>
          <Cimg src="/woman.jpg"/>
          <Cimg src="/man2.jpg"/>
          <Cimg src="/man1.jpg"/>
          "100+ Happy Customers"
        </Card>
        <Card>
          
          "This product is awesome!"
        </Card>
        <Card>
          
          "
        </Card>
      </CardContainer>
    </Section>
  )
}

export default Home