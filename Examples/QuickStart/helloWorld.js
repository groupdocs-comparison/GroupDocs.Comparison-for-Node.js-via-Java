const { getOutputFilePath } = require('../utils');

/**
 * This example demonstrates a simple Hello World example to compare documents.
 * It compares two Word documents and saves the result to an output file.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} source - Path to source document
 * @param {string} target - Path to target document
 * @param {string} outputFolder - Output folder path
 * @param {string} resultFileName - Result file name
 */
async function helloWorld(groupdocs, source, target, outputFolder, resultFileName) {
  const exampleName = 'helloWorld';

  console.log('\n================================================================================');
  console.log('Running Example: helloWorld');
  console.log('Description: Basic document comparison example');
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

module.exports = helloWorld;
