/**
 * This example demonstrates document information extraction.
 * For more details about extracting document information, please check the relevant documentation.
 */

const Constants = require('../../constants');

async function getDocumentInfoPath(groupdocs) {
  const comparer = new groupdocs.comparison.Comparer(Constants.SOURCE_WORD);

  let info = await comparer.getSource().getDocumentInfo();
  
  console.log(`\nFile type: ${info.getFileType().getFileFormat()}`);
  console.log(`Number of pages: ${info.getPageCount()}`);
  console.log(`Document size: ${info.getSize()} bytes`);
  
  console.log("\nDocument info extracted successfully.");
}

module.exports = getDocumentInfoPath
