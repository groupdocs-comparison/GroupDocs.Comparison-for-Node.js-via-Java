const java = require('java');
const { getOutputFilePath } = require('../../utils');

// Import Java classes for stream operations and styling
const InputStream = java.import('java.io.FileInputStream');
const Color = java.import('java.awt.Color');

/**
 * This example demonstrates how to compare two documents using streams with custom styling settings.
 * The comparison uses custom style settings including underline, font color (green), and highlight color (red)
 * to visually distinguish inserted items in the result document.
 * Documents are loaded as Java InputStreams, which is useful when working with files in memory.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} source - Path to source document
 * @param {string} target - Path to target document
 * @param {string} outputFolder - Output folder path
 * @param {string} resultFileName - Result file name
 */
async function compareDocumentsSettingsStream(groupdocs, source, target, outputFolder, resultFileName) {
  const exampleName = 'compareDocumentsSettingsStream';

  console.log('\n================================================================================');
  console.log('Running Example: compareDocumentsSettingsStream');
  console.log('Description: Compare documents with custom styling settings using streams');
  console.log('================================================================================\n');

  try {
    // Create output directory and file path
    const outputFileName = getOutputFilePath(exampleName, resultFileName, outputFolder);

    console.log(`Source document: ${source}`);
    console.log(`Target document: ${target}`);
    console.log(`Output file: ${outputFileName}`);
    console.log('Using file streams with custom styling (green font, red highlight, underline)...\n');

    // Initialize comparer with source document stream
    const comparer = new groupdocs.Comparer(new InputStream(source));

    // Add target document stream for comparison
    comparer.add(new InputStream(target));

    // Configure comparison options with custom styling for inserted items
    const compareOptions = new groupdocs.CompareOptions();
    const styleSettings = new groupdocs.StyleSettings();
    styleSettings.setUnderline(true);
    styleSettings.setFontColor(Color.GREEN);
    styleSettings.setHighlightColor(Color.RED);
    compareOptions.setInsertedItemStyle(styleSettings);

    // Perform comparison with custom options and save result
    console.log('Comparing documents with custom settings...');
    await comparer.compare(outputFileName, compareOptions);

    console.log('\n✓ Example completed successfully!');
    console.log(`  Output saved to: ${outputFileName}\n`);
  } catch (error) {
    console.error('\n✗ Error in compareDocumentsSettingsStream:', error.message);
    console.error(error);
    throw error;
  }
}

module.exports = compareDocumentsSettingsStream;
