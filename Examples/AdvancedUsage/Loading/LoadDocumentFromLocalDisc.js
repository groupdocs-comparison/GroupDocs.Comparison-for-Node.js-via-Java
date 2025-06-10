const path = require('path');
const Constants = require('../../../constants');

/**
 * This example demonstrates comparing of two documents loaded by file path
 */
async function loadDocumentFromLocalDisc(groupdocs) {
    const outputDirectory = Constants.createOutputFolder('loadDocumentFromLocalDisc');
    const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);
  
    const comparer = new groupdocs.comparison.Comparer(Constants.SOURCE_WORD);

    comparer.add(Constants.TARGET_WORD);

    comparer.compare(outputFileName);
  
    console.log(`\nDocuments compared successfully.\nCheck output in ${outputFileName}.`);
  }

  module.exports = loadDocumentFromLocalDisc;