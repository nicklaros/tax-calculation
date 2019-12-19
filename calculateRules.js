const calculateRules = (
  annualTaxableIncome,
  taxRules,
  initialAnnualTax = 0
) => {
  const [rule, ...restRules] = taxRules;

  if (!rule) {
    return initialAnnualTax;
  }

  const ruleHasMaxIncome = typeof rule.maxIncome !== "undefined";

  const taxableIncome = !ruleHasMaxIncome
    ? annualTaxableIncome
    : Math.min(annualTaxableIncome, rule.maxIncome);

  const tax = ((taxableIncome - rule.minIncome) * rule.tax) / 100;
  const annualTax = initialAnnualTax + tax;

  if (!ruleHasMaxIncome || annualTaxableIncome <= rule.maxIncome) {
    return annualTax;
  }

  return calculateRules(annualTaxableIncome, restRules, annualTax);
};

module.exports = calculateRules;
