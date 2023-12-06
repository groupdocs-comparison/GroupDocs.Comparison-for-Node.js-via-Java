const path = require('path');
const Constants = require('../../../constants');

/**
 * This example demonstrates comparing of two texts loaded by string variables
 */
async function loadTextFromString(groupdocs) {
    const outputDirectory = Constants.getOutputDirectoryPath();
    const outputFileName = path.join(outputDirectory, Constants.RESULT_TXT);
  
	const loadOptions = new groupdocs.comparison.LoadOptions();
	loadOptions.setLoadText(true);

    const comparer = new groupdocs.comparison.Comparer("source text", loadOptions);

    comparer.add("target text", loadOptions);

    comparer.compare(outputFileName);
	console.log("Result string: \n" + comparer.getResultString());
  
    console.log(`\nDocuments compared successfully.\nCheck output in ${outputFileName}.`);
  }

  module.exports = loadTextFromString;