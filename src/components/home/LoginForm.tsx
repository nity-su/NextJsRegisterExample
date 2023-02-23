import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  padding: 16px;
  width: 35vw;
  height: 25vh;
  box-shadow: 0 15px 25px rgba(92, 99, 105, 0.2);
  border-radius: 8px;
  form {
    height: 100%;
    padding: 0 12px;
    background-color: transparent;
  }

  label {
    display: inline-block;
    position: absolute;
    top: 15px;
    left: 15px;
    padding: 0;
    background-color: white;
    color: #dadce0;
    transition: 0.5s;
    font-size: 16px;
    z-index: 0;
  }
  input {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    padding: 0 4px;
    border: 1px solid #dadce0;
    border-radius: 7px;
    outline: none;
    background: none;
    z-index: 1;
  }
  ::placeholder {
    color: transparent;
  }
  input:focus + label {
    top: -7px;
    left: 3px;
    z-index: 10;
    font-size: 14px;
    font-weight: 600;
    color: purple;
  }
`;

const IdInputBox = styled.div`
  position: relative;
  height: 32px;
  margin-bottom: 17px;
`;
const PassInputBox = styled.div`
  position: relative;
  height: 32px;
  margin-bottom: 17px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: 17px;
  justify-content: space-evenly;

  button {
    border: none;
    padding: 12px 18px;
    width: 124px;
    background-color: purple;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 30px;
  }

  button:hover {
    background-color: #9867c5;
    transform: translateY(-2px);
  }
`;
export default function LoginForm() {
  const router = useRouter();
  return (
    <Container>
      <form action="/api/hello" method="post">
        <IdInputBox>
          <input type="text" id="id_blank" name="id" />
          <label htmlFor="id_blank">아이디</label>
        </IdInputBox>
        <PassInputBox>
          <input type="password" id="pass_blank" name="password" />
          <label htmlFor="pass_blank">비밀번호</label>
        </PassInputBox>
        <ButtonWrapper>
          <button onClick={(e) => {}}>Sing In</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              router.push("/sign-up");
            }}
          >
            Sign Up
          </button>
        </ButtonWrapper>
      </form>
    </Container>
  );
}
