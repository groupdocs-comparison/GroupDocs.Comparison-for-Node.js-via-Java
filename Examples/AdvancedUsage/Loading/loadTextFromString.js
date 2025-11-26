const { getOutputFilePath } = require('../../utils');

/**
 * This example demonstrates how to compare two text strings directly without loading from files.
 * Text content is provided as string variables, which is useful for comparing text in memory
 * or from non-file sources.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} sourceText - Source text string
 * @param {string} targetText - Target text string
 * @param {string} outputFolder - Output folder path
 * @param {string} resultFileName - Result file name
 */
async function loadTextFromString(groupdocs, sourceText, targetText, outputFolder, resultFileName) {
  const exampleName = 'loadTextFromString';

  console.log('\n================================================================================');
  console.log('Running Example: loadTextFromString');
  console.log('Description: Compare text strings directly');
  console.log('================================================================================\n');

  // Create output directory and file path
  const outputFileName = getOutputFilePath(exampleName, resultFileName, outputFolder);

  console.log(`Source text: ${sourceText}`);
  console.log(`Target text: ${targetText}`);
  console.log(`Output file: ${outputFileName}\n`);

  // Configure load options to indicate we're loading text from strings
  const loadOptions = new groupdocs.LoadOptions();
  loadOptions.setLoadText(true);

  // Initialize comparer with source text string
  const comparer = new groupdocs.Comparer(sourceText, loadOptions);

  // Add target text string for comparison
  comparer.add(targetText, loadOptions);

  // Perform comparison and save result
  console.log('Comparing text strings...');
  comparer.compare(outputFileName);

  // Display the comparison result as a string
  console.log('Result string: \n' + comparer.getResultString());

  console.log('\n✓ Example completed successfully!');
  console.log(`  Output saved to: ${outputFileName}\n`);
}

module.exports = loadTextFromString;
