const path = require('path');
const Constants = require('../../constants');

/**
 * This example demonstrates how to set document metadata for the result document.
 * The metadata from the target document will be cloned to the result document.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function setDocumentMetadataTarget(groupdocs) {
    // Create output directory and file path
    const outputDirectory = Constants.createOutputFolder('setDocumentMetadataTarget');
    const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);
  
    // Initialize comparer with source document
    const comparer = new groupdocs.Comparer(Constants.SOURCE_WORD);

    // Add target document for comparison
    comparer.add(Constants.TARGET_WORD);
    
    // Configure save options to clone metadata from target document
    const saveOptions = new groupdocs.SaveOptions();
    saveOptions.setCloneMetadataType(groupdocs.MetadataType.TARGET);

    // Perform comparison and save result with target metadata
    comparer.compare(outputFileName, saveOptions);
  
    console.log(`\nDocuments compared successfully.\nCheck output in ${outputFileName}.`);
}

module.exports = setDocumentMetadataTarget;