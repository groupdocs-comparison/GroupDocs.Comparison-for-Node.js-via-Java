const path = require('path');
const Constants = require('../../constants');

/**
 * This example demonstrates how to compare two text strings directly without loading from files.
 * Text content is provided as string variables, which is useful for comparing text in memory
 * or from non-file sources.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function loadTextFromString(groupdocs) {
    // Create output directory and file path
    const outputDirectory = Constants.createOutputFolder('loadTextFromString');
    const outputFileName = path.join(outputDirectory, Constants.RESULT_TXT);
  
    // Configure load options to indicate we're loading text from strings
    const loadOptions = new groupdocs.comparison.LoadOptions();
    loadOptions.setLoadText(true);

    // Initialize comparer with source text string
    const comparer = new groupdocs.comparison.Comparer("source text", loadOptions);

    // Add target text string for comparison
    comparer.add("target text", loadOptions);

    // Perform comparison and save result
    comparer.compare(outputFileName);
    
    // Display the comparison result as a string
    console.log("Result string: \n" + comparer.getResultString());
  
    console.log(`\nDocuments compared successfully.\nCheck output in ${outputFileName}.`);
}

module.exports = loadTextFromString;