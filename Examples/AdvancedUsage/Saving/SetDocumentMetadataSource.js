const path = require('path');
const Constants = require('../../../constants');

/**
 * This example demonstrates using option for select metadata
 */
async function setDocumentMetadataSource(groupdocs) {
    const outputDirectory = Constants.createOutputFolder('setDocumentMetadataSource');
    const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);
  
    const comparer = new groupdocs.comparison.Comparer(Constants.SOURCE_WORD);

    comparer.add(Constants.TARGET_WORD);
    
    const saveOptions = new groupdocs.comparison.SaveOptions();
    saveOptions.setCloneMetadataType(groupdocs.comparison.MetadataType.SOURCE)

    comparer.compare(outputFileName, saveOptions);
  
    console.log(`\nDocuments compared successfully.\nCheck output in ${outputFileName}.`);
  }

  module.exports = setDocumentMetadataSource;