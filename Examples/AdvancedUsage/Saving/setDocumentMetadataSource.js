const { getOutputFilePath } = require('../../utils');

/**
 * This example demonstrates how to set document metadata for the result document.
 * The metadata from the source document will be cloned to the result document.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} source - Path to source document
 * @param {string} target - Path to target document
 * @param {string} outputFolder - Output folder path
 * @param {string} resultFileName - Result file name
 */
async function setDocumentMetadataSource(groupdocs, source, target, outputFolder, resultFileName) {
  const exampleName = 'setDocumentMetadataSource';

  console.log('\n================================================================================');
  console.log('Running Example: setDocumentMetadataSource');
  console.log('Description: Set document metadata from source document');
  console.log('================================================================================\n');

  // Create output directory and file path
  const outputFileName = getOutputFilePath(exampleName, resultFileName, outputFolder);

  console.log(`Source document: ${source}`);
  console.log(`Target document: ${target}`);
  console.log(`Output file: ${outputFileName}\n`);

  // Initialize comparer with source document
  const comparer = new groupdocs.Comparer(source);

  // Add target document for comparison
  comparer.add(target);

  // Configure save options to clone metadata from source document
  const saveOptions = new groupdocs.SaveOptions();
  saveOptions.setCloneMetadataType(groupdocs.MetadataType.SOURCE);

  // Perform comparison and save result with source metadata
  console.log('Comparing documents with source metadata...');
  comparer.compare(outputFileName, saveOptions);

  console.log('\n✓ Example completed successfully!');
  console.log(`  Output saved to: ${outputFileName}\n`);
}

module.exports = setDocumentMetadataSource;
