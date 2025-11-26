const { getOutputFilePath } = require('../../utils');

/**
 * Helper function to compare multiple documents at once.
 * The source document is compared against multiple target documents, and all differences
 * are consolidated into a single result document.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} sourcePath - Path to the source document
 * @param {string[]} targetPaths - Array of paths to target documents
 * @param {string} outputFolder - Output folder path
 * @param {string} resultFileName - Result file name
 */
async function compareMultipleDocuments(groupdocs, sourcePath, targetPaths, outputFolder, resultFileName) {
  const exampleName = 'compareMultipleDocuments';

  try {
    // Create output directory and file path
    const outputFileName = getOutputFilePath(exampleName, resultFileName, outputFolder);

    console.log(`Source document: ${sourcePath}`);
    console.log(`Target documents: ${targetPaths.length} file(s)`);
    targetPaths.forEach((path, index) => console.log(`  ${index + 1}. ${path}`));
    console.log(`Output file: ${outputFileName}\n`);

    // Initialize comparer with source document
    const comparer = new groupdocs.Comparer(sourcePath);

    // Add all target documents for comparison
    console.log('Adding target documents...');
    for (const targetPath of targetPaths) {
      comparer.add(targetPath);
    }

    // Perform comparison and save result
    console.log('Comparing multiple documents...');
    await comparer.compare(outputFileName);

    console.log('\n✓ Example completed successfully!');
    console.log(`  Output saved to: ${outputFileName}\n`);
  } catch (error) {
    console.error('\n✗ Error in compareMultipleDocuments:', error.message);
    console.error(error);
    throw error;
  }
}

/**
 * This example demonstrates how to compare multiple Word documents at once.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} source - Path to source document
 * @param {string[]} targets - Array of paths to target documents
 * @param {string} outputFolder - Output folder path
 * @param {string} resultFileName - Result file name
 */
async function compareMultipleWordsDocuments(groupdocs, source, targets, outputFolder, resultFileName) {
  console.log('\n================================================================================');
  console.log('Running Example: compareMultipleWordsDocuments');
  console.log('Description: Compare multiple Word documents at once');
  console.log('================================================================================\n');

  await compareMultipleDocuments(
    groupdocs,
    source,
    targets,
    outputFolder,
    resultFileName,
  );
}

/**
 * This example demonstrates how to compare multiple text documents at once.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} source - Path to source document
 * @param {string[]} targets - Array of paths to target documents
 * @param {string} outputFolder - Output folder path
 * @param {string} resultFileName - Result file name
 */
async function compareMultipleTxtDocuments(groupdocs, source, targets, outputFolder, resultFileName) {
  console.log('\n================================================================================');
  console.log('Running Example: compareMultipleTxtDocuments');
  console.log('Description: Compare multiple text documents at once');
  console.log('================================================================================\n');

  await compareMultipleDocuments(
    groupdocs,
    source,
    targets,
    outputFolder,
    resultFileName,
  );
}

/**
 * This example demonstrates how to compare multiple email documents at once.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} source - Path to source document
 * @param {string[]} targets - Array of paths to target documents
 * @param {string} outputFolder - Output folder path
 * @param {string} resultFileName - Result file name
 */
async function compareMultipleEmailDocuments(groupdocs, source, targets, outputFolder, resultFileName) {
  console.log('\n================================================================================');
  console.log('Running Example: compareMultipleEmailDocuments');
  console.log('Description: Compare multiple email documents at once');
  console.log('================================================================================\n');

  await compareMultipleDocuments(
    groupdocs,
    source,
    targets,
    outputFolder,
    resultFileName,
  );
}

module.exports = {
  compareMultipleWordsDocuments,
  compareMultipleTxtDocuments,
  compareMultipleEmailDocuments,
};
