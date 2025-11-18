const path = require('path');
const java = require('java');
const Constants = require('../../constants');

// Import Java classes for array operations
const Arrays = java.import('java.util.Arrays');

/**
 * This example demonstrates how to accept or reject detected changes in compared documents.
 * After comparing documents, you can programmatically accept or reject specific changes
 * and save the result with the applied changes.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function acceptRejectDetectedChangesPath(groupdocs) {
    console.log('\n================================================================================');
    console.log('Running Example: acceptRejectDetectedChangesPath');
    console.log('Description: Accept or reject detected changes programmatically');
    console.log('================================================================================\n');

    try {
        // Create output directory and file paths
        const outputDirectory = Constants.createOutputFolder('acceptRejectDetectedChangesPath');
        const outputPathAccepted = path.join(outputDirectory, Constants.RESULT_WITH_ACCEPTED_CHANGE_WORD);
        const outputPathRejected = path.join(outputDirectory, Constants.RESULT_WITH_REJECTED_CHANGE_WORD);

        console.log(`Source document: ${Constants.SOURCE_WORD}`);
        console.log(`Target document: ${Constants.TARGET_WORD}`);
        console.log(`Output (accepted changes): ${outputPathAccepted}`);
        console.log(`Output (rejected changes): ${outputPathRejected}\n`);

        // Initialize comparer with source document
        const comparer = new groupdocs.comparison.Comparer(Constants.SOURCE_WORD);

        // Add target document and perform comparison
        console.log('Comparing documents...');
        comparer.add(Constants.TARGET_WORD);
        await comparer.compare();

        // Get detected changes
        console.log('Detecting changes...');
        let changes = await comparer.getChanges();
        console.log(`Found ${changes.length} change(s)\n`);
        
        // Accept the first change and save result
        console.log('Applying accepted changes...');
        changes[0].setComparisonAction(groupdocs.comparison.ComparisonAction.ACCEPT);
        const applyChangeOptionsAccepted = new groupdocs.comparison.ApplyChangeOptions();
        applyChangeOptionsAccepted.setSaveOriginalState(true);
        applyChangeOptionsAccepted.setChanges(Arrays.asList(changes));
        await comparer.applyChanges(outputPathRejected, applyChangeOptionsAccepted);

        // Re-fetch changes and reject the first change, then save result
        console.log('Applying rejected changes...');
        changes = await comparer.getChanges();
        changes[0].setComparisonAction(groupdocs.comparison.ComparisonAction.REJECT);
        const applyChangeOptionsRejected = new groupdocs.comparison.ApplyChangeOptions();
        applyChangeOptionsRejected.setChanges(Arrays.asList(changes));
        await comparer.applyChanges(outputPathAccepted, applyChangeOptionsRejected);

        console.log(`\n✓ Example completed successfully!`);
        console.log(`  Accepted changes saved to: ${outputPathAccepted}`);
        console.log(`  Rejected changes saved to: ${outputPathRejected}\n`);
    } catch (error) {
        console.error(`\n✗ Error in acceptRejectDetectedChangesPath:`, error.message);
        console.error(error);
        throw error;
    }
}

module.exports = acceptRejectDetectedChangesPath;
