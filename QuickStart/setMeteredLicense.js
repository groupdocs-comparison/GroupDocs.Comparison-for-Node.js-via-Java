/** 
 * This example demonstrates how to set a Metered license for GroupDocs.
 * For more details about Metered licensing, please check the following link:
 * https://purchase.groupdocs.com/faqs/licensing/metered
 */

function setMeteredLicense(groupdocs) {
    // Initialize the Metered class
    const metered = new groupdocs.comparison.Metered();
    const publicKey = "*****";
    const privateKey = "*****";
    
    // Apply Metered license keys
    metered.setMeteredKey(publicKey, privateKey);
    
    console.log("Metered license set successfully.");
}

module.exports = setMeteredLicense;
