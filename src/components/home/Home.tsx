import React from "react";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import bgImage from "../../assest/images/grass.jpg";
import { NextPage } from "next";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${bgImage.src});
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {
  readonly name: string | null;
}

const Home: NextPage<Props> = ({ name }) => {
  return (
    <Container>
      <LoginForm name={name} />
    </Container>
  );
};

export default Home;

// type StaticImageData = {
//   src: string;
//   height: number;
//   width: number;
//   placeholder?: string;
// };
