const taxReliefRules = require("./taxReliefRules");

const getReliefRule = (isMarried, noOfDependants) => {
  noOfDependants = Math.max(Math.min(noOfDependants, 3), 0);

  const validRule = taxReliefRules.find(rule => {
    return (
      rule.isMarried === isMarried && rule.noOfDependants === noOfDependants
    );
  });

  return validRule.relief;
};

module.exports = getReliefRule;
