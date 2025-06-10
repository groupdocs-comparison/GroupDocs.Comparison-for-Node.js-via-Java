const path = require('path');
const Constants = require('../../../constants');
const java = require('java');
let InputStream = java.import('java.io.FileInputStream');
let OutputStream = java.import('java.io.FileOutputStream');

async function compareMultipleDocumentsStream(groupdocs) {
  try {
    // Prepare the output directory and file name
    const outputDirectory = Constants.createOutputFolder('compareMultipleDocumentsStream');
    const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);

    // Initialize the comparer with the source file
    const comparer = new groupdocs.comparison.Comparer(Constants.SOURCE_WORD);

    // Add the target files
    comparer.add(new InputStream(Constants.TARGET_WORD));
    comparer.add(new InputStream(Constants.TARGET2_WORD));
    comparer.add(new InputStream(Constants.TARGET3_WORD));

    // Perform the compare operation and save the result
    await comparer.compare(outputFileName);

    console.log(`\nDocuments compared successfully.\nCheck output in ${outputFileName}.`);

  } catch (error) {
    // Handle errors
    console.error('An error occurred during the document comparison:', error);
  }
}

module.exports = compareMultipleDocumentsStream;
