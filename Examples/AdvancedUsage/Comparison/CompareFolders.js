const path = require('path');
const Constants = require('../../../constants');

// Helper function to compare folders and output the result in a specified format
async function compareFoldersAndSave(groupdocs, outputFormat) {
  const outputDirectory = Constants.createOutputFolder('compareFoldersAndSave');
  const outputFileName = path.join(outputDirectory, Constants.RESULT_FOLDER + (outputFormat === 'HTML' ? '.html' : '.txt'));

  // Set compare options for directory comparison
  const compareOptions = new groupdocs.comparison.CompareOptions();
  compareOptions.setDirectoryCompare(true);
  compareOptions.setFolderComparisonExtension(
    outputFormat === 'HTML' 
      ? groupdocs.comparison.FolderComparisonExtension.HTML 
      : groupdocs.comparison.FolderComparisonExtension.TXT
  );

  // Create a new comparer with the source folder path and comparison options
  const comparer = groupdocs.comparison.Comparer(Constants.SOURCE_FOLDER, compareOptions);

  // Add the target folder for comparison
  comparer.add(Constants.TARGET_FOLDER, compareOptions);

  // Perform the comparison and save the result
  await comparer.compareDirectory(outputFileName, compareOptions);

  console.log(`\nFolders compared successfully.\nCheck output in ${outputFileName}.`);
}

// Function to compare folders and save result as a TXT file
async function compareFolderSaveAsTxt(groupdocs) {
  await compareFoldersAndSave(groupdocs, 'TXT');
}

// Function to compare folders and save result as an HTML file
async function compareFolderSaveAsHtml(groupdocs) {
  await compareFoldersAndSave(groupdocs, 'HTML');
}

module.exports = {
  compareFolderSaveAsTxt,
  compareFolderSaveAsHtml
};