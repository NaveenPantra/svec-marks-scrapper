const chalk = require("chalk");
const inquirer = require("inquirer");
const scrapper = require("./scrapper");

const utils = require("./utils");

const getStartYear = async () => {
  return await inquirer.prompt({
    name: "startYear",
    type: "input",
    message: "Enter start year (eg: 15)",
    validate: function (inputValue) {
      if (utils.isValidYear(Number(inputValue))) return true;
      return `\n${chalk.whiteBright.bold(
        "Entered year "
      )} ${chalk.bgWhiteBright.bold.redBright(
        inputValue
      )} ${chalk.whiteBright.bold(" is valid for generating rollnumber")}`;
    },
  });
};

const getEndYear = async (startYear) => {
  return await inquirer.prompt({
    name: "endYear",
    type: "input",
    message: "Enter end year (eg: 20)",
    validate: function (inputValue) {
      if (utils.isValidYear(Number(inputValue)) && inputValue >= startYear)
        return true;
      return `\n${chalk.whiteBright.bold(
        "Entered year "
      )} ${chalk.bgWhiteBright.bold.redBright(
        inputValue
      )} ${chalk.whiteBright.bold(" is valid for generating rollnumber")}`;
    },
  });
};

const getBranchCode = async () => {
  return await inquirer.prompt({
    name: "branchCode",
    type: "input",
    message: "Enter branch code (eg: 01)",
    validate: function (inputValue) {
      if (utils.isValidBranchCode(inputValue)) return true;
      return `\n${chalk.whiteBright.bold(
        "Entered branch code "
      )} ${chalk.bgWhiteBright.bold.redBright(
        inputValue
      )} ${chalk.whiteBright.bold(" is valid for generating rollnumber")}`;
    },
  });
};

const lastConfirmation = async () => {
  return await inquirer.prompt({
    name: "confirmation",
  type: "confirm",
    message: "Can we start the scrapping 📃📄?",
  });
};

const askQuestions = async () => {
  const { startYear } = await getStartYear();
  const { endYear } = await getEndYear(startYear);
  const { branchCode } = await getBranchCode();
  utils.verifyBranchCode(branchCode);
  const { confirmation } = await lastConfirmation();
  if (!confirmation) {
    utils.byeSadMessage();
    return;
  }
  await utils.hangTightMessage(branchCode)
  await scrapper.getData({ startYear, endYear, branchCode });
};

module.exports = {
  askQuestions,
};
