const examples = require('./comparisonExamples')

;(async () => {
  try {
    console.log('Start comparison. \nUncomment the example that you want to run.')
    await examples.setLicense() // You can pass the licensePath as an argument, it's optional

    await Promise.all([
      //   /* NOTE: Please uncomment the example you want to try out */
      //   /* Basic usage */
      examples.helloWorld(),
      // examples.compareCellsFromPath(),
      // examples.compareCellsFromStream(),
      // examples.compareDocumentsFromPath(),
      // examples.compareDocumentsFromStream(),
      // examples.compareDocumentsProtectedPath(),
      // examples.compareDocumentsProtectedStream(),
      // examples.compareImageFromPath(),
      // examples.compareImageFromStream(),
      // examples.getDocumentInfoPath(),
      // examples.getDocumentInfoStream(),
      // examples.getSupportedFormats(),

      //   /* Advanced usage */
      // examples.acceptRejectDetectedChangesPath(),
      // examples.acceptRejectDetectedChangesStream(),
      // examples.compareDocumentsSettingsStream(),
      // examples.compareFolderSaveAsTxt(),
      // examples.compareFolderSaveAsHtml(),
      // examples.compareMultipleWordsDocuments(),
      // examples.compareMultiplePdfDocuments(),
      // examples.compareMultipleTxtDocuments(),
      // examples.compareMultipleEmailDocuments(),
      // examples.compareMultipleDocumentsProtectedPath(),
      // examples.compareMultipleDocumentsProtectedStream(),
      // examples.compareMultipleDocumentsSettingsPath(),
      // examples.compareMultipleDocumentsSettingsStream(),
      // examples.compareMultipleDocumentsStream(),
      // examples.loadDocumentFromLocalDisc(),
      // examples.loadDocumentFromStream(),
      // examples.loadTextFromString(),
      // examples.setDocumentMetadataSource(),
      // examples.setDocumentMetadataTarget(),
      // examples.setPasswordForResultantDocument(),
    ])
    console.log('The end of process.')
    process.exit(0)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()