import bcrypt from "bcrypt";
const saltRounds = 10;
const myPlaintextPassword = "1234abcd1234";
const someOtherPlaintextPassword = "not_bacon";

test("암호화 테스트", async () => {
  const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);
  expect(hash ? true : false).toBe(true);
});
