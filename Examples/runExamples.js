const examples = require('./examples')

  ; (async () => {
  try {
    console.log('GroupDocs.Comparison for Node.js via Java Code Examples');
    await examples.setLicense();

    await Promise.all([
      /* Basic usage */
      examples.helloWorld(),
      examples.compareCellsFromPath(),
      examples.compareCellsFromStream(),
      examples.compareDocumentsFromPath(),
      examples.compareDocumentsFromStream(),
      examples.compareDocumentsProtectedPath(),
      examples.compareDocumentsProtectedStream(),
      examples.compareImageFromPath(),
      examples.compareImageFromStream(),
      examples.getDocumentInfoPath(),
      examples.getDocumentInfoStream(),
      examples.getSupportedFormats(),

      /* Advanced usage */
      examples.acceptRejectDetectedChangesPath(),
      examples.acceptRejectDetectedChangesStream(),
      examples.compareDocumentsSettingsStream(),
      examples.compareFolderSaveAsTxt(),
      examples.compareFolderSaveAsHtml(),
      examples.compareMultipleWordsDocuments(),
      examples.compareMultipleTxtDocuments(),
      examples.compareMultipleEmailDocuments(),
      examples.compareMultipleDocumentsProtectedPath(),
      examples.compareMultipleDocumentsProtectedStream(),
      examples.compareMultipleDocumentsSettingsPath(),
      examples.compareMultipleDocumentsSettingsStream(),
      examples.compareMultipleDocumentsStream(),
      examples.loadDocumentFromLocalDisc(),
      examples.loadDocumentFromStream(),
      examples.loadTextFromString(),
      examples.setDocumentMetadataSource(),
      examples.setDocumentMetadataTarget(),
      examples.setPasswordForResultantDocument(),
    ]);

    console.log('\n================================================================================');
    console.log('Done! All examples completed successfully.');
    console.log('================================================================================\n');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
