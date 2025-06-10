const path = require('path');
const Constants = require('../../../constants');
const java = require('java');
const Color = java.import('java.awt.Color');

async function compareMultipleDocumentsSettingsPath(groupdocs) {
  try {
    // Prepare the output directory and file name
    const outputDirectory = Constants.createOutputFolder('compareMultipleDocumentsSettingsPath');
    const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);

    // Initialize the comparer with the source file
    const comparer = new groupdocs.comparison.Comparer(Constants.SOURCE_WORD);

    // Add the target files
    comparer.add(Constants.TARGET_WORD);
    comparer.add(Constants.TARGET2_WORD);
    comparer.add(Constants.TARGET3_WORD);

    const compareOptions = new groupdocs.comparison.CompareOptions();
    const styleSettings = new groupdocs.comparison.StyleSettings();
    styleSettings.setFontColor(Color.YELLOW);
    compareOptions.setInsertedItemStyle(styleSettings);

    // Perform the compare operation and save the result
    await comparer.compare(outputFileName, compareOptions);

    console.log(`\nDocuments compared successfully.\nCheck output in ${outputFileName}.`);

  } catch (error) {
    // Handle errors
    console.error('An error occurred during the document comparison:', error);
  }
}

module.exports = compareMultipleDocumentsSettingsPath;
