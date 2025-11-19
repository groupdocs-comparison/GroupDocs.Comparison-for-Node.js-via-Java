const path = require('path');
const Constants = require('../constants');

/**
 * This example demonstrates how to compare two Excel spreadsheet files (.xlsx).
 * The comparison identifies differences between cells, formulas, and formatting.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function compareCellsFromPath(groupdocs) {
    console.log('\n================================================================================');
    console.log('Running Example: compareCellsFromPath');
    console.log('Description: Compare two Excel spreadsheet files (.xlsx)');
    console.log('================================================================================\n');

    try {
        // Create output directory and file path
        const outputDirectory = Constants.createOutputFolder('compareCellsFromPath');
        const outputFileName = path.join(outputDirectory, Constants.RESULT_CELLS);

        console.log(`Source Excel file: ${Constants.SOURCE_CELLS}`);
        console.log(`Target Excel file: ${Constants.TARGET_CELLS}`);
        console.log(`Output file: ${outputFileName}\n`);

        // Initialize comparer with source Excel file
        const comparer = new groupdocs.Comparer(Constants.SOURCE_CELLS);

        // Add target Excel file for comparison
        comparer.add(Constants.TARGET_CELLS);
        
        // Perform comparison and save result
        console.log('Comparing Excel spreadsheets...');
        await comparer.compare(outputFileName);

        console.log(`\n✓ Example completed successfully!`);
        console.log(`  Output saved to: ${outputFileName}\n`);
    } catch (error) {
        console.error(`\n✗ Error in compareCellsFromPath:`, error.message);
        console.error(error);
        throw error;
    }
}

module.exports = compareCellsFromPath;