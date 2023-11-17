const path = require('path');
const Constants = require('../../../constants');

async function compareMultipleDocuments(groupdocs, sourcePath, targetPaths, resultPath) {
  try {
    const outputDirectory = await Constants.getOutputDirectoryPath();
    const outputFileName = path.join(outputDirectory, resultPath);

    // Create a Comparer object with the source document
    const comparer = new groupdocs.comparison.Comparer(sourcePath);

    // Add target documents to the comparer
    for (let targetPath of targetPaths) {
      comparer.add(targetPath);
    }
    
    // Compare and save the result document
    const saveOptions = new groupdocs.comparison.SaveOptions();
    await comparer.compare(outputFileName, saveOptions, new groupdocs.comparison.CompareOptions());

    console.log(`\nDocuments compared successfully.\nCheck output in ${outputFileName}.`);
  } catch (error) {
    console.error('An error occurred during the document comparison:', error);
  }
}

module.exports = {
  compareMultipleWordsDocuments: async function (groupdocs) {
    await compareMultipleDocuments(groupdocs, Constants.SOURCE_WORD, [Constants.TARGET_WORD, Constants.TARGET2_WORD, Constants.TARGET3_WORD], Constants.RESULT_WORD);
  },
  compareMultipleTxtDocuments: async function (groupdocs) {
    await compareMultipleDocuments(groupdocs, Constants.SOURCE_TXT, [Constants.TARGET_TXT, Constants.TARGET2_TXT, Constants.TARGET3_TXT], Constants.RESULT_TXT);
  },
  compareMultipleEmailDocuments: async function (groupdocs) {
    await compareMultipleDocuments(groupdocs, Constants.SOURCE_EMAIL, [Constants.TARGET_EMAIL, Constants.TARGET2_EMAIL, Constants.TARGET3_EMAIL], Constants.RESULT_EMAIL);
  },
  compareMultiplePdfDocuments: async function (groupdocs) {
    await compareMultipleDocuments(groupdocs, Constants.SOURCE_PDF, [Constants.TARGET_PDF, Constants.TARGET2_PDF, Constants.TARGET3_PDF], Constants.RESULT_PDF);
  }
};
