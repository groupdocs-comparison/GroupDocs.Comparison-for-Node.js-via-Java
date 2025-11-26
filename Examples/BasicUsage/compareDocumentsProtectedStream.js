const java = require('java');
const { getOutputFilePath } = require('../utils');

// Import Java classes for stream operations
const InputStream = java.import('java.io.FileInputStream');

/**
 * This example demonstrates how to compare two password-protected documents using file streams.
 * Each document requires its own password to be loaded and compared.
 * Documents are loaded as Java InputStreams, which is useful when working with files in memory.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} source - Path to source protected document
 * @param {string} target - Path to target protected document
 * @param {string} sourcePassword - Password for source document
 * @param {string} targetPassword - Password for target document
 * @param {string} outputFolder - Output folder path
 * @param {string} resultFileName - Result file name
 */
async function compareDocumentsProtectedStream(
  groupdocs,
  source,
  target,
  sourcePassword,
  targetPassword,
  outputFolder,
  resultFileName,
) {
  const exampleName = 'compareDocumentsProtectedStream';

  console.log('\n================================================================================');
  console.log('Running Example: compareDocumentsProtectedStream');
  console.log('Description: Compare password-protected documents using streams');
  console.log('================================================================================\n');

  try {
    // Create output directory and file path
    const outputFileName = getOutputFilePath(exampleName, resultFileName, outputFolder);

    console.log(`Source document: ${source}`);
    console.log(`Target document: ${target}`);
    console.log(`Output file: ${outputFileName}`);
    console.log('Note: Documents are password-protected and loaded from streams\n');

    // Initialize comparer with source protected document stream and its password
    const comparer = new groupdocs.Comparer(
      new InputStream(source),
      new groupdocs.LoadOptions(sourcePassword),
    );

    // Add target protected document stream with its password
    comparer.add(
      new InputStream(target),
      new groupdocs.LoadOptions(targetPassword),
    );

    // Perform comparison and save result
    console.log('Comparing password-protected documents...');
    await comparer.compare(outputFileName);

    console.log('\n✓ Example completed successfully!');
    console.log(`  Output saved to: ${outputFileName}\n`);
  } catch (error) {
    console.error('\n✗ Error in compareDocumentsProtectedStream:', error.message);
    console.error(error);
    throw error;
  }
}

module.exports = compareDocumentsProtectedStream;
