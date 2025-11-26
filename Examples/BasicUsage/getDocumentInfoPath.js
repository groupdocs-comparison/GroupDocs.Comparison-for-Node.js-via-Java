/**
 * This example demonstrates how to extract document information from a file.
 * Information includes file type, page count, and document size.
 *
 * For more details about extracting document information, please check the relevant documentation.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} source - Path to source document
 */
async function getDocumentInfoPath(groupdocs, source) {
  console.log('\n================================================================================');
  console.log('Running Example: getDocumentInfoPath');
  console.log('Description: Extract document information (file type, page count, size)');
  console.log('================================================================================\n');

  console.log(`Document: ${source}\n`);

  // Initialize comparer with source document
  const comparer = new groupdocs.Comparer(source);

  // Extract document information
  console.log('Extracting document information...');
  const info = await comparer.getSource().getDocumentInfo();

  // Display document information
  console.log('\nDocument Information:');
  console.log(`  File type: ${info.getFileType().getFileFormat()}`);
  console.log(`  Number of pages: ${info.getPageCount()}`);
  console.log(`  Document size: ${info.getSize()} bytes`);

  console.log('\n✓ Example completed successfully!\n');
}

module.exports = getDocumentInfoPath;
