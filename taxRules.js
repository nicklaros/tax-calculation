const taxRules = [
  {
    minIncome: 0,
    maxIncome: 50000000,
    tax: 5
  },
  {
    minIncome: 50000000,
    maxIncome: 250000000,
    tax: 15
  },
  {
    minIncome: 250000000,
    maxIncome: 500000000,
    tax: 25
  },
  {
    minIncome: 500000000,
    tax: 30
  }
];

module.exports = taxRules;
