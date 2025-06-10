const path = require('path');
const Constants = require('../../../constants');

/**
 * This example demonstrates how protect result document by password
 */
async function setPasswordForResultantDocument(groupdocs) {
    const outputDirectory = Constants.createOutputFolder('setPasswordForResultantDocument');
    const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);
  
    const comparer = new groupdocs.comparison.Comparer(Constants.SOURCE_WORD);

    comparer.add(Constants.TARGET_WORD);

    const compareOptions = new groupdocs.comparison.CompareOptions();
    compareOptions.setPasswordSaveOption(groupdocs.comparison.PasswordSaveOption.USER);
    
    const saveOptions = new groupdocs.comparison.SaveOptions();
    saveOptions.setPassword("3333")

    comparer.compare(outputFileName, saveOptions, compareOptions);
  
    console.log(`\nDocuments compared successfully.\nCheck output in ${outputFileName}.`);
  }

  module.exports = setPasswordForResultantDocument;