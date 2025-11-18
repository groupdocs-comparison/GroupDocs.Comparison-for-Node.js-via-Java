const path = require('path');
const Constants = require('../../constants');

/**
 * This example demonstrates how to compare multiple password-protected documents.
 * Each document requires its own password to be loaded and compared.
 * The source document and multiple target documents are all password-protected.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function compareMultipleDocumentsProtectedPath(groupdocs) {
    try {
        // Create output directory and file path
        const outputDirectory = Constants.createOutputFolder('compareMultipleDocumentsProtectedPath');
        const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);

        // Initialize comparer with source protected document and its password
        const comparer = new groupdocs.comparison.Comparer(
            Constants.SOURCE_WORD_PROTECTED, 
            new groupdocs.comparison.LoadOptions("1234")
        );

        // Add multiple target protected documents with their passwords
        comparer.add(Constants.TARGET_WORD_PROTECTED, new groupdocs.comparison.LoadOptions("5678"));
        comparer.add(Constants.TARGET2_WORD_PROTECTED, new groupdocs.comparison.LoadOptions("5678"));
        comparer.add(Constants.TARGET3_WORD_PROTECTED, new groupdocs.comparison.LoadOptions("5678"));

        // Perform comparison and save result
        await comparer.compare(outputFileName);

        console.log(`\nDocuments compared successfully.\nCheck output in ${outputFileName}.`);
    } catch (error) {
        console.error('An error occurred during the document comparison:', error);
    }
}

module.exports = compareMultipleDocumentsProtectedPath;
