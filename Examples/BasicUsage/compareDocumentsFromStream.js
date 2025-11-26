const java = require('java');
const { getOutputFilePath } = require('../utils');

// Import Java classes for stream operations
const InputStream = java.import('java.io.FileInputStream');

/**
 * This example demonstrates how to compare two documents using file streams.
 * Documents are loaded as Java InputStreams instead of file paths, which is useful
 * when working with files in memory or from non-file sources.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} source - Path to source document
 * @param {string} target - Path to target document
 * @param {string} outputFolder - Output folder path
 * @param {string} resultFileName - Result file name
 */
async function compareDocumentsFromStream(groupdocs, source, target, outputFolder, resultFileName) {
  const exampleName = 'compareDocumentsFromStream';

  console.log('\n================================================================================');
  console.log('Running Example: compareDocumentsFromStream');
  console.log('Description: Compare documents using file streams');
  console.log('================================================================================\n');

  // Create output directory and file path
  const outputFileName = getOutputFilePath(exampleName, resultFileName, outputFolder);

  console.log(`Source document: ${source}`);
  console.log(`Target document: ${target}`);
  console.log(`Output file: ${outputFileName}`);
  console.log('Using file streams for document loading...\n');

  // Initialize comparer with source document stream
  const comparer = new groupdocs.Comparer(new InputStream(source));

  // Add target document stream for comparison
  comparer.add(new InputStream(target));

  // Perform comparison and save result
  console.log('Comparing documents...');
  comparer.compare(outputFileName);

  console.log('\n✓ Example completed successfully!');
  console.log(`  Output saved to: ${outputFileName}\n`);
}

module.exports = compareDocumentsFromStream;
