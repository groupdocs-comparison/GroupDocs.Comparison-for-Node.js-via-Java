const java = require('java');
const { getOutputFilePath } = require('../utils');

// Import Java classes for stream operations
const InputStream = java.import('java.io.FileInputStream');

/**
 * This example demonstrates how to compare two Excel spreadsheet files (.xlsx) using file streams.
 * Documents are loaded as Java InputStreams, which is useful when working with files in memory
 * or from non-file sources.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} source - Path to source Excel file
 * @param {string} target - Path to target Excel file
 * @param {string} outputFolder - Output folder path
 * @param {string} resultFileName - Result file name
 */
async function compareCellsFromStream(groupdocs, source, target, outputFolder, resultFileName) {
  const exampleName = 'compareCellsFromStream';

  console.log('\n================================================================================');
  console.log('Running Example: compareCellsFromStream');
  console.log('Description: Compare Excel spreadsheets using file streams');
  console.log('================================================================================\n');

  try {
    // Create output directory and file path
    const outputFileName = getOutputFilePath(exampleName, resultFileName, outputFolder);

    console.log(`Source Excel file: ${source}`);
    console.log(`Target Excel file: ${target}`);
    console.log(`Output file: ${outputFileName}`);
    console.log('Using file streams for document loading...\n');

    // Initialize comparer with source Excel file stream
    const comparer = new groupdocs.Comparer(new InputStream(source));

    // Add target Excel file stream for comparison
    comparer.add(new InputStream(target));

    // Perform comparison and save result
    console.log('Comparing Excel spreadsheets...');
    await comparer.compare(outputFileName);

    console.log('\n✓ Example completed successfully!');
    console.log(`  Output saved to: ${outputFileName}\n`);
  } catch (error) {
    console.error('\n✗ Error in compareCellsFromStream:', error.message);
    console.error(error);
    throw error;
  }
}

module.exports = compareCellsFromStream;
