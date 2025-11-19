const path = require('path');
const Constants = require('../constants');

/**
 * This example demonstrates how to compare two password-protected documents.
 * Each document requires its own password to be loaded and compared.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function compareDocumentsProtectedPath(groupdocs) {
    console.log('\n================================================================================');
    console.log('Running Example: compareDocumentsProtectedPath');
    console.log('Description: Compare password-protected documents');
    console.log('================================================================================\n');

    try {
        // Create output directory and file path
        const outputDirectory = Constants.createOutputFolder('compareDocumentsProtectedPath');
        const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);

        console.log(`Source document: ${Constants.SOURCE_WORD_PROTECTED}`);
        console.log(`Target document: ${Constants.TARGET_WORD_PROTECTED}`);
        console.log(`Output file: ${outputFileName}`);
        console.log('Note: Documents are password-protected\n');

        // Initialize comparer with source protected document and its password
        const comparer = new groupdocs.Comparer(
            Constants.SOURCE_WORD_PROTECTED, 
            new groupdocs.LoadOptions("1234")
        );

        // Add target protected document with its password
        comparer.add(
            Constants.TARGET_WORD_PROTECTED, 
            new groupdocs.LoadOptions("5678")
        );

        // Perform comparison and save result
        console.log('Comparing password-protected documents...');
        await comparer.compare(outputFileName);

        console.log(`\n✓ Example completed successfully!`);
        console.log(`  Output saved to: ${outputFileName}\n`);
    } catch (error) {
        console.error(`\n✗ Error in compareDocumentsProtectedPath:`, error.message);
        console.error(error);
        throw error;
    }
}

module.exports = compareDocumentsProtectedPath;
