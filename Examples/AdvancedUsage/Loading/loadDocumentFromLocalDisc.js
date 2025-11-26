const { getOutputFilePath } = require('../../utils');

/**
 * This example demonstrates how to compare two documents loaded from local disk using file paths.
 * Documents are loaded directly from the file system and compared.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} source - Path to source document
 * @param {string} target - Path to target document
 * @param {string} outputFolder - Output folder path
 * @param {string} resultFileName - Result file name
 */
async function loadDocumentFromLocalDisc(groupdocs, source, target, outputFolder, resultFileName) {
  const exampleName = 'loadDocumentFromLocalDisc';

  console.log('\n================================================================================');
  console.log('Running Example: loadDocumentFromLocalDisc');
  console.log('Description: Compare documents loaded from local disk');
  console.log('================================================================================\n');

  // Create output directory and file path
  const outputFileName = getOutputFilePath(exampleName, resultFileName, outputFolder);

  console.log(`Source document: ${source}`);
  console.log(`Target document: ${target}`);
  console.log(`Output file: ${outputFileName}\n`);

  // Initialize comparer with source document from local disk
  const comparer = new groupdocs.Comparer(source);

  // Add target document from local disk for comparison
  comparer.add(target);

  // Perform comparison and save result
  console.log('Comparing documents...');
  comparer.compare(outputFileName);

  console.log('\n✓ Example completed successfully!');
  console.log(`  Output saved to: ${outputFileName}\n`);
}

module.exports = loadDocumentFromLocalDisc;
