const path = require('path');
const Constants = require('../../constants');

/**
 * This example demonstrates how to protect the resultant comparison document with a password.
 * The output document will be password-protected and require the specified password to open.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function setPasswordForResultantDocument(groupdocs) {
    // Create output directory and file path
    const outputDirectory = Constants.createOutputFolder('setPasswordForResultantDocument');
    const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);
  
    // Initialize comparer with source document
    const comparer = new groupdocs.Comparer(Constants.SOURCE_WORD);

    // Add target document for comparison
    comparer.add(Constants.TARGET_WORD);

    // Configure comparison options to use user-specified password
    const compareOptions = new groupdocs.CompareOptions();
    compareOptions.setPasswordSaveOption(groupdocs.PasswordSaveOption.USER);
    
    // Configure save options with password protection
    const saveOptions = new groupdocs.SaveOptions();
    saveOptions.setPassword("3333");

    // Perform comparison and save result with password protection
    comparer.compare(outputFileName, saveOptions, compareOptions);
  
    console.log(`\nDocuments compared successfully.\nCheck output in ${outputFileName}.`);
}

module.exports = setPasswordForResultantDocument;