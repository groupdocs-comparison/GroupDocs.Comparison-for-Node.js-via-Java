const path = require('path');
const java = require('java');
const Constants = require('../constants');

// Import Java classes for stream operations
const InputStream = java.import('java.io.FileInputStream');

/**
 * This example demonstrates how to compare two password-protected documents using file streams.
 * Each document requires its own password to be loaded and compared.
 * Documents are loaded as Java InputStreams, which is useful when working with files in memory.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function compareDocumentsProtectedStream(groupdocs) {
    console.log('\n================================================================================');
    console.log('Running Example: compareDocumentsProtectedStream');
    console.log('Description: Compare password-protected documents using streams');
    console.log('================================================================================\n');

    try {
        // Create output directory and file path
        const outputDirectory = Constants.createOutputFolder('compareDocumentsProtectedStream');
        const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);

        console.log(`Source document: ${Constants.SOURCE_WORD_PROTECTED}`);
        console.log(`Target document: ${Constants.TARGET_WORD_PROTECTED}`);
        console.log(`Output file: ${outputFileName}`);
        console.log('Note: Documents are password-protected and loaded from streams\n');

        // Initialize comparer with source protected document stream and its password
        const comparer = new groupdocs.Comparer(
            new InputStream(Constants.SOURCE_WORD_PROTECTED), 
            new groupdocs.LoadOptions("1234")
        );

        // Add target protected document stream with its password
        comparer.add(
            new InputStream(Constants.TARGET_WORD_PROTECTED), 
            new groupdocs.LoadOptions("5678")
        );

        // Perform comparison and save result
        console.log('Comparing password-protected documents...');
        await comparer.compare(outputFileName);

        console.log(`\n✓ Example completed successfully!`);
        console.log(`  Output saved to: ${outputFileName}\n`);
    } catch (error) {
        console.error(`\n✗ Error in compareDocumentsProtectedStream:`, error.message);
        console.error(error);
        throw error;
    }
}

module.exports = compareDocumentsProtectedStream;
