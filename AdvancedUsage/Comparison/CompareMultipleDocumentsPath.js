const path = require('path');
const Constants = require('../../constants');

/**
 * Helper function to compare multiple documents at once.
 * The source document is compared against multiple target documents, and all differences
 * are consolidated into a single result document.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} sourcePath - Path to the source document
 * @param {string[]} targetPaths - Array of paths to target documents
 * @param {string} resultPath - Filename for the result document
 */
async function compareMultipleDocuments(groupdocs, sourcePath, targetPaths, resultPath) {
    try {
        // Create output directory and file path
        const outputDirectory = Constants.createOutputFolder('compareMultipleDocuments');
        const outputFileName = path.join(outputDirectory, resultPath);

        console.log(`Source document: ${sourcePath}`);
        console.log(`Target documents: ${targetPaths.length} file(s)`);
        targetPaths.forEach((path, index) => console.log(`  ${index + 1}. ${path}`));
        console.log(`Output file: ${outputFileName}\n`);

        // Initialize comparer with source document
        const comparer = new groupdocs.Comparer(sourcePath);

        // Add all target documents for comparison
        console.log('Adding target documents...');
        for (const targetPath of targetPaths) {
            comparer.add(targetPath);
        }
    
        // Perform comparison and save result
        console.log('Comparing multiple documents...');
        await comparer.compare(outputFileName);

        console.log(`\n✓ Example completed successfully!`);
        console.log(`  Output saved to: ${outputFileName}\n`);
    } catch (error) {
        console.error(`\n✗ Error in compareMultipleDocuments:`, error.message);
        console.error(error);
        throw error;
    }
}

/**
 * This example demonstrates how to compare multiple Word documents at once.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function compareMultipleWordsDocuments(groupdocs) {
    console.log('\n================================================================================');
    console.log('Running Example: compareMultipleWordsDocuments');
    console.log('Description: Compare multiple Word documents at once');
    console.log('================================================================================\n');
    
    await compareMultipleDocuments(
        groupdocs, 
        Constants.SOURCE_WORD, 
        [Constants.TARGET_WORD, Constants.TARGET2_WORD, Constants.TARGET3_WORD], 
        Constants.RESULT_WORD
    );
}

/**
 * This example demonstrates how to compare multiple text documents at once.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function compareMultipleTxtDocuments(groupdocs) {
    console.log('\n================================================================================');
    console.log('Running Example: compareMultipleTxtDocuments');
    console.log('Description: Compare multiple text documents at once');
    console.log('================================================================================\n');
    
    await compareMultipleDocuments(
        groupdocs, 
        Constants.SOURCE_TXT, 
        [Constants.TARGET_TXT, Constants.TARGET2_TXT, Constants.TARGET3_TXT], 
        Constants.RESULT_TXT
    );
}

/**
 * This example demonstrates how to compare multiple email documents at once.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function compareMultipleEmailDocuments(groupdocs) {
    console.log('\n================================================================================');
    console.log('Running Example: compareMultipleEmailDocuments');
    console.log('Description: Compare multiple email documents at once');
    console.log('================================================================================\n');
    
    await compareMultipleDocuments(
        groupdocs, 
        Constants.SOURCE_EMAIL, 
        [Constants.TARGET_EMAIL, Constants.TARGET2_EMAIL, Constants.TARGET3_EMAIL], 
        Constants.RESULT_EMAIL
    );
}

module.exports = {
    compareMultipleWordsDocuments,
    compareMultipleTxtDocuments,
    compareMultipleEmailDocuments
};
