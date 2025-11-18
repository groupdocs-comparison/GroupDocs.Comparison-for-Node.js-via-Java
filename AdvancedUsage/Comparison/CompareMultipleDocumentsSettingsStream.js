const path = require('path');
const java = require('java');
const Constants = require('../../constants');

// Import Java classes for stream operations and styling
const InputStream = java.import('java.io.FileInputStream');
const Color = java.import('java.awt.Color');

/**
 * This example demonstrates how to compare multiple documents using streams with custom styling settings.
 * The comparison uses custom style settings to highlight inserted items in yellow.
 * Target documents are loaded as Java InputStreams, which is useful when working with files in memory.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function compareMultipleDocumentsSettingsStream(groupdocs) {
    try {
        // Create output directory and file path
        const outputDirectory = Constants.createOutputFolder('compareMultipleDocumentsSettingsStream');
        const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);

        // Initialize comparer with source document
        const comparer = new groupdocs.comparison.Comparer(Constants.SOURCE_WORD);

        // Add multiple target documents as streams for comparison
        comparer.add(new InputStream(Constants.TARGET_WORD));
        comparer.add(new InputStream(Constants.TARGET2_WORD));
        comparer.add(new InputStream(Constants.TARGET3_WORD));

        // Configure comparison options with custom styling
        const compareOptions = new groupdocs.comparison.CompareOptions();
        const styleSettings = new groupdocs.comparison.StyleSettings();
        styleSettings.setFontColor(Color.YELLOW);
        compareOptions.setInsertedItemStyle(styleSettings);

        // Perform comparison with custom options and save result
        await comparer.compare(outputFileName, compareOptions);

        console.log(`\nDocuments compared successfully.\nCheck output in ${outputFileName}.`);
    } catch (error) {
        console.error('An error occurred during the document comparison:', error);
    }
}

module.exports = compareMultipleDocumentsSettingsStream;
