const getReliefRule = require("./getTaxRelief");

test("For single person with no dependants", () => {
  expect(getReliefRule(false, 0)).toBe(54000000);
});

test("For single person with 1 dependants", () => {
  expect(getReliefRule(false, 1)).toBe(58500000);
});

test("For single person with 2 dependants", () => {
  expect(getReliefRule(false, 2)).toBe(63000000);
});

test("For single person with 3 dependants", () => {
  expect(getReliefRule(false, 3)).toBe(67500000);
});

test("For married person with no dependants", () => {
  expect(getReliefRule(true, 0)).toBe(58500000);
});

test("For married person with 1 dependants", () => {
  expect(getReliefRule(true, 1)).toBe(63000000);
});

test("For married person with 2 dependants", () => {
  expect(getReliefRule(true, 2)).toBe(67500000);
});

test("For married person with 3 dependants", () => {
  expect(getReliefRule(true, 3)).toBe(72000000);
});

test("Test overflow dependants. For married person with 5 dependants, it should be counted as 3 dependants", () => {
  expect(getReliefRule(true, 5)).toBe(72000000);
});

test("Test invalid minus dependants, For single person with -5 dependants, it should be counted as 0 dependants", () => {
  expect(getReliefRule(false, -5)).toBe(54000000);
});

test("Test invalid minus dependants, For married person with -5 dependants, it should be counted as 0 dependants", () => {
  expect(getReliefRule(true, -5)).toBe(58500000);
});
