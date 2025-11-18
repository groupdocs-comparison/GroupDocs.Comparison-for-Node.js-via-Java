const path = require('path');
const Constants = require('../constants');

/**
 * This example demonstrates how to compare multiple PDF documents at once.
 * The source document is compared against multiple target documents, and all differences
 * are consolidated into a single result document.
 * 
 * For more details about comparing PDF documents, please check the relevant documentation.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function compareMultiplePdfDocuments(groupdocs) {
    console.log('\n================================================================================');
    console.log('Running Example: compareMultiplePdfDocuments');
    console.log('Description: Compare multiple PDF documents at once');
    console.log('================================================================================\n');

    // Create output directory and file path
    const outputDirectory = Constants.createOutputFolder('compareMultiplePdfDocuments');
    const outputFileName = path.join(outputDirectory, Constants.RESULT_PDF);

    const targetFiles = [Constants.TARGET_PDF, Constants.TARGET2_PDF, Constants.TARGET3_PDF];
    
    console.log(`Source PDF: ${Constants.SOURCE_PDF}`);
    console.log(`Target PDFs: ${targetFiles.length} file(s)`);
    targetFiles.forEach((file, index) => console.log(`  ${index + 1}. ${file}`));
    console.log(`Output file: ${outputFileName}\n`);

    // Initialize comparer with source PDF document
    const comparer = new groupdocs.comparison.Comparer(Constants.SOURCE_PDF);

    // Add multiple target PDF documents for comparison
    console.log('Adding target PDF documents...');
    targetFiles.forEach(targetFilePath => {
        comparer.add(targetFilePath);
    });

    // Perform comparison and save result
    console.log('Comparing multiple PDF documents...');
    comparer.compare(outputFileName);
  
    console.log(`\n✓ Example completed successfully!`);
    console.log(`  Output saved to: ${outputFileName}\n`);
}

module.exports = compareMultiplePdfDocuments;