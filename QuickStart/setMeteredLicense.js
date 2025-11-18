/** 
 * This example demonstrates how to set a Metered license for GroupDocs.Comparison.
 * Metered licensing allows you to pay based on API usage rather than a fixed fee.
 * 
 * For more details about Metered licensing, please check:
 * https://purchase.groupdocs.com/faqs/licensing/metered/
 * 
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 */
function setMeteredLicense(groupdocs) {
    // Initialize the Metered class
    const metered = new groupdocs.comparison.Metered();
    
    // Replace with your actual Metered license keys from GroupDocs account
    const publicKey = "*****";
    const privateKey = "*****";
    
    // Apply Metered license keys
    metered.setMeteredKey(publicKey, privateKey);
    
    console.log("Metered license set successfully.");
}

module.exports = setMeteredLicense;
