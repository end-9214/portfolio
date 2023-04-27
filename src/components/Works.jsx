import React from 'react'
import styled from "styled-components";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",

]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

`;
const Container = styled.div`
width: 1400px;
display: flex;
justify-content: space-between;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;


`;

const List = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 10px;

`;

const ListItem = styled.li`
font-size: 50px;
font-weight: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 1px white;
position: relative;

::after {
  content: "${(props) => props.text}";
  position: absolute;
  left: 0;
  top: 0;
  color: pink;
  width: 0px;
  overflow: hidden;
  white-space: nowrap;
  
}

:hover {
  ::after {
    animation: moveText 1s linear both;

    @keyframes moveText {
      to{
          width: 100%;
      }
    }
  }

}

`;

const Right = styled.div`
flex: 1;

`;


const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item}>{item}</ListItem>
            ))}
          </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  )
}

export default Works;