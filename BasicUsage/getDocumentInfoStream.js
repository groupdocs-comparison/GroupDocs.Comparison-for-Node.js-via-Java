const java = require('java');
const Constants = require('../constants');

// Import Java classes for stream operations
const InputStream = java.import('java.io.FileInputStream');

/**
 * This example demonstrates how to extract document information from a file stream.
 * Information includes file type, page count, and document size.
 * The document is loaded as a Java InputStream, which is useful when working with files in memory.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function getDocumentInfoStream(groupdocs) {
    console.log('\n================================================================================');
    console.log('Running Example: getDocumentInfoStream');
    console.log('Description: Extract document information from a file stream');
    console.log('================================================================================\n');

    console.log(`Document: ${Constants.SOURCE_WORD}`);
    console.log('Using file stream for document loading...\n');

    // Initialize comparer with source document stream
    const comparer = new groupdocs.comparison.Comparer(new InputStream(Constants.SOURCE_WORD));

    // Extract document information
    console.log('Extracting document information...');
    const info = await comparer.getSource().getDocumentInfo();
  
    // Display document information
    console.log(`\nDocument Information:`);
    console.log(`  File type: ${info.getFileType().getFileFormat()}`);
    console.log(`  Number of pages: ${info.getPageCount()}`);
    console.log(`  Document size: ${info.getSize()} bytes`);
  
    console.log(`\n✓ Example completed successfully!\n`);
}

module.exports = getDocumentInfoStream;