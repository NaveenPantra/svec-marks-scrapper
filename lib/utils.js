const chalk = require("chalk");
const CONSTANTS = require("./constants");

const isValidYear = (year) => {
  return !(year < CONSTANTS.MIN_YEAR || year > CONSTANTS.MAX_YEAR);
};

const isValidBranchCode = (branchCode) => {
  return branchCode.toString().length === 2 && !isNaN(Number(branchCode));
};

const verifyBranchCode = (branchCode) => {
  if (CONSTANTS.KNOWN_BRANCHES[branchCode]) {
    console.log(`${chalk.bold.greenBright("All good ")} 👍👍👍`);
    return;
  }
  console.log(
    `\n🚨 ${chalk.bold.yellowBright(
      "Entered branch code"
    )} ${chalk.bold.redBright(branchCode)} ${chalk.bold.yellowBright(
      "is not present in our known records"
    )} 🚨. ${chalk.bold.greenBright(
      "But anyway I will scrape data for you!"
    )} 🙂 \n`
  );
  console.log(
    chalk.whiteBright("These are the branched that are known to us currently:")
  );
  console.table(CONSTANTS.KNOWN_BRANCHES);
  console.log(
    `\n ${chalk.bold.greenBright(
      "But anyway I will scrape data for you!"
    )} 🙂 \n`
  );
};

const byeSadMessage = () => {
  console.log(
    `${chalk.bold.magentaBright("\n\nBye! I am sad to see you go! ")}😟 😟 \n\n`
  );
};

const sleep = async (timeInMs = 500) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeInMs);
  });
};

const hangTightMessage = async (branchCode) => {
  console.log(
    `\n${chalk.bold.blueBright(`Scrapping branch`)} : ${chalk.bold.greenBright(
      CONSTANTS.KNOWN_BRANCHES[branchCode] || branchCode
    )}`
  );
  await sleep(500);
  console.log(
    `${chalk.bold.blueBright(
      "Hang tight and buckel up 🥋 we are launching 🚀 🚀 🚀"
    )}\n`
  );
  await sleep(1000);
  return new Promise((resolve) => {
    resolve();
  });
};

const getMarksData = (str = "") => {
  const percentage = str
    ?.match?.(/(overall percentage :.*%)/i)?.[0]
    ?.match?.(/((\d\d|\d)\.(\d\d|\d)%)/)?.[0];
  const CGPA = str
    ?.match?.(/(cgpa:\s(\d|\d\d)\.(\d\d|\d))/i)?.[0]
    ?.match?.(/((\d|\d\d)\.(\d\d|\d))/)?.[0];
  debugger;
  const totalMarksObtained = str
    ?.match(
      /(total\smarks\sobtained\:\n\s\s\s(\d\d\d\d|\d\d\d|\d\d|\d)\n)/i
    )?.[0]
    ?.match?.(/(\d\d\d\d|\d\d\d|\d\d|\d)/i)?.[0];
  const maxTotalMarks = str
    ?.match?.(/(total\smax\.\smarks\:(\d\d\d\d|\d\d\d|\d\d|\d))/i)?.[0]
    ?.match?.(/(\d\d\d\d|\d\d\d|\d\d|\d)/i)?.[0];

  return {
    percentage,
    CGPA,
    totalMarksObtained,
    maxTotalMarks,
  };
};

const printResult = ({
  roll,
  name,
  percentage,
  CGPA,
  totalMarksObtained,
  maxTotalMarks,
}) => {
  const marksString = CGPA
    ? chalk.bold.yellowBright(
        `[ ${totalMarksObtained}/${maxTotalMarks}, ${percentage}, ${CGPA} ]`
      )
    : "";
  console.log(
    `${chalk.bold.greenBright(`${roll}`)} - ${chalk.bold.greenBright(
      `${name}`
    )} - ${marksString}`
  );
};

module.exports = {
  isValidYear,
  isValidBranchCode,
  verifyBranchCode,
  byeSadMessage,
  printResult,
  hangTightMessage,
  getMarksData,
};
