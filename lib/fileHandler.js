var fs = require("fs");

// get current working directory
var cwd = process.cwd();

fileHandler = {};

fileHandler.read = function (filePath) {
  try {
    let data = fs.readFileSync(cwd + filePath);
    data = data.toString();
    return JSON.parse(data);
  } catch (err) {
    // console.error(err);
    return ''
  }
};

fileHandler.write = function (filePath, data) {
  try {
    fs.writeFileSync(cwd + filePath, data);
  } catch (err) {
    // console.error(err);
  }
};

fileHandler.append = function (filePath, data) {
  try {
    fs.appendFileSync(cwd + filePath, data);
  } catch (err) {
    // console.error(err);
  }
}

fileHandler.storeData = function ({roll, name, ...results}) {
  try {
    // const csvFile = '/data.csv'; 
    const jsonFile = '/data.json';
    let data = fileHandler.read(jsonFile);
    if (typeof data === 'string') data = {}
    data[roll] = {
      name: name.trim(),
      roll,
      results
    }
    fileHandler.write(jsonFile, JSON.stringify(data, null, 2));
  } catch (err) {
    // console.error(err);
  }
}


module.exports = fileHandler;
