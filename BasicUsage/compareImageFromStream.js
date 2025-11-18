const path = require('path');
const java = require('java');
const Constants = require('../constants');

// Import Java classes for stream operations
const InputStream = java.import('java.io.FileInputStream');

/**
 * This example demonstrates how to compare two image files using file streams.
 * The comparison is performed without generating a summary page, showing only the differences.
 * Documents are loaded as Java InputStreams, which is useful when working with files in memory.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function compareImageFromStream(groupdocs) {
    console.log('\n================================================================================');
    console.log('Running Example: compareImageFromStream');
    console.log('Description: Compare image files using file streams');
    console.log('================================================================================\n');

    try {
        // Create output directory and file path
        const outputDirectory = Constants.createOutputFolder('compareImageFromStream');
        const outputFileName = path.join(outputDirectory, Constants.RESULT_IMAGE);

        console.log(`Source image: ${Constants.SOURCE_IMAGE}`);
        console.log(`Target image: ${Constants.TARGET_IMAGE}`);
        console.log(`Output file: ${outputFileName}`);
        console.log('Using file streams with summary page generation disabled...\n');

        // Initialize comparer with source image file stream
        const comparer = new groupdocs.comparison.Comparer(new InputStream(Constants.SOURCE_IMAGE));

        // Configure comparison options - disable summary page generation
        const options = new groupdocs.comparison.CompareOptions();
        options.setGenerateSummaryPage(false);

        // Add target image stream for comparison
        comparer.add(new InputStream(Constants.TARGET_IMAGE));

        // Perform comparison and save result
        console.log('Comparing images...');
        await comparer.compare(outputFileName, options);

        console.log(`\n✓ Example completed successfully!`);
        console.log(`  Output saved to: ${outputFileName}\n`);
    } catch (error) {
        console.error(`\n✗ Error in compareImageFromStream:`, error.message);
        console.error(error);
        throw error;
    }
}

module.exports = compareImageFromStream;
