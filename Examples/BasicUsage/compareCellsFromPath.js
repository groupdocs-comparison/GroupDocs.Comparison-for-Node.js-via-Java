
/**
* This example demonstrates comparing of two cells files
*/
const path = require('path');
const Constants = require('../../constants')

async function compareCellsFromPath(groupdocs) {
  try {
    // Initialize the comparer object with the source file path
    const comparer = new groupdocs.comparison.Comparer(Constants.SOURCE_CELLS);

    // Prepare the output file path
    const outputDirectory = Constants.createOutputFolder('compareCellsFromPath');
    const outputFileName = path.join(outputDirectory, Constants.RESULT_CELLS);

    // Add the target file for comparison and perform the compare operation
    comparer.add(Constants.TARGET_CELLS);
    await comparer.compare(outputFileName);

    // Log the success message with the output file path
    console.log(`\nDocuments compared successfully.\nCheck output in ${outputFileName}.`);
  } catch (error) {
    // Handle any errors that might occur during the comparison process
    console.error('An error occurred during the document comparison:', error);
  }
}

module.exports = compareCellsFromPath;

