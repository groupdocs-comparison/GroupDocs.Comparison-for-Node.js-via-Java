const path = require('path');
const java = require('java');
const Constants = require('../constants');

// Import Java classes for stream operations
const InputStream = java.import('java.io.FileInputStream');

/**
 * This example demonstrates how to compare two documents using file streams.
 * Documents are loaded as Java InputStreams instead of file paths, which is useful
 * when working with files in memory or from non-file sources.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function compareDocumentsFromStream(groupdocs) {
    console.log('\n================================================================================');
    console.log('Running Example: compareDocumentsFromStream');
    console.log('Description: Compare documents using file streams');
    console.log('================================================================================\n');

    // Create output directory and file path
    const outputDirectory = Constants.createOutputFolder('compareDocumentsFromStream');
    const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);
  
    console.log(`Source document: ${Constants.SOURCE_WORD}`);
    console.log(`Target document: ${Constants.TARGET_WORD}`);
    console.log(`Output file: ${outputFileName}`);
    console.log('Using file streams for document loading...\n');

    // Initialize comparer with source document stream
    const comparer = new groupdocs.Comparer(new InputStream(Constants.SOURCE_WORD));

    // Add target document stream for comparison
    comparer.add(new InputStream(Constants.TARGET_WORD));
    
    // Perform comparison and save result
    console.log('Comparing documents...');
    comparer.compare(outputFileName);

    console.log(`\n✓ Example completed successfully!`);
    console.log(`  Output saved to: ${outputFileName}\n`);
}

module.exports = compareDocumentsFromStream;
