/**
 * This example demonstrates how to retrieve the list of supported file formats
 * that can be compared using GroupDocs.Comparison.
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
async function getSupportedFormats(groupdocs) {
    console.log('\n================================================================================');
    console.log('Running Example: getSupportedFormats');
    console.log('Description: Retrieve list of supported file formats');
    console.log('================================================================================\n');

    try {
        // Retrieve the supported file types
        console.log('Retrieving supported file types...\n');
        const fileTypes = await groupdocs.FileType.getSupportedFileTypes();

        // Display all supported file types
        let count = 0;
        while (fileTypes.size() > count) {
            console.log(fileTypes.get(count).toString());
            count++;
        }

        console.log(`\n✓ Example completed successfully!`);
        console.log(`  Total supported formats: ${fileTypes.size()}\n`);
    } catch (error) {
        console.error(`\n✗ Error in getSupportedFormats:`, error.message);
        console.error(error);
        throw error;
    }
}

module.exports = getSupportedFormats;
