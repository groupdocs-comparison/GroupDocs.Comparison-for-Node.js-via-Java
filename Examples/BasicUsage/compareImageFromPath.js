const { getOutputFilePath } = require('../utils');

/**
 * This example demonstrates how to compare two image files.
 * The comparison is performed without generating a summary page, showing only the differences.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} source - Path to source image file
 * @param {string} target - Path to target image file
 * @param {string} outputFolder - Output folder path
 * @param {string} resultFileName - Result file name
 */
async function compareImageFromPath(groupdocs, source, target, outputFolder, resultFileName) {
  const exampleName = 'compareImageFromPath';

  console.log('\n================================================================================');
  console.log('Running Example: compareImageFromPath');
  console.log('Description: Compare two image files');
  console.log('================================================================================\n');

  try {
    // Create output directory and file path
    const outputFileName = getOutputFilePath(exampleName, resultFileName, outputFolder);

    console.log(`Source image: ${source}`);
    console.log(`Target image: ${target}`);
    console.log(`Output file: ${outputFileName}`);
    console.log('Comparison options: Summary page generation disabled\n');

    // Initialize comparer with source image file
    const comparer = new groupdocs.Comparer(source);

    // Configure comparison options - disable summary page generation
    const options = new groupdocs.CompareOptions();
    options.setGenerateSummaryPage(false);

    // Add target image for comparison
    comparer.add(target);

    // Perform comparison and save result
    console.log('Comparing images...');
    await comparer.compare(outputFileName, options);

    console.log('\n✓ Example completed successfully!');
    console.log(`  Output saved to: ${outputFileName}\n`);
  } catch (error) {
    console.error('\n✗ Error in compareImageFromPath:', error.message);
    console.error(error);
    throw error;
  }
}

module.exports = compareImageFromPath;
