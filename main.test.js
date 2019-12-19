const callculateTax = require("./main");

test("For single person with 25.000.000 monthly income, annual tax is 31.900.000", () => {
  expect(callculateTax(25000000, false, 0)).toBe(31900000);
});

test("For single person with 2.000.000 monthly income, annual tax is 0", () => {
  expect(callculateTax(2000000, false, 0)).toBe(0);
});

test("For single person with no monthly income, annual tax is 0", () => {
  expect(callculateTax(0, false, 0)).toBe(0);
});

test("For married person with 1 dependants and 6.500.000 monthly income, annual tax is 750.000", () => {
  expect(callculateTax(6500000, true, 1)).toBe(750000);
});

test("For married person with 1 dependants and 15.000.000 monthly income, annual tax is 12.550.000", () => {
  expect(callculateTax(15000000, true, 1)).toBe(12550000);
});

test("For married person with 1 dependants and 50.000.000 monthly income, annual tax is 106.100.000", () => {
  expect(callculateTax(50000000, true, 1)).toBe(106100000);
});

test("For married person with 5 dependants and 6.500.000 monthly income, annual tax is 300.000. Max no of dependants for tax deduction is 3", () => {
  expect(callculateTax(6500000, true, 5)).toBe(300000);
});
