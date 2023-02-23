import React from "react";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import bgImage from "../../assest/images/grass.jpg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${bgImage.src});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  console.log(bgImage);
  return (
    <Container>
      <LoginForm />
    </Container>
  );
}

// type StaticImageData = {
//   src: string;
//   height: number;
//   width: number;
//   placeholder?: string;
// };
