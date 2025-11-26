const { getOutputFilePath } = require('../../utils');

/**
 * This example demonstrates how to protect the resultant comparison document with a password.
 * The output document will be password-protected and require the specified password to open.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} source - Path to source document
 * @param {string} target - Path to target document
 * @param {string} password - Password for the result document
 * @param {string} outputFolder - Output folder path
 * @param {string} resultFileName - Result file name
 */
async function setPasswordForResultantDocument(
  groupdocs,
  source,
  target,
  password,
  outputFolder,
  resultFileName,
) {
  const exampleName = 'setPasswordForResultantDocument';

  console.log('\n================================================================================');
  console.log('Running Example: setPasswordForResultantDocument');
  console.log('Description: Protect resultant document with password');
  console.log('================================================================================\n');

  // Create output directory and file path
  const outputFileName = getOutputFilePath(exampleName, resultFileName, outputFolder);

  console.log(`Source document: ${source}`);
  console.log(`Target document: ${target}`);
  console.log(`Output file: ${outputFileName}\n`);

  // Initialize comparer with source document
  const comparer = new groupdocs.Comparer(source);

  // Add target document for comparison
  comparer.add(target);

  // Configure comparison options to use user-specified password
  const compareOptions = new groupdocs.CompareOptions();
  compareOptions.setPasswordSaveOption(groupdocs.PasswordSaveOption.USER);

  // Configure save options with password protection
  const saveOptions = new groupdocs.SaveOptions();
  saveOptions.setPassword(password);

  // Perform comparison and save result with password protection
  console.log('Comparing documents and protecting result with password...');
  comparer.compare(outputFileName, saveOptions, compareOptions);

  console.log('\n✓ Example completed successfully!');
  console.log(`  Output saved to: ${outputFileName}\n`);
}

module.exports = setPasswordForResultantDocument;
