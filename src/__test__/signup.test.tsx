import { render, screen } from "@testing-library/react";
import SignUp from "../components/home/SignUp";
import userEvent from "@testing-library/user-event";
import signUpCall from "../service/signUpCall";

test("renders a heading", async () => {
  const user = userEvent.setup();
  render(<SignUp />);
  const inputPass = screen.getByTestId("pass_blank") as HTMLInputElement;
  const passConfirm = screen.getByTestId(
    "pass_blank_check"
  ) as HTMLInputElement;
  // fireEvent.change(input, { target: { value: "23" } });

  await user.click(inputPass);
  await user.keyboard("1234");
  // console.log(inputPass.value);

  inputPass.addEventListener("blur", (e) => {
    console.log((e.target as HTMLInputElement).value);
  });

  await user.click(passConfirm);
  await user.keyboard("1234");

  // const button = screen.getByTestId("submitBtn");
  // await user.click(button);
  await signUpCall().then(console.log);

  expect(inputPass.value === "1234").toBe(true);
});

// function getValue(elementId:string) {
//   const element = document.getElementById(elementId);
//   const value = element?.value;
//   return value;
// }
/** 
The value property does not exist on the HTMLElement type, 
as it is not a valid attribute of HTML elements in the DOM. 
It is however, a valid attribute of the HTMLInputElement type, which is a subclass of HTMLElement. 
To access the value property of an HTML element, you can use the getAttribute() method, 
which takes in the attribute name as an argument and returns the attribute's value as a string.
*/
