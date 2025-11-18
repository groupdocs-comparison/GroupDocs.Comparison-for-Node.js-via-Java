const path = require('path');
const java = require('java');
const Constants = require('../constants');

// Import Java classes for stream operations
const InputStream = java.import('java.io.FileInputStream');

/**
 * This example demonstrates how to compare two Excel spreadsheet files (.xlsx) using file streams.
 * Documents are loaded as Java InputStreams, which is useful when working with files in memory
 * or from non-file sources.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function compareCellsFromStream(groupdocs) {
    console.log('\n================================================================================');
    console.log('Running Example: compareCellsFromStream');
    console.log('Description: Compare Excel spreadsheets using file streams');
    console.log('================================================================================\n');

    try {
        // Create output directory and file path
        const outputDirectory = Constants.createOutputFolder('compareCellsFromStream');
        const outputFileName = path.join(outputDirectory, Constants.RESULT_CELLS);

        console.log(`Source Excel file: ${Constants.SOURCE_CELLS}`);
        console.log(`Target Excel file: ${Constants.TARGET_CELLS}`);
        console.log(`Output file: ${outputFileName}`);
        console.log('Using file streams for document loading...\n');

        // Initialize comparer with source Excel file stream
        const comparer = new groupdocs.comparison.Comparer(new InputStream(Constants.SOURCE_CELLS));

        // Add target Excel file stream for comparison
        comparer.add(new InputStream(Constants.TARGET_CELLS));
        
        // Perform comparison and save result
        console.log('Comparing Excel spreadsheets...');
        await comparer.compare(outputFileName);

        console.log(`\n✓ Example completed successfully!`);
        console.log(`  Output saved to: ${outputFileName}\n`);
    } catch (error) {
        console.error(`\n✗ Error in compareCellsFromStream:`, error.message);
        console.error(error);
        throw error;
    }
}

module.exports = compareCellsFromStream;
