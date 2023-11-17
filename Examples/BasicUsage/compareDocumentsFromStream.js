const path = require('path');
const Constants = require('../../constants');
const java = require('java');
let InputStream = java.import('java.io.FileInputStream');
let OutputStream = java.import('java.io.FileOutputStream');

/**
 * This example demonstrates comparing two documents.
 */
async function compareDocumentsFromStream(groupdocs) {
  const outputDirectory = await Constants.getOutputDirectoryPath();
  const outputFileName = path.join(outputDirectory, Constants.RESULT_WORD);
  
  const comparer = new groupdocs.comparison.Comparer(new InputStream(Constants.SOURCE_WORD));

  comparer.add(new InputStream(Constants.TARGET_WORD))
  comparer.compare(outputFileName);

  console.log(`Compared to ${outputFileName}`)
}

module.exports = compareDocumentsFromStream;
