const { getOutputFilePath } = require('../utils');

/**
 * This example demonstrates how to compare two Excel spreadsheet files (.xlsx).
 * The comparison identifies differences between cells, formulas, and formatting.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} source - Path to source Excel file
 * @param {string} target - Path to target Excel file
 * @param {string} outputFolder - Output folder path
 * @param {string} resultFileName - Result file name
 */
async function compareCellsFromPath(groupdocs, source, target, outputFolder, resultFileName) {
  const exampleName = 'compareCellsFromPath';

  console.log('\n================================================================================');
  console.log('Running Example: compareCellsFromPath');
  console.log('Description: Compare two Excel spreadsheet files (.xlsx)');
  console.log('================================================================================\n');

  try {
    // Create output directory and file path
    const outputFileName = getOutputFilePath(exampleName, resultFileName, outputFolder);

    console.log(`Source Excel file: ${source}`);
    console.log(`Target Excel file: ${target}`);
    console.log(`Output file: ${outputFileName}\n`);

    // Initialize comparer with source Excel file
    const comparer = new groupdocs.Comparer(source);

    // Add target Excel file for comparison
    comparer.add(target);

    // Perform comparison and save result
    console.log('Comparing Excel spreadsheets...');
    await comparer.compare(outputFileName);

    console.log('\n✓ Example completed successfully!');
    console.log(`  Output saved to: ${outputFileName}\n`);
  } catch (error) {
    console.error('\n✗ Error in compareCellsFromPath:', error.message);
    console.error(error);
    throw error;
  }
}

module.exports = compareCellsFromPath;
