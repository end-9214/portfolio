import React from 'react'
import styled from "styled-components";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;

`;

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
gap: 50px;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
`;

const Title = styled.h1`
font-weight: 200;

`;

const Form = styled.form`
width: 600px;
display: flex;
flex-direction: column;
gap: 20px;
`;

const Input = styled.input`
padding: 20px;
background-color: lightgray;
border: none;
border-radius: 10px;

`;

const TextArea = styled.textarea`
padding: 20px;
background-color: lightgray;
border: none;
border-radius: 10px;
`;

const Button = styled.button`
border: none;
border-radius: 10px;
background-color: #da4ea2;
color: white;
font-weight: bold;
`;

const Right = styled.div`
flex: 1;
`;

const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Contact Us</Title>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <TextArea placeholder="Write your message here..." />
            <Button>Send</Button>
          </Form>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  )
}

export default Contact