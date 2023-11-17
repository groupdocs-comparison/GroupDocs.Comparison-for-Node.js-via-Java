const fs = require('fs');
const Constants = require('../../constants');
const java = require('java');
let InputStream = java.import('java.io.FileInputStream');
let OutputStream = java.import('java.io.FileOutputStream');

/**
 * This example demonstrates document information extraction.
 */
async function getDocumentInfoStream(groupdocs) {
  const comparer = new groupdocs.comparison.Comparer(new InputStream(Constants.SOURCE_WORD));

  let info = await comparer.getSource().getDocumentInfo();
  
  console.log(`\nFile type: ${info.getFileType().getFileFormat()}`);
  console.log(`Number of pages: ${info.getPageCount()}`);
  console.log(`Document size: ${info.getSize()} bytes`);
  
  console.log("\nDocument info extracted successfully.");
}

module.exports = getDocumentInfoStream