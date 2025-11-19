const path = require('path');
const java = require('java');
const Constants = require('../../constants');

// Import Java classes for stream operations
const InputStream = java.import('java.io.FileInputStream');

/**
 * This example demonstrates how to compare multiple password-protected documents using file streams.
 * Each document requires its own password to be loaded and compared.
 * Documents are loaded as Java InputStreams, which is useful when working with files in memory.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function compareMultipleDocumentsProtectedStream(groupdocs) {
    try {
        // Create output directory and file path
        const outputDirectory = Constants.createOutputFolder('compareMultipleDocumentsProtectedStream');
        const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);

        // Initialize comparer with source protected document stream and its password
        const comparer = new groupdocs.Comparer(
            new InputStream(Constants.SOURCE_WORD_PROTECTED), 
            new groupdocs.LoadOptions("1234")
        );

        // Add multiple target protected document streams with their passwords
        comparer.add(new InputStream(Constants.TARGET_WORD_PROTECTED), new groupdocs.LoadOptions("5678"));
        comparer.add(new InputStream(Constants.TARGET2_WORD_PROTECTED), new groupdocs.LoadOptions("5678"));
        comparer.add(new InputStream(Constants.TARGET3_WORD_PROTECTED), new groupdocs.LoadOptions("5678"));

        // Perform comparison and save result
        await comparer.compare(outputFileName);

        console.log(`\nDocuments compared successfully.\nCheck output in ${outputFileName}.`);
    } catch (error) {
        console.error('An error occurred during the document comparison:', error);
    }
}

module.exports = compareMultipleDocumentsProtectedStream;
