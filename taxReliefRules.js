const taxReliefRules = [
  {
    isMarried: false,
    noOfDependants: 0,
    relief: 54000000
  },
  {
    isMarried: false,
    noOfDependants: 1,
    relief: 58500000
  },
  {
    isMarried: false,
    noOfDependants: 2,
    relief: 63000000
  },
  {
    isMarried: false,
    noOfDependants: 3,
    relief: 67500000
  },
  {
    isMarried: true,
    noOfDependants: 0,
    relief: 58500000
  },
  {
    isMarried: true,
    noOfDependants: 1,
    relief: 63000000
  },
  {
    isMarried: true,
    noOfDependants: 2,
    relief: 67500000
  },
  {
    isMarried: true,
    noOfDependants: 3,
    relief: 72000000
  }
];

module.exports = taxReliefRules;
