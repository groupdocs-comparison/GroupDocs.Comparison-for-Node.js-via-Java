/**
 * This example demonstrates comparing of two images without SummaryPage.
 */
const path = require('path');
const Constants = require('../../constants');

async function compareImageFromPath(groupdocs) {
  try {
    // Initialize comparer with source image file
    const comparer = new groupdocs.comparison.Comparer(Constants.SOURCE_IMAGE);

    // Prepare the output file path
    const outputDirectory = Constants.createOutputFolder('compareImageFromPath');
    const outputFileName = path.join(outputDirectory, Constants.RESULT_IMAGE);

    // Set comparison options
    const options = new groupdocs.comparison.CompareOptions();
    options.setGenerateSummaryPage(false);

    // Add the target image for comparison
    comparer.add(Constants.TARGET_IMAGE);

    // Compare the images and save the result
    await comparer.compare(outputFileName, options);

    // Log the success message with the output file path
    console.log(`\nImages compared successfully.\nCheck output in ${outputFileName}.`);
  } catch (error) {
    // Error handling
    console.error('An error occurred during the image comparison:', error);
  }
}

module.exports = compareImageFromPath;
