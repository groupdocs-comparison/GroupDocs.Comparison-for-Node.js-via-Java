const path = require('path');
const Constants = require('../../../constants');
const java = require("java");
let InputStream = java.import('java.io.FileInputStream');
let OutputStream = java.import('java.io.FileOutputStream');

/**
 * This example demonstrates comparing of two documents loaded by file stream
 */
async function loadDocumentFromStream(groupdocs) {
    const outputDirectory = Constants.getOutputDirectoryPath();
    const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);
  
    const comparer = new groupdocs.comparison.Comparer(new InputStream(Constants.SOURCE_WORD));

    comparer.add(new InputStream(Constants.TARGET_WORD));

    comparer.compare(outputFileName);
  
    console.log(`\nDocuments compared successfully.\nCheck output in ${outputFileName}.`);
  }

  module.exports = loadDocumentFromStream;