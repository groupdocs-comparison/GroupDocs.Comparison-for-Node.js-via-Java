const path = require('path');
const Constants = require('../../../constants');
const java = require('java');
const Color = java.import('java.awt.Color');
let InputStream = java.import('java.io.FileInputStream');
let OutputStream = java.import('java.io.FileOutputStream');

async function compareDocumentsSettingsStream(groupdocs) {
  try {
    // Initialize the comparer object with the source file path
    const comparer = new groupdocs.comparison.Comparer(new InputStream(Constants.SOURCE_WORD));

    // Prepare the output file path
    const outputDirectory = await Constants.getOutputDirectoryPath();
    const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);

    // Add the target file for comparison and perform the compare operation
    comparer.add(new InputStream(Constants.TARGET_WORD));

    const compareOptions = new groupdocs.comparison.CompareOptions();
    const styleSettings = new groupdocs.comparison.StyleSettings();
    styleSettings.setUnderline(true);
    styleSettings.setFontColor(Color.GREEN);
    styleSettings.setHighlightColor(Color.RED);
    compareOptions.setInsertedItemStyle(styleSettings);

    await comparer.compare(outputFileName, compareOptions);

    // Log the success message with the output file path
    console.log(`\nDocuments compared successfully.\nCheck output in ${outputFileName}.`);
  } catch (error) {
    // Handle any errors that might occur during the comparison process
    console.error('An error occurred during the document comparison:', error);
  }
}

module.exports = compareDocumentsSettingsStream;
