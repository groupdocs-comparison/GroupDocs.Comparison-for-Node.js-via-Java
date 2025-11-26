const java = require('java');
const { getOutputFilePath } = require('../../utils');

// Import Java classes for stream operations
const InputStream = java.import('java.io.FileInputStream');

/**
 * This example demonstrates how to compare multiple documents using file streams.
 * The source document is loaded from a file path, while target documents are loaded as streams.
 * All differences are consolidated into a single result document.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} source - Path to source document
 * @param {string[]} targets - Array of paths to target documents
 * @param {string} outputFolder - Output folder path
 * @param {string} resultFileName - Result file name
 */
async function compareMultipleDocumentsStream(groupdocs, source, targets, outputFolder, resultFileName) {
  const exampleName = 'compareMultipleDocumentsStream';

  console.log('\n================================================================================');
  console.log('Running Example: compareMultipleDocumentsStream');
  console.log('Description: Compare multiple documents using file streams');
  console.log('================================================================================\n');

  try {
    // Create output directory and file path
    const outputFileName = getOutputFilePath(exampleName, resultFileName, outputFolder);

    console.log(`Source document: ${source}`);
    console.log(`Target documents: ${targets.length} file(s)`);
    targets.forEach((file, index) => console.log(`  ${index + 1}. ${file}`));
    console.log(`Output file: ${outputFileName}\n`);

    // Initialize comparer with source document
    const comparer = new groupdocs.Comparer(source);

    // Add target documents as streams for comparison
    console.log('Adding target documents...');
    targets.forEach((targetPath) => {
      comparer.add(new InputStream(targetPath));
    });

    // Perform comparison and save result
    console.log('Comparing multiple documents...');
    await comparer.compare(outputFileName);

    console.log('\n✓ Example completed successfully!');
    console.log(`  Output saved to: ${outputFileName}\n`);
  } catch (error) {
    console.error('\n✗ Error in compareMultipleDocumentsStream:', error.message);
    console.error(error);
    throw error;
  }
}

module.exports = compareMultipleDocumentsStream;
