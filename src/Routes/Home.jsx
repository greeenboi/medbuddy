import React from 'react'
import "../Components/home.scss"
import styled from 'styled-components'
import Dna from '../Components/Dna'
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Stage, Preload } from "@react-three/drei";
import { GiInfinity } from "react-icons/gi"
import { BsArrowRight } from "react-icons/bs"

const Section = styled.section`
  height: 180vh;
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
  font-family: 'Poppins', sans-serif;
  font-style: oblique;
  border-radius: clamp(0.4rem, 0.75vw, 1rem);
  color: rgba(255,255,255,0.2);
  font-weight: italcs;
  width: 90%;
  justify-content: center;
  align-items:center;
  text-align: left;
  padding-left:2rem;
  -webkit-text-stroke: 2px rgba(10,10,10,0.5);
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

const Promote = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  gap:30px;
  align-items: center;
  position:absolute;
  right:15vw;
  padding:2rem;
  background-color:rgba(255,255,255,0.125);
  backdrop-filter:blur(2px);
  border:0;
  border-radius:10px;
  box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
`

const Cimg = styled.img`
  border: 1px solid rgba(255,255,255,0.2);
  border-radius:80px;
  height:60px;
  width:60px;
  gap:5px;
  align-items: center;
  margin:0px 0px 0px 0px;
  transition: all 500ms ease-in-out;
  box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
  &:nth-child(1){
    height:65px;
    width:65px;
  }
  &:nth-child(1):hover{
    height:60px;
    width:60px;
    opacity:0.8;
    border: 4px solid rgba(255,255,255,0.2);
  }
  &:hover{
    height:50px;
    width:50px;
    opacity:0.7;
    border: 4px solid rgba(255,255,255,0.2);
  }
`
const Button = styled.button`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;
  background:rgba(0,0,0,0.3);
  color:rgba(250, 241, 254,0.7);
  border-radius:90px;
  border:0;
  transition:all 500ms ease;
  &:hover{
    padding:10px;
    color:#fff;
    gap:5px;
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
        <Promote >
          <GiInfinity style={{height:"20px"}}/>  Partnering for a Better Future.
          <Link to="/About">
            <Button>
              About Us
              <BsArrowRight/>
            </Button>
            </Link>
        </Promote>
          <Canvas style={{left:"-20px",position:"relative"}}>
            <Stage environment="city" intensity={30} adjustCamera={0.6}>
              <Dna/>
            </Stage>
          </Canvas>
        </Right>
      </Container>
      <Container>
        <Left>
          Ad1
        </Left>
        <Right>
          Ad2
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