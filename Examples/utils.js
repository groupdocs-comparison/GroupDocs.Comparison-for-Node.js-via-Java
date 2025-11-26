const path = require('path');
const fs = require('fs');
const Constants = require('./constants');

/**
 * Helper function to create output directory for an example
 * @param {string} exampleName - Name of the example
 * @param {string} outputFolder - Output folder path (defaults to Constants.outputPath)
 * @returns {string} Path to the example's output directory
 */
function createExampleOutputFolder(exampleName, outputFolder = null) {
  const baseOutputPath = outputFolder || Constants.outputPath;
  const outputDirectory = path.resolve(baseOutputPath);
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }
  const exampleOutputDir = path.join(outputDirectory, exampleName);
  if (!fs.existsSync(exampleOutputDir)) {
    fs.mkdirSync(exampleOutputDir);
  }
  return exampleOutputDir;
}

/**
 * Helper function to get output file path
 * @param {string} exampleName - Name of the example
 * @param {string} resultFileName - Result file name
 * @param {string} outputFolder - Output folder path (defaults to Constants.outputPath)
 * @returns {string} Full path to the output file
 */
function getOutputFilePath(exampleName, resultFileName, outputFolder = null) {
  const exampleOutputDir = createExampleOutputFolder(exampleName, outputFolder);
  return path.join(exampleOutputDir, resultFileName);
}

module.exports = {
  createExampleOutputFolder,
  getOutputFilePath,
};

