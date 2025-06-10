// Required modules
const path = require('path');
const Constants = require('../../constants')

// This function compares two password-protected documents
async function compareDocumentsProtectedPath(groupdocs) {
  try {
    // Prepare the output directory and file name
    const outputDirectory = Constants.createOutputFolder('compareDocumentsProtectedPath');
    const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);

    // Initialize the comparer with the source file and load options
    const comparer = new groupdocs.comparison.Comparer(Constants.SOURCE_WORD_PROTECTED, new groupdocs.comparison.LoadOptions("1234"));

    // Add the target file and load options for comparison
    comparer.add(Constants.TARGET_WORD_PROTECTED, new groupdocs.comparison.LoadOptions("5678"));

    // Perform the compare operation and save the result
    await comparer.compare(outputFileName);

    console.log(`\nDocuments compared successfully.\nCheck output in ${outputFileName}.`);

  } catch (error) {
    // Handle errors
    console.error('An error occurred during the document comparison:', error);
  }
}

module.exports = compareDocumentsProtectedPath;
