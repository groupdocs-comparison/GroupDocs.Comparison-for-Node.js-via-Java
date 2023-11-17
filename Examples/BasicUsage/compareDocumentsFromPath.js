/**
 * This example demonstrates how to compare documents with same document file type
 * For more details about Document Comparison please check documentation
 * https://docs.groupdocs.com/comparison
 */

const path = require('path');
const Constants = require('../../constants');

async function compareDocumentsFromPath(groupdocs) {
    const outputDirectory = await Constants.getOutputDirectoryPath();
    const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);
    
    const comparer = new groupdocs.comparison.Comparer(Constants.SOURCE_WORD);

    comparer.add(Constants.TARGET_WORD)
    comparer.compare(outputFileName);
  
    console.log(`Compared to ${outputFileName}`)
}
  
module.exports = compareDocumentsFromPath;