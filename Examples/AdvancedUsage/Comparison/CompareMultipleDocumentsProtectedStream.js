const path = require('path');
const Constants = require('../../../constants');
const java = require('java');
let InputStream = java.import('java.io.FileInputStream');
let OutputStream = java.import('java.io.FileOutputStream');

async function compareMultipleDocumentsProtectedStream(groupdocs) {
  try {
    // Prepare the output directory and file name
    const outputDirectory = Constants.createOutputFolder('compareMultipleDocumentsProtectedStream');
    const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);

    // Initialize the comparer with the source file and load options
    const comparer = new groupdocs.comparison.Comparer(new InputStream(Constants.SOURCE_WORD_PROTECTED), new groupdocs.comparison.LoadOptions("1234"));

    // Add the target file and load options for comparison
    comparer.add(new InputStream(Constants.TARGET_WORD_PROTECTED), new groupdocs.comparison.LoadOptions("5678"));
    comparer.add(new InputStream(Constants.TARGET2_WORD_PROTECTED), new groupdocs.comparison.LoadOptions("5678"));
    comparer.add(new InputStream(Constants.TARGET3_WORD_PROTECTED), new groupdocs.comparison.LoadOptions("5678"));

    // Perform the compare operation and save the result
    await comparer.compare(outputFileName);

    console.log(`\nDocuments compared successfully.\nCheck output in ${outputFileName}.`);

  } catch (error) {
    // Handle errors
    console.error('An error occurred during the document comparison:', error);
  }
}

module.exports = compareMultipleDocumentsProtectedStream;