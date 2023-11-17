/**
 * This example demonstrates comparing of two Excel files from streams.
 */
const fs = require('fs');
const path = require('path');
const Constants = require('../../constants');
const java = require('java');
let InputStream = java.import('java.io.FileInputStream');
let OutputStream = java.import('java.io.FileOutputStream');

async function compareCellsFromStream(groupdocs) {
  try {
    // Initialize the comparer object with the source file path
    const comparer = new groupdocs.comparison.Comparer(new InputStream(Constants.SOURCE_CELLS));

    // Prepare the output file path
    const outputDirectory = await Constants.getOutputDirectoryPath();
    const outputFileName = path.join(outputDirectory, Constants.RESULT_CELLS);

    // Add the target file for comparison and perform the compare operation
    comparer.add(new InputStream(Constants.TARGET_CELLS));
    await comparer.compare(outputFileName);

    // Log the success message with the output file path
    console.log(`\nDocuments compared successfully.\nCheck output in ${outputFileName}.`);
  } catch (error) {
    // Handle any errors that might occur during the comparison process
    console.error('An error occurred during the document comparison:', error);
  }
}

module.exports = compareCellsFromStream;
