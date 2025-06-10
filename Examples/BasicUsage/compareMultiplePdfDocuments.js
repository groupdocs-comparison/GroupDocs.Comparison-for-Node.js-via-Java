/**
 * This example demonstrates comparing multiple PDF documents.
 * For more details about comparing PDF documents, please check the relevant documentation.
 */

const path = require('path');
const Constants = require('../../constants');

async function compareMultiplePdfDocuments(groupdocs) {
    const comparer = new groupdocs.comparison.Comparer(Constants.SOURCE_PDF);

    // Prepare the output file path
    const outputDirectory = Constants.createOutputFolder('compareMultiplePdfDocuments');
    const outputFileName = path.join(outputDirectory, Constants.RESULT_PDF);

    [Constants.TARGET_PDF, Constants.TARGET2_PDF, Constants.TARGET3_PDF].forEach(targetFilePath => {
        comparer.add(targetFilePath);
    });

    comparer.compare(outputFileName);
  
    console.log(`PDF documents compared successfully. Check output in ${outputFileName}`);
}

module.exports = compareMultiplePdfDocuments;