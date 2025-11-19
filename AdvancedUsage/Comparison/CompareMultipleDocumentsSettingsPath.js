const path = require('path');
const java = require('java');
const Constants = require('../../constants');

// Import Java classes for styling
const Color = java.import('java.awt.Color');

/**
 * This example demonstrates how to compare multiple documents with custom styling settings.
 * The comparison uses custom style settings to highlight inserted items in yellow.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function compareMultipleDocumentsSettingsPath(groupdocs) {
    try {
        // Create output directory and file path
        const outputDirectory = Constants.createOutputFolder('compareMultipleDocumentsSettingsPath');
        const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);

        // Initialize comparer with source document
        const comparer = new groupdocs.Comparer(Constants.SOURCE_WORD);

        // Add multiple target documents for comparison
        comparer.add(Constants.TARGET_WORD);
        comparer.add(Constants.TARGET2_WORD);
        comparer.add(Constants.TARGET3_WORD);

        // Configure comparison options with custom styling
        const compareOptions = new groupdocs.CompareOptions();
        const styleSettings = new groupdocs.StyleSettings();
        styleSettings.setFontColor(Color.YELLOW);
        compareOptions.setInsertedItemStyle(styleSettings);

        // Perform comparison with custom options and save result
        await comparer.compare(outputFileName, compareOptions);

        console.log(`\nDocuments compared successfully.\nCheck output in ${outputFileName}.`);
    } catch (error) {
        console.error('An error occurred during the document comparison:', error);
    }
}

module.exports = compareMultipleDocumentsSettingsPath;
