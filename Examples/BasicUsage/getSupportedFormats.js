const java = require("java");
let fileTypes = java.import('java.util.ArrayList');

async function getSupportedFormats(groupdocs) {
  try {
    // Retrieve the supported file types
    fileTypes = await groupdocs.comparison.FileType.getSupportedFileTypes();

    // Log the file types
    let count = 0;
    while (fileTypes.size() > count) 
    {
      console.log(fileTypes.get(count).toString());
      count++;
    }

    console.log("\nSupported file types retrieved successfully.");
  } catch (error) {
    console.error("An error occurred while retrieving supported file types:", error);
  }
}

module.exports = getSupportedFormats;
