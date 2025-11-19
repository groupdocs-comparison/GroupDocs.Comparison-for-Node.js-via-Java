const path = require('path');
const Constants = require('../constants');

/**
 * This example demonstrates a simple Hello World example to compare documents.
 * It compares two Word documents and saves the result to an output file.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function helloWorld(groupdocs) {
    console.log('\n================================================================================');
    console.log('Running Example: helloWorld');
    console.log('Description: Basic document comparison example');
    console.log('================================================================================\n');

    // Create output directory and file path
    const outputDirectory = Constants.createOutputFolder('helloWorld');
    const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);

    console.log(`Source document: ${Constants.SOURCE_WORD}`);
    console.log(`Target document: ${Constants.TARGET_WORD}`);
    console.log(`Output file: ${outputFileName}\n`);

    // Initialize comparer with source document
    const comparer = new groupdocs.Comparer(Constants.SOURCE_WORD);

    // Add target document for comparison
    comparer.add(Constants.TARGET_WORD);

    // Perform comparison and save result
    console.log('Comparing documents...');
    comparer.compare(outputFileName);
  
    console.log(`\n✓ Example completed successfully!`);
    console.log(`  Output saved to: ${outputFileName}\n`);
}

module.exports = helloWorld;