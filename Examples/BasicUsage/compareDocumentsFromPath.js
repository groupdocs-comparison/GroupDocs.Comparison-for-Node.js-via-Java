const { getOutputFilePath } = require('../utils');

/**
 * This example demonstrates how to compare two documents of the same file type using file paths.
 * The source and target documents are loaded from disk and compared, with the result saved to an output file.
 *
 * For more details about Document Comparison, please check:
 * https://docs.groupdocs.com/comparison
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} source - Path to source document
 * @param {string} target - Path to target document
 * @param {string} outputFolder - Output folder path
 * @param {string} resultFileName - Result file name
 */
async function compareDocumentsFromPath(groupdocs, source, target, outputFolder, resultFileName) {
  const exampleName = 'compareDocumentsFromPath';

  console.log('\n================================================================================');
  console.log('Running Example: compareDocumentsFromPath');
  console.log('Description: Compare two documents using file paths');
  console.log('================================================================================\n');

  // Create output directory and file path
  const outputFileName = getOutputFilePath(exampleName, resultFileName, outputFolder);

  console.log(`Source document: ${source}`);
  console.log(`Target document: ${target}`);
  console.log(`Output file: ${outputFileName}\n`);

  // Initialize comparer with source document
  const comparer = new groupdocs.Comparer(source);

  // Add target document for comparison
  comparer.add(target);

  // Perform comparison and save result
  console.log('Comparing documents...');
  comparer.compare(outputFileName);

  console.log('\n✓ Example completed successfully!');
  console.log(`  Output saved to: ${outputFileName}\n`);
}

module.exports = compareDocumentsFromPath;
