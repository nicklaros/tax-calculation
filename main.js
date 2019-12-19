const taxRules = require("./taxRules");
const getTaxRelief = require("./getTaxRelief");
const calculateRules = require("./calculateRules");

const MONTHS_IN_A_YEAR = 12;

const calculateTax = (monthlyIncome, isMarried, noOfDependants) => {
  const taxRelief = getTaxRelief(isMarried, noOfDependants);

  const annualTaxableIncome = monthlyIncome * MONTHS_IN_A_YEAR - taxRelief;

  if (annualTaxableIncome <= 0) {
    return 0;
  }

  return calculateRules(annualTaxableIncome, taxRules);
};

module.exports = calculateTax;
