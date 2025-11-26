const java = require('java');
const { getOutputFilePath } = require('../../utils');

// Import Java classes for stream operations
const InputStream = java.import('java.io.FileInputStream');

/**
 * This example demonstrates how to compare multiple password-protected documents using file streams.
 * Each document requires its own password to be loaded and compared.
 * Documents are loaded as Java InputStreams, which is useful when working with files in memory.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} source - Path to source protected document
 * @param {string[]} targets - Array of paths to target protected documents
 * @param {string} sourcePassword - Password for source document
 * @param {string} targetPassword - Password for target documents
 * @param {string} outputFolder - Output folder path
 * @param {string} resultFileName - Result file name
 */
async function compareMultipleDocumentsProtectedStream(
  groupdocs,
  source,
  targets,
  sourcePassword,
  targetPassword,
  outputFolder,
  resultFileName,
) {
  const exampleName = 'compareMultipleDocumentsProtectedStream';

  console.log('\n================================================================================');
  console.log('Running Example: compareMultipleDocumentsProtectedStream');
  console.log('Description: Compare multiple password-protected documents using streams');
  console.log('================================================================================\n');

  try {
    // Create output directory and file path
    const outputFileName = getOutputFilePath(exampleName, resultFileName, outputFolder);

    console.log(`Source document: ${source}`);
    console.log(`Target documents: ${targets.length} file(s)`);
    targets.forEach((file, index) => console.log(`  ${index + 1}. ${file}`));
    console.log(`Output file: ${outputFileName}\n`);

    // Initialize comparer with source protected document stream and its password
    const comparer = new groupdocs.Comparer(
      new InputStream(source),
      new groupdocs.LoadOptions(sourcePassword),
    );

    // Add multiple target protected document streams with their passwords
    console.log('Adding target documents...');
    targets.forEach((targetPath) => {
      comparer.add(new InputStream(targetPath), new groupdocs.LoadOptions(targetPassword));
    });

    // Perform comparison and save result
    console.log('Comparing multiple password-protected documents...');
    await comparer.compare(outputFileName);

    console.log('\n✓ Example completed successfully!');
    console.log(`  Output saved to: ${outputFileName}\n`);
  } catch (error) {
    console.error('\n✗ Error in compareMultipleDocumentsProtectedStream:', error.message);
    console.error(error);
    throw error;
  }
}

module.exports = compareMultipleDocumentsProtectedStream;
