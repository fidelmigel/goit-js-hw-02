const blackListedWord_1 = "spam";
const blackListedWord_2 = "sale";

function checkForSpam(message) {
  const normolizedString = message.toLowerCase();
  const hasSpamWord1 = normolizedString.includes(blackListedWord_1);
  const hasSpamWord2 = normolizedString.includes(blackListedWord_2);
  if (hasSpamWord1 || hasSpamWord2) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
