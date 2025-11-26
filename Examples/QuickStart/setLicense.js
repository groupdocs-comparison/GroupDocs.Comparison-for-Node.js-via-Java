/**
 * This example demonstrates how to set a license for GroupDocs.Comparison.
 * The license file should be a valid .lic file. If no license is provided,
 * the library will run in demo mode with limitations.
 *
 * @param {Object} groupdocs - The GroupDocs.Comparison module instance
 * @param {string} licenseFile - Path to the license file (.lic)
 */
async function setLicense(groupdocs, licenseFile) {
  console.log('\n================================================================================');
  console.log('Running Example: setLicense');
  console.log('Description: Set license for GroupDocs.Comparison');
  console.log('================================================================================\n');

  // Validate license file
  if (!licenseFile || !licenseFile.endsWith('.lic')) {
    console.log('⚠ License file not found or invalid.');
    console.log('  Continuing with demo/trial version (with limitations).\n');
    return;
  }

  console.log(`License file: ${licenseFile}\n`);
  console.log('Setting license...');

  // Set the license
  const license = new groupdocs.License();
  license.setLicense(licenseFile);

  console.log('✓ License set successfully!\n');
}

module.exports = setLicense;
