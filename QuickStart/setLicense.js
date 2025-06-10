
/**
 * This example demonstrates how to set license
 */
async function setLicense(groupdocs, licFile) {
  if (!licFile || !licFile.endsWith('.lic')) 
  {
    console.log('License is not found, continuing with demo version!')
    return
  }

  const lic = new groupdocs.comparison.License();
  lic.setLicense(licFile);
  console.log('License set successfully.')
}

module.exports = setLicense
