const fetch = require("node-fetch");
const jsdom = require("jsdom");
const CONSTANTS = require("./constants");
const utils = require("./utils");
const fileHandler = require("./fileHandler");

const { JSDOM } = jsdom;

async function getData({ startYear, endYear, branchCode }) {
  fileHandler.write('/data.json', '');
  let straightSubCodeCount = 0;
  for (let h = startYear; h <= endYear; h++) {
    for (let i = 0; i < CONSTANTS.ROLL_START_ARR.length; i++) {
      for (let j = 0; j < CONSTANTS.ROLL_END_ARR.length; j++) {
        let roll = CONSTANTS.ROLL_NUMBER.replace(CONSTANTS.ROLL_NUMBER_YEAR, h);
        roll = roll.replace(
          CONSTANTS.ROLL_NUMBER_SUFFIX,
          CONSTANTS.ROLL_START_ARR[i] + CONSTANTS.ROLL_END_ARR[j]
        );
        roll = roll.replace(CONSTANTS.ROLL_NUMBER_BRANCH_CODE, branchCode);
        const url = new URL(CONSTANTS.EXAM_PORTAL_URL);
        url.searchParams.append(CONSTANTS.QUERY_STRINGS.HT_NO, roll);
        const res = await fetch(url);
        let body = await res.text();
        body = `<html><head></head><body>${body}</body></html>`;
        const { document } = new JSDOM(body).window;
        let name = document.querySelector("table tbody tr");
        name = name.children[2].textContent;
        if (name === CONSTANTS.SUB_CODE) {
          straightSubCodeCount++;
          if (straightSubCodeCount === 5) return;
          continue;
        }
        straightSubCodeCount = 0;
        let marksString = document.querySelector("table:nth-child(5) tbody")?.textContent;
        const marks = utils.getMarksData(marksString ?? '')
        utils.printResult({roll, name, ...marks });
        fileHandler.storeData({roll, name, ...marks });
      }
    }
  }
}

module.exports = {
  getData,
};
