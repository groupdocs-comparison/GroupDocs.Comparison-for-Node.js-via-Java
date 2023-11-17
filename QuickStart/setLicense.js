
/**
 * This example demonstrates how to set license
 */
async function setLicense(groupdocs, licensePath) {
  const lic = new groupdocs.comparison.License()
  lic.setLicense(licensePath);
}

module.exports = setLicense
