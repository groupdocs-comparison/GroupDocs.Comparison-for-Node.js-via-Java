const path = require('path');
const Constants = require('../../constants');

/**
 * Helper function to compare two folders and output the result in a specified format.
 * This function compares all files within the source and target folders and generates
 * a comparison report in either HTML or TXT format.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} outputFormat - The output format ('HTML' or 'TXT')
 */
async function compareFoldersAndSave(groupdocs, outputFormat) {
    const exampleName = `compareFoldersAndSave (${outputFormat})`;
    console.log('\n================================================================================');
    console.log(`Running Example: ${exampleName}`);
    console.log(`Description: Compare two folders and save result as ${outputFormat}`);
    console.log('================================================================================\n');

    // Create output directory and file path
    const outputDirectory = Constants.createOutputFolder('compareFoldersAndSave');
    const outputFileName = path.join(
        outputDirectory, 
        Constants.RESULT_FOLDER + (outputFormat === 'HTML' ? '.html' : '.txt')
    );

    console.log(`Source folder: ${Constants.SOURCE_FOLDER}`);
    console.log(`Target folder: ${Constants.TARGET_FOLDER}`);
    console.log(`Output file: ${outputFileName}\n`);

    // Configure comparison options for directory comparison
    const compareOptions = new groupdocs.CompareOptions();
    compareOptions.setDirectoryCompare(true);
    compareOptions.setFolderComparisonExtension(
        outputFormat === 'HTML' 
            ? groupdocs.FolderComparisonExtension.HTML 
            : groupdocs.FolderComparisonExtension.TXT
    );

    // Initialize comparer with source folder path and comparison options
    const comparer = new groupdocs.Comparer(Constants.SOURCE_FOLDER, compareOptions);

    // Add target folder for comparison
    console.log('Comparing folders...');
    comparer.add(Constants.TARGET_FOLDER, compareOptions);

    // Perform folder comparison and save result
    await comparer.compareDirectory(outputFileName, compareOptions);

    console.log(`\n✓ Example completed successfully!`);
    console.log(`  Output saved to: ${outputFileName}\n`);
}

/**
 * This example demonstrates how to compare two folders and save the result as a TXT file.
 * The comparison report lists all differences between files in the source and target folders.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function compareFolderSaveAsTxt(groupdocs) {
    await compareFoldersAndSave(groupdocs, 'TXT');
}

/**
 * This example demonstrates how to compare two folders and save the result as an HTML file.
 * The HTML report provides a visual representation of differences between files in the folders.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function compareFolderSaveAsHtml(groupdocs) {
    await compareFoldersAndSave(groupdocs, 'HTML');
}

module.exports = {
    compareFolderSaveAsTxt,
    compareFolderSaveAsHtml
};
