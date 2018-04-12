// logger.js

const logFilePrefix = 'log-file-';
const logPath = process.env.APP_LOG || "./log/";
const logLevel = process.env.APP_LOG_CONSOLE || [];
var logConsole = false; if(logLevel.length > 0) logConsole = true;
const logOutputLevel = [];

if (logLevel.length > 0) {
    logLevel.split("#").forEach(function (element) {
        logOutputLevel.push(element);
    });
}

try {
    var logParams = {
        consoleOutput: logConsole,
        consoleOutputLevel: logOutputLevel,

        dateTimeFormat: "YYYY-MM-DD HH:mm:ss.S",
        outputPath: logPath,
        fileNameDateFormat: "YYYY-MM-DD",
        fileNamePrefix: logFilePrefix
    };

    var log = require('noogger').init(logParams);

} catch (ex) {
    console.log("Somethig wrong with logger ...");
    console.log(ex);
}

module.exports = log;
