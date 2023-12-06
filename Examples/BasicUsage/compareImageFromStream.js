const path = require('path');
const Constants = require('../../constants');
const java = require('java');
let InputStream = java.import('java.io.FileInputStream');
let OutputStream = java.import('java.io.FileOutputStream');

async function compareImageFromStream(groupdocs) {
  
  try {
    // Initialize comparer with source image file
    const comparer = new groupdocs.comparison.Comparer(new InputStream(Constants.SOURCE_IMAGE));

    // Prepare the output file path
    const outputDirectory = await Constants.getOutputDirectoryPath();
    const outputFileName = path.join(outputDirectory, Constants.RESULT_IMAGE);

    // Set comparison options
    const options = new groupdocs.comparison.CompareOptions();
    options.setGenerateSummaryPage(false);

    // Add the target image for comparison
    comparer.add(new InputStream(Constants.TARGET_IMAGE), options);

    // Compare the images and save the result
    await comparer.compare(outputFileName, options);

    // Log the success message with the output file path
    console.log(`\nImages compared successfully.\nCheck output in ${outputFileName}.`);
  } catch (error) {
    // Error handling
    console.error('An error occurred during the image comparison:', error);
  }
}

module.exports = compareImageFromStream;
