const path = require('path');
const Constants = require('../../constants');

/**
 * This example demonstrates how to compare two documents loaded from local disk using file paths.
 * Documents are loaded directly from the file system and compared.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function loadDocumentFromLocalDisc(groupdocs) {
    // Create output directory and file path
    const outputDirectory = Constants.createOutputFolder('loadDocumentFromLocalDisc');
    const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);
  
    // Initialize comparer with source document from local disk
    const comparer = new groupdocs.Comparer(Constants.SOURCE_WORD);

    // Add target document from local disk for comparison
    comparer.add(Constants.TARGET_WORD);

    // Perform comparison and save result
    comparer.compare(outputFileName);
  
    console.log(`\nDocuments compared successfully.\nCheck output in ${outputFileName}.`);
}

module.exports = loadDocumentFromLocalDisc;