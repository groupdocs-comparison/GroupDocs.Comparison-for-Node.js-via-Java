const path = require('path');
const java = require('java');
const Constants = require('../../constants');

// Import Java classes for stream operations
const InputStream = java.import('java.io.FileInputStream');

/**
 * This example demonstrates how to compare multiple documents using file streams.
 * The source document is loaded from a file path, while target documents are loaded as streams.
 * All differences are consolidated into a single result document.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function compareMultipleDocumentsStream(groupdocs) {
    try {
        // Create output directory and file path
        const outputDirectory = Constants.createOutputFolder('compareMultipleDocumentsStream');
        const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);

        // Initialize comparer with source document
        const comparer = new groupdocs.Comparer(Constants.SOURCE_WORD);

        // Add target documents as streams for comparison
        comparer.add(new InputStream(Constants.TARGET_WORD));
        comparer.add(new InputStream(Constants.TARGET2_WORD));
        comparer.add(new InputStream(Constants.TARGET3_WORD));

        // Perform comparison and save result
        await comparer.compare(outputFileName);

        console.log(`\nDocuments compared successfully.\nCheck output in ${outputFileName}.`);
    } catch (error) {
        console.error('An error occurred during the document comparison:', error);
    }
}

module.exports = compareMultipleDocumentsStream;
