const java = require('java');
const { getOutputFilePath } = require('../../utils');

// Import Java classes for styling
const Color = java.import('java.awt.Color');

/**
 * This example demonstrates how to compare multiple documents with custom styling settings.
 * The comparison uses custom style settings to highlight inserted items in yellow.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} source - Path to source document
 * @param {string[]} targets - Array of paths to target documents
 * @param {string} outputFolder - Output folder path
 * @param {string} resultFileName - Result file name
 */
async function compareMultipleDocumentsSettingsPath(groupdocs, source, targets, outputFolder, resultFileName) {
  const exampleName = 'compareMultipleDocumentsSettingsPath';

  console.log('\n================================================================================');
  console.log('Running Example: compareMultipleDocumentsSettingsPath');
  console.log('Description: Compare multiple documents with custom styling settings');
  console.log('================================================================================\n');

  try {
    // Create output directory and file path
    const outputFileName = getOutputFilePath(exampleName, resultFileName, outputFolder);

    console.log(`Source document: ${source}`);
    console.log(`Target documents: ${targets.length} file(s)`);
    targets.forEach((file, index) => console.log(`  ${index + 1}. ${file}`));
    console.log(`Output file: ${outputFileName}\n`);

    // Initialize comparer with source document
    const comparer = new groupdocs.Comparer(source);

    // Add multiple target documents for comparison
    console.log('Adding target documents...');
    targets.forEach((targetPath) => {
      comparer.add(targetPath);
    });

    // Configure comparison options with custom styling
    const compareOptions = new groupdocs.CompareOptions();
    const styleSettings = new groupdocs.StyleSettings();
    styleSettings.setFontColor(Color.YELLOW);
    compareOptions.setInsertedItemStyle(styleSettings);

    // Perform comparison with custom options and save result
    console.log('Comparing multiple documents with custom settings...');
    await comparer.compare(outputFileName, compareOptions);

    console.log('\n✓ Example completed successfully!');
    console.log(`  Output saved to: ${outputFileName}\n`);
  } catch (error) {
    console.error('\n✗ Error in compareMultipleDocumentsSettingsPath:', error.message);
    console.error(error);
    throw error;
  }
}

module.exports = compareMultipleDocumentsSettingsPath;
