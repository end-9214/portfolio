import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import Map from './Map';


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
justify-content: flex-end;
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
cursor: pointer;
padding: 15px;
`;

const Right = styled.div`
flex: 1;
`;



const Contact = () => {

  const ref = useRef();
const [success, setSuccess] = useState(null);

const handleSubmit = e => {
e.preventDefault();

emailjs.sendForm('service_4ghp1p8', 'template_i7z2yec', ref.current, '9fVMPOpwWP7ilJtqe')
.then((result) => {
    console.log(result.text);
    setSuccess(true);
}, 
(error) => {
    console.log(error.text);
    setSuccess(false);
});
}

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name"/>
            <Input placeholder="Email" name="email"/>
            <TextArea placeholder="Write your message here..." name="message" rows={10}/>
            <Button type="submit">Send</Button>
            {success && 
            "Thanks, I'll reply ASAP :"}
          </Form>
        </Left>
        <Right>
          <Map/>
        </Right>
      </Container>
    </Section>
  )
}

export default Contact