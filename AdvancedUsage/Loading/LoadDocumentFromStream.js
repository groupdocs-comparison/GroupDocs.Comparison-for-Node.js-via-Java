const path = require('path');
const java = require('java');
const Constants = require('../../constants');

// Import Java classes for stream operations
const InputStream = java.import('java.io.FileInputStream');

/**
 * This example demonstrates how to compare two documents loaded from file streams.
 * Documents are loaded as Java InputStreams, which is useful when working with files in memory
 * or from non-file sources such as network streams or databases.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function loadDocumentFromStream(groupdocs) {
    // Create output directory and file path
    const outputDirectory = Constants.createOutputFolder('loadDocumentFromStream');
    const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);
  
    // Initialize comparer with source document stream
    const comparer = new groupdocs.comparison.Comparer(new InputStream(Constants.SOURCE_WORD));

    // Add target document stream for comparison
    comparer.add(new InputStream(Constants.TARGET_WORD));

    // Perform comparison and save result
    comparer.compare(outputFileName);
  
    console.log(`\nDocuments compared successfully.\nCheck output in ${outputFileName}.`);
}

module.exports = loadDocumentFromStream;