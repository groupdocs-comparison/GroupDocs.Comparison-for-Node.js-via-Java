const groupdocs = require('@groupdocs/groupdocs.comparison')

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
  async helloWorld() {
    return helloWorld(groupdocs)
  }

  async compareCellsFromPath() {
    return compareCellsFromPath(groupdocs);
  }

  async compareCellsFromStream() {
    return compareCellsFromStream(groupdocs);
  }

  async compareDocumentsFromPath() {
    return compareDocumentsFromPath(groupdocs);
  }

  async compareDocumentsFromStream() {
    return compareDocumentsFromStream(groupdocs);
  }

  async compareDocumentsProtectedPath() {
    return compareDocumentsProtectedPath(groupdocs);
  }

  async compareDocumentsProtectedStream() {
    return compareDocumentsProtectedStream(groupdocs);
  }

  async compareImageFromPath() {
    return compareImageFromPath(groupdocs);
  }

  async compareImageFromStream() {
    return compareImageFromStream(groupdocs);
  }

  async getDocumentInfoPath() {
    return getDocumentInfoPath(groupdocs);
  }

  async getDocumentInfoStream() {
    return getDocumentInfoStream(groupdocs);
  }

  async getSupportedFormats() {
    return getSupportedFormats(groupdocs);
  }

  async acceptRejectDetectedChangesPath() {
    return acceptRejectDetectedChangesPath(groupdocs);
  }

  async acceptRejectDetectedChangesStream() {
    return acceptRejectDetectedChangesStream(groupdocs);
  }

  async compareDocumentsSettingsStream() {
    return compareDocumentsSettingsStream(groupdocs);
  }

  async compareFolderSaveAsTxt() {
    return compareFolders.compareFolderSaveAsTxt(groupdocs);
  }
  
  async compareFolderSaveAsHtml() {
    return compareFolders.compareFolderSaveAsHtml(groupdocs);
  }

  async compareMultipleWordsDocuments() {
    return compareMultipleDocuments.compareMultipleWordsDocuments(groupdocs);
  }

  async compareMultiplePdfDocuments() {
    return compareMultipleDocuments.compareMultiplePdfDocuments(groupdocs);
  }

  async compareMultipleTxtDocuments() {
    return compareMultipleDocuments.compareMultipleTxtDocuments(groupdocs);
  }

  async compareMultipleEmailDocuments() {
    return compareMultipleDocuments.compareMultipleEmailDocuments(groupdocs);
  }
  
  async compareMultipleDocumentsProtectedPath() {
    return compareMultipleDocumentsProtectedPath(groupdocs);
  }

  async compareMultipleDocumentsProtectedStream() {
    return compareMultipleDocumentsProtectedStream(groupdocs);
  }

  async compareMultipleDocumentsSettingsPath() {
    return compareMultipleDocumentsSettingsPath(groupdocs);
  }

  async compareMultipleDocumentsSettingsStream() {
    return compareMultipleDocumentsSettingsStream(groupdocs);
  }

  async compareMultipleDocumentsStream() {
    return compareMultipleDocumentsStream(groupdocs);
  }

  async loadDocumentFromLocalDisc() {
    return loadDocumentFromLocalDisc(groupdocs);
  }

  async loadDocumentFromStream() {
    return loadDocumentFromStream(groupdocs);
  }

  async loadTextFromString() {
    return loadTextFromString(groupdocs);
  }

  async setDocumentMetadataSource() {
    return setDocumentMetadataSource(groupdocs);
  }

  async setDocumentMetadataTarget() {
    return setDocumentMetadataTarget(groupdocs);
  }

  async setPasswordForResultantDocument() {
    return setPasswordForResultantDocument(groupdocs);
  }

  async setMeteredLicense() {
    return setMeteredLicense(groupdocs);
  }

  async setLicense(licensePath = '') {
    if (licensePath) return setLicense(groupdocs, licensePath)
    else return setLicense(groupdocs, Constants.LicensePath)
  }
}

module.exports = new Examples()
