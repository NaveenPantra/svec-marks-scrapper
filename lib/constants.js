const ROLL_NUMBER_YEAR = "{{year}}";
const ROLL_NUMBER_SUFFIX = "{{suffix}}";
const ROLL_NUMBER_BRANCH_CODE = "{{branch_code}}";
const ROLL_NUMBER = `${ROLL_NUMBER_YEAR}121A${ROLL_NUMBER_BRANCH_CODE}${ROLL_NUMBER_SUFFIX}`;

const ROLL_START_ARR = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
];

const ROLL_END_ARR = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const EXAM_PORTAL_URL = "http://examsportal.vidyanikethan.edu/getRecord.asp";
const QUERY_STRINGS = {
  HT_NO: "htno",
};

const MIN_YEAR = 10;
const MAX_YEAR = new Date().getFullYear().toString().slice(2);

const KNOWN_BRANCHES = {
  "01": "Civil Engineering",
  "02": "ELECTRICAL AND ELECTRONICS ENGINEERING",
  "03": "MECHANICAL ENGINEERING",
  "04": "ELECTRONICS AND COMMUNICATION ENGINEERING",
  "05": "COMPUTER SCIENCE AND ENGINEERING",
  "10": "ELECTRONICS AND INSTRUMENTATION ENGINEERING",
  "12": "INFORMATION TECHNOLOGY",
  "15": "COMPUTER SCIENCE AND SYSTEMS ENGINEERING",
};

const SUB_CODE = 'SubCode';

module.exports = {
  ROLL_NUMBER,
  ROLL_NUMBER_YEAR,
  ROLL_NUMBER_BRANCH_CODE,
  ROLL_NUMBER_SUFFIX,
  ROLL_START_ARR,
  ROLL_END_ARR,
  EXAM_PORTAL_URL,
  QUERY_STRINGS,
  MIN_YEAR,
  MAX_YEAR,
  KNOWN_BRANCHES,
  SUB_CODE,
};
