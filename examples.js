const comparison = require('@groupdocs/groupdocs.comparison')


// Constant Variables 
const Constants = require('./constants')

const setLicense = require('./QuickStart/setLicense')
const helloWorld = require('./QuickStart/helloWorld')
const setMeteredLicense = require('./QuickStart/setMeteredLicense')

// Basic Usage
const compareCellsFromPath = require('./BasicUsage/compareCellsFromPath')
const compareCellsFromStream = require('./BasicUsage/compareCellsFromStream')
const compareDocumentsFromPath = require('./BasicUsage/compareDocumentsFromPath')
const compareDocumentsFromStream = require('./BasicUsage/compareDocumentsFromStream')
const compareDocumentsProtectedPath = require('./BasicUsage/compareDocumentsProtectedPath')
const compareDocumentsProtectedStream = require('./BasicUsage/compareDocumentsProtectedStream')
const compareImageFromPath = require('./BasicUsage/compareImageFromPath')
const compareImageFromStream = require('./BasicUsage/compareImageFromStream')
const getDocumentInfoPath = require('./BasicUsage/getDocumentInfoPath')
const getDocumentInfoStream = require('./BasicUsage/getDocumentInfoStream')
const getSupportedFormats = require('./BasicUsage/getSupportedFormats')

// Advanced Usage
const compareFolders = require('./AdvancedUsage/Comparison/compareFolders')
const acceptRejectDetectedChangesPath = require('./AdvancedUsage/Comparison/acceptRejectDetectedChangesPath')
const acceptRejectDetectedChangesStream = require('./AdvancedUsage/Comparison/acceptRejectDetectedChangesStream')
const compareDocumentsSettingsStream = require('./AdvancedUsage/Comparison/compareDocumentsSettingsStream')
const compareMultipleDocuments = require('./AdvancedUsage/Comparison/compareMultipleDocumentsPath')
const compareMultipleDocumentsProtectedPath = require('./AdvancedUsage/Comparison/compareMultipleDocumentsProtectedPath')
const compareMultipleDocumentsProtectedStream = require('./AdvancedUsage/Comparison/compareMultipleDocumentsProtectedStream')
const compareMultipleDocumentsSettingsPath = require('./AdvancedUsage/Comparison/compareMultipleDocumentsSettingsPath')
const compareMultipleDocumentsSettingsStream = require('./AdvancedUsage/Comparison/compareMultipleDocumentsSettingsStream')
const compareMultipleDocumentsStream = require('./AdvancedUsage/Comparison/compareMultipleDocumentsStream')
const loadDocumentFromLocalDisc = require('./AdvancedUsage/Loading/loadDocumentFromLocalDisc')
const loadDocumentFromStream = require('./AdvancedUsage/Loading/loadDocumentFromStream')
const loadTextFromString = require('./AdvancedUsage/Loading/loadTextFromString')
const setDocumentMetadataSource = require('./AdvancedUsage/Saving/setDocumentMetadataSource')
const setDocumentMetadataTarget = require('./AdvancedUsage/Saving/setDocumentMetadataTarget')
const setPasswordForResultantDocument = require('./AdvancedUsage/Saving/setPasswordForResultantDocument')


class Examples {
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

module.exports = new Examples()
