const java = require('java');
const { getOutputFilePath } = require('../utils');

// Import Java classes for stream operations
const InputStream = java.import('java.io.FileInputStream');

/**
 * This example demonstrates how to compare two image files using file streams.
 * The comparison is performed without generating a summary page, showing only the differences.
 * Documents are loaded as Java InputStreams, which is useful when working with files in memory.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} source - Path to source image file
 * @param {string} target - Path to target image file
 * @param {string} outputFolder - Output folder path
 * @param {string} resultFileName - Result file name
 */
async function compareImageFromStream(groupdocs, source, target, outputFolder, resultFileName) {
  const exampleName = 'compareImageFromStream';

  console.log('\n================================================================================');
  console.log('Running Example: compareImageFromStream');
  console.log('Description: Compare image files using file streams');
  console.log('================================================================================\n');

  try {
    // Create output directory and file path
    const outputFileName = getOutputFilePath(exampleName, resultFileName, outputFolder);

    console.log(`Source image: ${source}`);
    console.log(`Target image: ${target}`);
    console.log(`Output file: ${outputFileName}`);
    console.log('Using file streams with summary page generation disabled...\n');

    // Initialize comparer with source image file stream
    const comparer = new groupdocs.Comparer(new InputStream(source));

    // Configure comparison options - disable summary page generation
    const options = new groupdocs.CompareOptions();
    options.setGenerateSummaryPage(false);

    // Add target image stream for comparison
    comparer.add(new InputStream(target));

    // Perform comparison and save result
    console.log('Comparing images...');
    await comparer.compare(outputFileName, options);

    console.log('\n✓ Example completed successfully!');
    console.log(`  Output saved to: ${outputFileName}\n`);
  } catch (error) {
    console.error('\n✗ Error in compareImageFromStream:', error.message);
    console.error(error);
    throw error;
  }
}

module.exports = compareImageFromStream;
