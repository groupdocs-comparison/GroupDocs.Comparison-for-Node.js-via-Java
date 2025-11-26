const { getOutputFilePath } = require('../utils');

/**
 * This example demonstrates how to compare two password-protected documents.
 * Each document requires its own password to be loaded and compared.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} source - Path to source protected document
 * @param {string} target - Path to target protected document
 * @param {string} sourcePassword - Password for source document
 * @param {string} targetPassword - Password for target document
 * @param {string} outputFolder - Output folder path
 * @param {string} resultFileName - Result file name
 */
async function compareDocumentsProtectedPath(
  groupdocs,
  source,
  target,
  sourcePassword,
  targetPassword,
  outputFolder,
  resultFileName,
) {
  const exampleName = 'compareDocumentsProtectedPath';

  console.log('\n================================================================================');
  console.log('Running Example: compareDocumentsProtectedPath');
  console.log('Description: Compare password-protected documents');
  console.log('================================================================================\n');

  try {
    // Create output directory and file path
    const outputFileName = getOutputFilePath(exampleName, resultFileName, outputFolder);

    console.log(`Source document: ${source}`);
    console.log(`Target document: ${target}`);
    console.log(`Output file: ${outputFileName}`);
    console.log('Note: Documents are password-protected\n');

    // Initialize comparer with source protected document and its password
    const comparer = new groupdocs.Comparer(
      source,
      new groupdocs.LoadOptions(sourcePassword),
    );

    // Add target protected document with its password
    comparer.add(
      target,
      new groupdocs.LoadOptions(targetPassword),
    );

    // Perform comparison and save result
    console.log('Comparing password-protected documents...');
    await comparer.compare(outputFileName);

    console.log('\n✓ Example completed successfully!');
    console.log(`  Output saved to: ${outputFileName}\n`);
  } catch (error) {
    console.error('\n✗ Error in compareDocumentsProtectedPath:', error.message);
    console.error(error);
    throw error;
  }
}

module.exports = compareDocumentsProtectedPath;
