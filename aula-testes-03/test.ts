import calculator from "calculator";

test("soma 1+2 deve ser igual a 3", ()=>{
  expect(calculator.sum(1,2)).toBe(3)
})