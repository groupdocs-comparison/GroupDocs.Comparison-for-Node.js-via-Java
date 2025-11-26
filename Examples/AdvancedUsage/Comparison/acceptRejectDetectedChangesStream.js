const java = require('java');
const { getOutputFilePath } = require('../../utils');

// Import Java classes for stream operations and array operations
const InputStream = java.import('java.io.FileInputStream');
const Arrays = java.import('java.util.Arrays');

/**
 * This example demonstrates how to accept or reject detected changes in compared documents using streams.
 * After comparing documents loaded as streams, you can programmatically accept or reject specific changes
 * and save the result with the applied changes.
 * Documents are loaded as Java InputStreams, which is useful when working with files in memory.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} source - Path to source document
 * @param {string} target - Path to target document
 * @param {string} outputFolder - Output folder path
 * @param {string} resultAcceptedFileName - Result file name for accepted changes
 * @param {string} resultRejectedFileName - Result file name for rejected changes
 */
async function acceptRejectDetectedChangesStream(
  groupdocs,
  source,
  target,
  outputFolder,
  resultAcceptedFileName,
  resultRejectedFileName,
) {
  const exampleName = 'acceptRejectDetectedChangesStream';

  console.log('\n================================================================================');
  console.log('Running Example: acceptRejectDetectedChangesStream');
  console.log('Description: Accept or reject detected changes programmatically using streams');
  console.log('================================================================================\n');

  try {
    // Create output directory and file paths
    const outputPathAccepted = getOutputFilePath(exampleName, resultAcceptedFileName, outputFolder);
    const outputPathRejected = getOutputFilePath(exampleName, resultRejectedFileName, outputFolder);

    console.log(`Source document: ${source}`);
    console.log(`Target document: ${target}`);
    console.log(`Output (accepted changes): ${outputPathAccepted}`);
    console.log(`Output (rejected changes): ${outputPathRejected}\n`);

    // Initialize comparer with source document stream
    const comparer = new groupdocs.Comparer(new InputStream(source));

    // Add target document stream and perform comparison
    console.log('Comparing documents...');
    comparer.add(new InputStream(target));
    await comparer.compare();

    // Get detected changes
    let changes = await comparer.getChanges();

    // Accept the first change and save result
    changes[0].setComparisonAction(groupdocs.ComparisonAction.ACCEPT);
    const applyChangeOptionsAccepted = new groupdocs.ApplyChangeOptions();
    applyChangeOptionsAccepted.setSaveOriginalState(true);
    applyChangeOptionsAccepted.setChanges(Arrays.asList(changes));
    await comparer.applyChanges(outputPathRejected, applyChangeOptionsAccepted);

    // Re-fetch changes and reject the first change, then save result
    changes = await comparer.getChanges();
    changes[0].setComparisonAction(groupdocs.ComparisonAction.REJECT);
    const applyChangeOptionsRejected = new groupdocs.ApplyChangeOptions();
    applyChangeOptionsRejected.setChanges(Arrays.asList(changes));
    await comparer.applyChanges(outputPathAccepted, applyChangeOptionsRejected);

    console.log('\n✓ Example completed successfully!');
    console.log(`  Accepted changes saved to: ${outputPathAccepted}`);
    console.log(`  Rejected changes saved to: ${outputPathRejected}\n`);
  } catch (error) {
    console.error('\n✗ Error in acceptRejectDetectedChangesStream:', error.message);
    console.error(error);
    throw error;
  }
}

module.exports = acceptRejectDetectedChangesStream;
