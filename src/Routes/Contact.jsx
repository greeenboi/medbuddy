import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  backdrop-filter:blur(3px)
`

const Title = styled.h1`
  font-size: 90px;
  display: flex;
  font-family: 'Poppins', sans-serif;
  
  border-radius: clamp(0.4rem, 0.75vw, 1rem);
  color: rgba(255,255,255,0.2);
  font-weight: italcs;
  width: 90%;
  justify-content: center;
  align-items:center;
  text-align: left;
  padding-left:1rem;
  -webkit-text-stroke: 2px rgba(10,10,10,0.5);
`;

const Container = styled.div`
  height: 100vh;
  width: 99vw;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  width: 50vw;
  height: 50vh;
  padding: 100px;
  background-color:rgba(255, 255, 255,0.2);
  border-radius:20px;
  border: 1px solid rgba(10,10,10,0.4);
`
const Input = styled.input`
  padding: 10px;
  gap:10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #999;
  &:focus{
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px #007bff;
  }
`

const Contact = () => {
  return (
    <Section>
      <Container>
        <Title>Contact Us</Title>
      <Form action="https://formsubmit.co/447166fcef88f5ba435b8fe4211486f4" method="POST" >          
          <Input type="text" name="name" placeholder="Your Name?" required/>
          <Input type="email" name="email" placeholder="Email Address" required/>
          <Input type="hidden" name="_subject" value="New submission from your site!"/>
          <Input type="text" name="message" placeholder="Your Content here" required/>
          <Input type="hidden" name="_autoresponse" value="Thank You for contacting me!🍧🍧 I will get back to you soon"/>
          <Input type="hidden" name="_next" value="https://thankyousuvangs.netlify.app/"/>
          <button type="submit">Send</button>
      </Form>
      </Container>
    </Section>
  )
}

export default Contact