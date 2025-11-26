const { getOutputFilePath } = require('../../utils');

/**
 * Helper function to compare two folders and output the result in a specified format.
 * This function compares all files within the source and target folders and generates
 * a comparison report in either HTML or TXT format.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} sourceFolder - Path to source folder
 * @param {string} targetFolder - Path to target folder
 * @param {string} outputFolder - Output folder path
 * @param {string} resultFileName - Result file name (without extension)
 * @param {string} outputFormat - The output format ('HTML' or 'TXT')
 */
async function compareFoldersAndSave(
  groupdocs,
  sourceFolder,
  targetFolder,
  outputFolder,
  resultFileName,
  outputFormat,
) {
  const exampleName = 'compareFoldersAndSave';

  console.log('\n================================================================================');
  console.log(`Running Example: compareFoldersAndSave (${outputFormat})`);
  console.log(`Description: Compare two folders and save result as ${outputFormat}`);
  console.log('================================================================================\n');

  // Create output directory and file path
  const outputFileName = getOutputFilePath(exampleName, resultFileName + (outputFormat === 'HTML' ? '.html' : '.txt'), outputFolder);

  console.log(`Source folder: ${sourceFolder}`);
  console.log(`Target folder: ${targetFolder}`);
  console.log(`Output file: ${outputFileName}\n`);

  // Configure comparison options for directory comparison
  const compareOptions = new groupdocs.CompareOptions();
  compareOptions.setDirectoryCompare(true);
  compareOptions.setFolderComparisonExtension(
    outputFormat === 'HTML'
      ? groupdocs.FolderComparisonExtension.HTML
      : groupdocs.FolderComparisonExtension.TXT,
  );

  // Initialize comparer with source folder path and comparison options
  const comparer = new groupdocs.Comparer(sourceFolder, compareOptions);

  // Add target folder for comparison
  console.log('Comparing folders...');
  comparer.add(targetFolder, compareOptions);

  // Perform folder comparison and save result
  await comparer.compareDirectory(outputFileName, compareOptions);

  console.log('\n✓ Example completed successfully!');
  console.log(`  Output saved to: ${outputFileName}\n`);
}

/**
 * This example demonstrates how to compare two folders and save the result as a TXT file.
 * The comparison report lists all differences between files in the source and target folders.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} sourceFolder - Path to source folder
 * @param {string} targetFolder - Path to target folder
 * @param {string} outputFolder - Output folder path
 * @param {string} resultFileName - Result file name (without extension)
 */
async function compareFolderSaveAsTxt(groupdocs, sourceFolder, targetFolder, outputFolder, resultFileName) {
  await compareFoldersAndSave(groupdocs, sourceFolder, targetFolder, outputFolder, resultFileName, 'TXT');
}

/**
 * This example demonstrates how to compare two folders and save the result as an HTML file.
 * The HTML report provides a visual representation of differences between files in the folders.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} sourceFolder - Path to source folder
 * @param {string} targetFolder - Path to target folder
 * @param {string} outputFolder - Output folder path
 * @param {string} resultFileName - Result file name (without extension)
 */
async function compareFolderSaveAsHtml(groupdocs, sourceFolder, targetFolder, outputFolder, resultFileName) {
  await compareFoldersAndSave(groupdocs, sourceFolder, targetFolder, outputFolder, resultFileName, 'HTML');
}

module.exports = {
  compareFolderSaveAsTxt,
  compareFolderSaveAsHtml,
};
