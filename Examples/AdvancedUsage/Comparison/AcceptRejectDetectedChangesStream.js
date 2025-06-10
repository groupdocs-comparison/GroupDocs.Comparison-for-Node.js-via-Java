/**
 * This example demonstrates how to update (accept/reject) changes from stream.
 */
const path = require('path');
const Constants = require('../../../constants');
const java = require('java');
let Arrays = java.import('java.util.Arrays')
let List = java.import('java.util.List')
let InputStream = java.import('java.io.FileInputStream');
let OutputStream = java.import('java.io.FileOutputStream');

async function acceptRejectDetectedChangesStream(groupdocs) {
  try {
    // Initialize the comparer object with the source file path
    const comparer = new groupdocs.comparison.Comparer(new InputStream(Constants.SOURCE_WORD));

    // Prepare the output file path
    const outputDirectory = Constants.createOutputFolder('acceptRejectDetectedChangesStream');
    const outputPathAccepted = path.join(outputDirectory, Constants.RESULT_WITH_ACCEPTED_CHANGE_WORD);
    const outputPathRejected = path.join(outputDirectory, Constants.RESULT_WITH_REJECTED_CHANGE_WORD);

    // Add the target file and compare
    comparer.add(new InputStream(Constants.TARGET_WORD));
    await comparer.compare();

    // Reject the first change
    let changes = await comparer.getChanges();
    changes[0].setComparisonAction(groupdocs.comparison.ComparisonAction.ACCEPT);
    let applyChangeOptionsAccepted = new groupdocs.comparison.ApplyChangeOptions();
    applyChangeOptionsAccepted.setSaveOriginalState(true);
    applyChangeOptionsAccepted.setChanges(Arrays.asList(changes));
    await comparer.applyChanges(outputPathRejected, applyChangeOptionsAccepted);

    // Accept the first change
    changes = await comparer.getChanges(); // Re-fetch the changes
    changes[0].setComparisonAction(groupdocs.comparison.ComparisonAction.REJECT);
    let applyChangeOptionsRejected = new groupdocs.comparison.ApplyChangeOptions();
    applyChangeOptionsRejected.setChanges(Arrays.asList(changes));
    await comparer.applyChanges(outputPathAccepted, applyChangeOptionsRejected);

    console.log(`\nChanges updated successfully.\nCheck output in ${outputPathAccepted} and ${outputPathRejected}.`);
  } catch (error) {
    console.error('An error occurred during the change application:', error);
  }
}

module.exports = acceptRejectDetectedChangesStream;
