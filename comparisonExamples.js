const comparison = require('@groupdocs/groupdocs.comparison')

// Constant Variables 
const Constants = require('./constants')

const setLicense = require('./QuickStart/setLicense')

const helloWorld = require('./QuickStart/helloWorld')
const setMeteredLicense = require('./QuickStart/SetMeteredLicense')

const compareFolders = require('./Examples/AdvancedUsage/Comparison/CompareFolders')
const acceptRejectDetectedChangesPath = require('./Examples/AdvancedUsage/Comparison/AcceptRejectDetectedChangesPath')
const acceptRejectDetectedChangesStream = require('./Examples/AdvancedUsage/Comparison/AcceptRejectDetectedChangesStream')
const compareDocumentsSettingsStream = require('./Examples/AdvancedUsage/Comparison/CompareDocumentsSettingsStream')
const compareMultipleDocuments = require('./Examples/AdvancedUsage/Comparison/CompareMultipleDocumentsPath')
const compareMultipleDocumentsProtectedPath = require('./Examples/AdvancedUsage/Comparison/CompareMultipleDocumentsProtectedPath')
const compareMultipleDocumentsProtectedStream = require('./Examples/AdvancedUsage/Comparison/CompareMultipleDocumentsProtectedStream')
const compareMultipleDocumentsSettingsPath = require('./Examples/AdvancedUsage/Comparison/CompareMultipleDocumentsSettingsPath')
const compareMultipleDocumentsSettingsStream = require('./Examples/AdvancedUsage/Comparison/CompareMultipleDocumentsSettingsStream')
const compareMultipleDocumentsStream = require('./Examples/AdvancedUsage/Comparison/CompareMultipleDocumentsStream')

const loadDocumentFromLocalDisc = require('./Examples/AdvancedUsage/Loading/LoadDocumentFromLocalDisc')
const loadDocumentFromStream = require('./Examples/AdvancedUsage/Loading/LoadDocumentFromStream')
const loadTextFromString = require('./Examples/AdvancedUsage/Loading/LoadTextFromString')

const setDocumentMetadataSource = require('./Examples/AdvancedUsage/Saving/SetDocumentMetadataSource')
const setDocumentMetadataTarget = require('./Examples/AdvancedUsage/Saving/SetDocumentMetadataTarget')
const setPasswordForResultantDocument = require('./Examples/AdvancedUsage/Saving/SetPasswordForResultantDocument')

const compareCellsFromPath = require('./Examples/BasicUsage/compareCellsFromPath')
const compareCellsFromStream = require('./Examples/BasicUsage/compareCellsFromStream')
const compareDocumentsFromPath = require('./Examples/BasicUsage/compareDocumentsFromPath')
const compareDocumentsFromStream = require('./Examples/BasicUsage/CompareDocumentsFromStream')
const compareDocumentsProtectedPath = require('./Examples/BasicUsage/CompareDocumentsProtectedPath')
const compareDocumentsProtectedStream = require('./Examples/BasicUsage/CompareDocumentsProtectedStream')
const compareImageFromPath = require('./Examples/BasicUsage/CompareImageFromPath')
const compareImageFromStream = require('./Examples/BasicUsage/CompareImageFromStream')
const getDocumentInfoPath = require('./Examples/BasicUsage/GetDocumentInfoPath')
const getDocumentInfoStream = require('./Examples/BasicUsage/GetDocumentInfoStream')
const getSupportedFormats = require('./Examples/BasicUsage/GetSupportedFormats')

class ComparisonExamples {
  constructor() {
    this.licensePath = Constants.LicensePath

    // Initialize the model
    this.comparison = comparison
  }
  
  async helloWorld() {
    return helloWorld(this)
  }

  async compareCellsFromPath() {
    return compareCellsFromPath(this);
  }

  async compareCellsFromStream() {
    return compareCellsFromStream(this);
  }

  async compareDocumentsFromPath() {
    return compareDocumentsFromPath(this);
  }

  async compareDocumentsFromStream() {
    return compareDocumentsFromStream(this);
  }

  async compareDocumentsProtectedPath() {
    return compareDocumentsProtectedPath(this);
  }

  async compareDocumentsProtectedStream() {
    return compareDocumentsProtectedStream(this);
  }

  async compareImageFromPath() {
    return compareImageFromPath(this);
  }

  async compareImageFromStream() {
    return compareImageFromStream(this);
  }

  async getDocumentInfoPath() {
    return getDocumentInfoPath(this);
  }

  async getDocumentInfoStream() {
    return getDocumentInfoStream(this);
  }

  async getSupportedFormats() {
    return getSupportedFormats(this);
  }

  async acceptRejectDetectedChangesPath() {
    return acceptRejectDetectedChangesPath(this);
  }

  async acceptRejectDetectedChangesStream() {
    return acceptRejectDetectedChangesStream(this);
  }

  async compareDocumentsSettingsStream() {
    return compareDocumentsSettingsStream(this);
  }

  async compareFolderSaveAsTxt() {
    return compareFolders.compareFolderSaveAsTxt(this);
  }
  
  async compareFolderSaveAsHtml() {
    return compareFolders.compareFolderSaveAsHtml(this);
  }

  async compareMultipleWordsDocuments() {
    return compareMultipleDocuments.compareMultipleWordsDocuments(this);
  }

  async compareMultiplePdfDocuments() {
    return compareMultipleDocuments.compareMultiplePdfDocuments(this);
  }

  async compareMultipleTxtDocuments() {
    return compareMultipleDocuments.compareMultipleTxtDocuments(this);
  }

  async compareMultipleEmailDocuments() {
    return compareMultipleDocuments.compareMultipleEmailDocuments(this);
  }
  
  async compareMultipleDocumentsProtectedPath() {
    return compareMultipleDocumentsProtectedPath(this);
  }

  async compareMultipleDocumentsProtectedStream() {
    return compareMultipleDocumentsProtectedStream(this);
  }

  async compareMultipleDocumentsSettingsPath() {
    return compareMultipleDocumentsSettingsPath(this);
  }

  async compareMultipleDocumentsSettingsStream() {
    return compareMultipleDocumentsSettingsStream(this);
  }

  async compareMultipleDocumentsStream() {
    return compareMultipleDocumentsStream(this);
  }

  async loadDocumentFromLocalDisc() {
    return loadDocumentFromLocalDisc(this);
  }

  async loadDocumentFromStream() {
    return loadDocumentFromStream(this);
  }

  async loadTextFromString() {
    return loadTextFromString(this);
  }

  async setDocumentMetadataSource() {
    return setDocumentMetadataSource(this);
  }

  async setDocumentMetadataTarget() {
    return setDocumentMetadataTarget(this);
  }

  async setPasswordForResultantDocument() {
    return setPasswordForResultantDocument(this);
  }

  async setMeteredLicense() {
    return setMeteredLicense(this);
  }

  async setLicense(licensePath = '') {
    if (licensePath) return setLicense(this, licensePath)
    else return setLicense(this, this.licensePath)
  }
}

module.exports = new ComparisonExamples()
