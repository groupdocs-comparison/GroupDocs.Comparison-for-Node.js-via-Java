const path = require('path');
const java = require('java');
const Constants = require('../../constants');

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
 */
async function acceptRejectDetectedChangesStream(groupdocs) {
    try {
        // Initialize comparer with source document stream
        const comparer = new groupdocs.Comparer(new InputStream(Constants.SOURCE_WORD));

        // Create output directory and file paths
        const outputDirectory = Constants.createOutputFolder('acceptRejectDetectedChangesStream');
        const outputPathAccepted = path.join(outputDirectory, Constants.RESULT_WITH_ACCEPTED_CHANGE_WORD);
        const outputPathRejected = path.join(outputDirectory, Constants.RESULT_WITH_REJECTED_CHANGE_WORD);

        // Add target document stream and perform comparison
        comparer.add(new InputStream(Constants.TARGET_WORD));
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

        console.log(`\nChanges updated successfully.\nCheck output in ${outputPathAccepted} and ${outputPathRejected}.`);
    } catch (error) {
        console.error('An error occurred during the change application:', error);
    }
}

module.exports = acceptRejectDetectedChangesStream;
