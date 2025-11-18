const path = require('path');
const Constants = require('../constants');

/**
 * This example demonstrates how to compare two documents of the same file type using file paths.
 * The source and target documents are loaded from disk and compared, with the result saved to an output file.
 * 
 * For more details about Document Comparison, please check:
 * https://docs.groupdocs.com/comparison
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function compareDocumentsFromPath(groupdocs) {
    console.log('\n================================================================================');
    console.log('Running Example: compareDocumentsFromPath');
    console.log('Description: Compare two documents using file paths');
    console.log('================================================================================\n');

    // Create output directory and file path
    const outputDirectory = Constants.createOutputFolder('compareDocumentsFromPath');
    const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);
    
    console.log(`Source document: ${Constants.SOURCE_WORD}`);
    console.log(`Target document: ${Constants.TARGET_WORD}`);
    console.log(`Output file: ${outputFileName}\n`);

    // Initialize comparer with source document
    const comparer = new groupdocs.comparison.Comparer(Constants.SOURCE_WORD);

    // Add target document for comparison
    comparer.add(Constants.TARGET_WORD);
    
    // Perform comparison and save result
    console.log('Comparing documents...');
    comparer.compare(outputFileName);
  
    console.log(`\n✓ Example completed successfully!`);
    console.log(`  Output saved to: ${outputFileName}\n`);
}
  
module.exports = compareDocumentsFromPath;