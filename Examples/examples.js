const groupdocs = require('@groupdocs/groupdocs.comparison');

// Constant Variables
const Constants = require('./constants');

const setLicense = require('./QuickStart/setLicense');
const helloWorld = require('./QuickStart/helloWorld');
const setMeteredLicense = require('./QuickStart/setMeteredLicense');

// Basic Usage
const compareCellsFromPath = require('./BasicUsage/compareCellsFromPath');
const compareCellsFromStream = require('./BasicUsage/compareCellsFromStream');
const compareDocumentsFromPath = require('./BasicUsage/compareDocumentsFromPath');
const compareDocumentsFromStream = require('./BasicUsage/compareDocumentsFromStream');
const compareDocumentsProtectedPath = require('./BasicUsage/compareDocumentsProtectedPath');
const compareDocumentsProtectedStream = require('./BasicUsage/compareDocumentsProtectedStream');
const compareImageFromPath = require('./BasicUsage/compareImageFromPath');
const compareImageFromStream = require('./BasicUsage/compareImageFromStream');
const getDocumentInfoPath = require('./BasicUsage/getDocumentInfoPath');
const getDocumentInfoStream = require('./BasicUsage/getDocumentInfoStream');
const getSupportedFormats = require('./BasicUsage/getSupportedFormats');
const compareMultiplePdfDocuments = require('./BasicUsage/compareMultiplePdfDocuments');

// Advanced Usage
const compareFolders = require('./AdvancedUsage/Comparison/compareFolders');
const acceptRejectDetectedChangesPath = require('./AdvancedUsage/Comparison/acceptRejectDetectedChangesPath');
const acceptRejectDetectedChangesStream = require('./AdvancedUsage/Comparison/acceptRejectDetectedChangesStream');
const compareDocumentsSettingsStream = require('./AdvancedUsage/Comparison/compareDocumentsSettingsStream');
const compareMultipleDocuments = require('./AdvancedUsage/Comparison/compareMultipleDocumentsPath');
const compareMultipleDocumentsProtectedPath = require('./AdvancedUsage/Comparison/compareMultipleDocumentsProtectedPath');
const compareMultipleDocumentsProtectedStream = require('./AdvancedUsage/Comparison/compareMultipleDocumentsProtectedStream');
const compareMultipleDocumentsSettingsPath = require('./AdvancedUsage/Comparison/compareMultipleDocumentsSettingsPath');
const compareMultipleDocumentsSettingsStream = require('./AdvancedUsage/Comparison/compareMultipleDocumentsSettingsStream');
const compareMultipleDocumentsStream = require('./AdvancedUsage/Comparison/compareMultipleDocumentsStream');
const loadDocumentFromLocalDisc = require('./AdvancedUsage/Loading/loadDocumentFromLocalDisc');
const loadDocumentFromStream = require('./AdvancedUsage/Loading/loadDocumentFromStream');
const loadTextFromString = require('./AdvancedUsage/Loading/loadTextFromString');
const setDocumentMetadataSource = require('./AdvancedUsage/Saving/setDocumentMetadataSource');
const setDocumentMetadataTarget = require('./AdvancedUsage/Saving/setDocumentMetadataTarget');
const setPasswordForResultantDocument = require('./AdvancedUsage/Saving/setPasswordForResultantDocument');

class Examples {
  async helloWorld() {
    return helloWorld(
      groupdocs,
      Constants.SOURCE_WORD,
      Constants.TARGET_WORD,
      Constants.outputPath,
      Constants.RESULT_WORD,
    );
  }

  async compareCellsFromPath() {
    return compareCellsFromPath(
      groupdocs,
      Constants.SOURCE_CELLS,
      Constants.TARGET_CELLS,
      Constants.outputPath,
      Constants.RESULT_CELLS,
    );
  }

  async compareCellsFromStream() {
    return compareCellsFromStream(
      groupdocs,
      Constants.SOURCE_CELLS,
      Constants.TARGET_CELLS,
      Constants.outputPath,
      Constants.RESULT_CELLS,
    );
  }

  async compareDocumentsFromPath() {
    return compareDocumentsFromPath(
      groupdocs,
      Constants.SOURCE_WORD,
      Constants.TARGET_WORD,
      Constants.outputPath,
      Constants.RESULT_WORD,
    );
  }

  async compareDocumentsFromStream() {
    return compareDocumentsFromStream(
      groupdocs,
      Constants.SOURCE_WORD,
      Constants.TARGET_WORD,
      Constants.outputPath,
      Constants.RESULT_WORD,
    );
  }

  async compareDocumentsProtectedPath() {
    return compareDocumentsProtectedPath(
      groupdocs,
      Constants.SOURCE_WORD_PROTECTED,
      Constants.TARGET_WORD_PROTECTED,
      '1234',
      '5678',
      Constants.outputPath,
      Constants.RESULT_WORD,
    );
  }

  async compareDocumentsProtectedStream() {
    return compareDocumentsProtectedStream(
      groupdocs,
      Constants.SOURCE_WORD_PROTECTED,
      Constants.TARGET_WORD_PROTECTED,
      '1234',
      '5678',
      Constants.outputPath,
      Constants.RESULT_WORD,
    );
  }

  async compareImageFromPath() {
    return compareImageFromPath(
      groupdocs,
      Constants.SOURCE_IMAGE,
      Constants.TARGET_IMAGE,
      Constants.outputPath,
      Constants.RESULT_IMAGE,
    );
  }

  async compareImageFromStream() {
    return compareImageFromStream(
      groupdocs,
      Constants.SOURCE_IMAGE,
      Constants.TARGET_IMAGE,
      Constants.outputPath,
      Constants.RESULT_IMAGE,
    );
  }

  async getDocumentInfoPath() {
    return getDocumentInfoPath(groupdocs, Constants.SOURCE_WORD);
  }

  async getDocumentInfoStream() {
    return getDocumentInfoStream(groupdocs, Constants.SOURCE_WORD);
  }

  async getSupportedFormats() {
    return getSupportedFormats(groupdocs);
  }

  async acceptRejectDetectedChangesPath() {
    return acceptRejectDetectedChangesPath(
      groupdocs,
      Constants.SOURCE_WORD,
      Constants.TARGET_WORD,
      Constants.outputPath,
      Constants.RESULT_WITH_ACCEPTED_CHANGE_WORD,
      Constants.RESULT_WITH_REJECTED_CHANGE_WORD,
    );
  }

  async acceptRejectDetectedChangesStream() {
    return acceptRejectDetectedChangesStream(
      groupdocs,
      Constants.SOURCE_WORD,
      Constants.TARGET_WORD,
      Constants.outputPath,
      Constants.RESULT_WITH_ACCEPTED_CHANGE_WORD,
      Constants.RESULT_WITH_REJECTED_CHANGE_WORD,
    );
  }

  async compareDocumentsSettingsStream() {
    return compareDocumentsSettingsStream(
      groupdocs,
      Constants.SOURCE_WORD,
      Constants.TARGET_WORD,
      Constants.outputPath,
      Constants.RESULT_WORD,
    );
  }

  async compareFolderSaveAsTxt() {
    return compareFolders.compareFolderSaveAsTxt(
      groupdocs,
      Constants.SOURCE_FOLDER,
      Constants.TARGET_FOLDER,
      Constants.outputPath,
      Constants.RESULT_FOLDER,
    );
  }

  async compareFolderSaveAsHtml() {
    return compareFolders.compareFolderSaveAsHtml(
      groupdocs,
      Constants.SOURCE_FOLDER,
      Constants.TARGET_FOLDER,
      Constants.outputPath,
      Constants.RESULT_FOLDER,
    );
  }

  async compareMultipleWordsDocuments() {
    return compareMultipleDocuments.compareMultipleWordsDocuments(
      groupdocs,
      Constants.SOURCE_WORD,
      [Constants.TARGET_WORD, Constants.TARGET2_WORD, Constants.TARGET3_WORD],
      Constants.outputPath,
      Constants.RESULT_WORD,
    );
  }

  async compareMultiplePdfDocuments() {
    return compareMultiplePdfDocuments(
      groupdocs,
      Constants.SOURCE_PDF,
      [Constants.TARGET_PDF, Constants.TARGET2_PDF, Constants.TARGET3_PDF],
      Constants.outputPath,
      Constants.RESULT_PDF,
    );
  }

  async compareMultipleTxtDocuments() {
    return compareMultipleDocuments.compareMultipleTxtDocuments(
      groupdocs,
      Constants.SOURCE_TXT,
      [Constants.TARGET_TXT, Constants.TARGET2_TXT, Constants.TARGET3_TXT],
      Constants.outputPath,
      Constants.RESULT_TXT,
    );
  }

  async compareMultipleEmailDocuments() {
    return compareMultipleDocuments.compareMultipleEmailDocuments(
      groupdocs,
      Constants.SOURCE_EMAIL,
      [Constants.TARGET_EMAIL, Constants.TARGET2_EMAIL, Constants.TARGET3_EMAIL],
      Constants.outputPath,
      Constants.RESULT_EMAIL,
    );
  }

  async compareMultipleDocumentsProtectedPath() {
    return compareMultipleDocumentsProtectedPath(
      groupdocs,
      Constants.SOURCE_WORD_PROTECTED,
      [Constants.TARGET_WORD_PROTECTED, Constants.TARGET2_WORD_PROTECTED, Constants.TARGET3_WORD_PROTECTED],
      '1234',
      '5678',
      Constants.outputPath,
      Constants.RESULT_WORD,
    );
  }

  async compareMultipleDocumentsProtectedStream() {
    return compareMultipleDocumentsProtectedStream(
      groupdocs,
      Constants.SOURCE_WORD_PROTECTED,
      [Constants.TARGET_WORD_PROTECTED, Constants.TARGET2_WORD_PROTECTED, Constants.TARGET3_WORD_PROTECTED],
      '1234',
      '5678',
      Constants.outputPath,
      Constants.RESULT_WORD,
    );
  }

  async compareMultipleDocumentsSettingsPath() {
    return compareMultipleDocumentsSettingsPath(
      groupdocs,
      Constants.SOURCE_WORD,
      [Constants.TARGET_WORD, Constants.TARGET2_WORD, Constants.TARGET3_WORD],
      Constants.outputPath,
      Constants.RESULT_WORD,
    );
  }

  async compareMultipleDocumentsSettingsStream() {
    return compareMultipleDocumentsSettingsStream(
      groupdocs,
      Constants.SOURCE_WORD,
      [Constants.TARGET_WORD, Constants.TARGET2_WORD, Constants.TARGET3_WORD],
      Constants.outputPath,
      Constants.RESULT_WORD,
    );
  }

  async compareMultipleDocumentsStream() {
    return compareMultipleDocumentsStream(
      groupdocs,
      Constants.SOURCE_WORD,
      [Constants.TARGET_WORD, Constants.TARGET2_WORD, Constants.TARGET3_WORD],
      Constants.outputPath,
      Constants.RESULT_WORD,
    );
  }

  async loadDocumentFromLocalDisc() {
    return loadDocumentFromLocalDisc(
      groupdocs,
      Constants.SOURCE_WORD,
      Constants.TARGET_WORD,
      Constants.outputPath,
      Constants.RESULT_WORD,
    );
  }

  async loadDocumentFromStream() {
    return loadDocumentFromStream(
      groupdocs,
      Constants.SOURCE_WORD,
      Constants.TARGET_WORD,
      Constants.outputPath,
      Constants.RESULT_WORD,
    );
  }

  async loadTextFromString() {
    return loadTextFromString(
      groupdocs,
      'source text',
      'target text',
      Constants.outputPath,
      Constants.RESULT_TXT,
    );
  }

  async setDocumentMetadataSource() {
    return setDocumentMetadataSource(
      groupdocs,
      Constants.SOURCE_WORD,
      Constants.TARGET_WORD,
      Constants.outputPath,
      Constants.RESULT_WORD,
    );
  }

  async setDocumentMetadataTarget() {
    return setDocumentMetadataTarget(
      groupdocs,
      Constants.SOURCE_WORD,
      Constants.TARGET_WORD,
      Constants.outputPath,
      Constants.RESULT_WORD,
    );
  }

  async setPasswordForResultantDocument() {
    return setPasswordForResultantDocument(
      groupdocs,
      Constants.SOURCE_WORD,
      Constants.TARGET_WORD,
      '3333',
      Constants.outputPath,
      Constants.RESULT_WORD,
    );
  }

  async setMeteredLicense() {
    return setMeteredLicense(groupdocs, '*****', '*****');
  }

  async setLicense(licensePath = '') {
    const path = licensePath || Constants.LicensePath;
    if (path) {
      return setLicense(groupdocs, path);
    }
    return Promise.resolve();
  }
}

module.exports = new Examples();
