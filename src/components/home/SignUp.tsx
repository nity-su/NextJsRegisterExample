import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.form`
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
const ConfirmPassInputBox = styled.div`
  position: relative;
  height: 32px;
  margin-bottom: 17px;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

const LoadingSign = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin infinite 2s linear;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function SingUp() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [isDiffrentPassword, setIsDiffPass] = useState(false);
  const [id, setId] = useState("");

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    return setLoading(false);
  }, []);

  return (
    <Container>
      {isLoading ? (
        <LoadingSign />
      ) : (
        <FormContainer>
          <IdInputBox>
            <input
              type="text"
              id="id_blank"
              name="id"
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <label htmlFor="id_blank">아이디</label>
          </IdInputBox>
          <br />
          <PassInputBox>
            <input
              type="password"
              id="pass_blank"
              data-testid="pass_blank"
              name="password"
              minLength={8}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label htmlFor="pass_blank">비밀번호</label>
          </PassInputBox>
          <br />
          {isDiffrentPassword && password ? (
            <p>올바르지 않은 비밀번호를 입력했습니다.</p>
          ) : null}
          <ConfirmPassInputBox>
            <input
              type="password"
              id="pass_blank_check"
              data-testid="pass_blank_check"
              name="password"
              onBlur={(e) => {
                if (e.target.value === password) {
                  setIsDiffPass(false);
                } else {
                  setIsDiffPass(true);
                }
              }}
            />
            <label htmlFor="pass_blank_check">비밀번호 확인</label>
          </ConfirmPassInputBox>
          <br />
          <ButtonBox>
            <button
              data-testid="submitBtn"
              onClick={async (e) => {
                e.preventDefault();
                const data = { id, password };
                setLoading(true);
                const isSignUp = await fetch("/api/signup", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json;charset=utf-8",
                  },
                  body: JSON.stringify(data),
                }).then((result) => result.json());

                router.push("/");
              }}
            >
              Register
            </button>
          </ButtonBox>
        </FormContainer>
      )}
    </Container>
  );
}
