const fs = require('fs')
const path = require('path');
const Constants = require('../constants');
const java = require("java");
const Color = java.import('java.awt.Color');
/**
 * This example demonstrates simple Hello World example to compare documents
 */
async function helloWorld(groupdocs) {
    const outputDirectory = Constants.createOutputFolder('helloWorld');
    const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);

    const comparer = new groupdocs.comparison.Comparer(Constants.SOURCE_WORD);

    // Ensure the output directory exists
    if (!fs.existsSync(outputDirectory)) {
      fs.mkdirSync(outputDirectory, { recursive: true });
    }

    // Adding document to compare
    comparer.add(Constants.TARGET_WORD);

    // Compare the result
    comparer.compare(outputFileName);
  
    console.log(`\nSource document compared successfully.\nCheck output in ${outputFileName}.`);
  }

  module.exports = helloWorld;