const { getOutputFilePath } = require('../utils');

/**
 * This example demonstrates how to compare multiple PDF documents at once.
 * The source document is compared against multiple target documents, and all differences
 * are consolidated into a single result document.
 *
 * For more details about comparing PDF documents, please check the relevant documentation.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} source - Path to source PDF document
 * @param {string[]} targets - Array of paths to target PDF documents
 * @param {string} outputFolder - Output folder path
 * @param {string} resultFileName - Result file name
 */
async function compareMultiplePdfDocuments(groupdocs, source, targets, outputFolder, resultFileName) {
  const exampleName = 'compareMultiplePdfDocuments';

  console.log('\n================================================================================');
  console.log('Running Example: compareMultiplePdfDocuments');
  console.log('Description: Compare multiple PDF documents at once');
  console.log('================================================================================\n');

  // Create output directory and file path
  const outputFileName = getOutputFilePath(exampleName, resultFileName, outputFolder);

  console.log(`Source PDF: ${source}`);
  console.log(`Target PDFs: ${targets.length} file(s)`);
  targets.forEach((file, index) => console.log(`  ${index + 1}. ${file}`));
  console.log(`Output file: ${outputFileName}\n`);

  // Initialize comparer with source PDF document
  const comparer = new groupdocs.Comparer(source);

  // Add multiple target PDF documents for comparison
  console.log('Adding target PDF documents...');
  targets.forEach((targetFilePath) => {
    comparer.add(targetFilePath);
  });

  // Perform comparison and save result
  console.log('Comparing multiple PDF documents...');
  await comparer.compare(outputFileName);

  console.log('\n✓ Example completed successfully!');
  console.log(`  Output saved to: ${outputFileName}\n`);
}

module.exports = compareMultiplePdfDocuments;
