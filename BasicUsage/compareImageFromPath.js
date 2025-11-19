const path = require('path');
const Constants = require('../constants');

/**
 * This example demonstrates how to compare two image files.
 * The comparison is performed without generating a summary page, showing only the differences.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function compareImageFromPath(groupdocs) {
    console.log('\n================================================================================');
    console.log('Running Example: compareImageFromPath');
    console.log('Description: Compare two image files');
    console.log('================================================================================\n');

    try {
        // Create output directory and file path
        const outputDirectory = Constants.createOutputFolder('compareImageFromPath');
        const outputFileName = path.join(outputDirectory, Constants.RESULT_IMAGE);

        console.log(`Source image: ${Constants.SOURCE_IMAGE}`);
        console.log(`Target image: ${Constants.TARGET_IMAGE}`);
        console.log(`Output file: ${outputFileName}`);
        console.log('Comparison options: Summary page generation disabled\n');

        // Initialize comparer with source image file
        const comparer = new groupdocs.Comparer(Constants.SOURCE_IMAGE);

        // Configure comparison options - disable summary page generation
        const options = new groupdocs.CompareOptions();
        options.setGenerateSummaryPage(false);

        // Add target image for comparison
        comparer.add(Constants.TARGET_IMAGE);

        // Perform comparison and save result
        console.log('Comparing images...');
        await comparer.compare(outputFileName, options);

        console.log(`\n✓ Example completed successfully!`);
        console.log(`  Output saved to: ${outputFileName}\n`);
    } catch (error) {
        console.error(`\n✗ Error in compareImageFromPath:`, error.message);
        console.error(error);
        throw error;
    }
}

module.exports = compareImageFromPath;
