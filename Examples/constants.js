require('dotenv').config();
const path = require('path');
const fs = require('fs');

class Constants {
  constructor() {

    // Use local sample files directory
    this.localSamplesPath = 'Resources/SampleFiles';
    this.samplesPath = path.join(__dirname, this.localSamplesPath);

    if (!fs.existsSync(this.samplesPath)) {
      throw new Error(`Could not find samples directory at ${this.samplesPath}`);
    }

    this.outputPath = 'Output';

    // License path from environment variable (full path to .lic file)
    this.LicensePath = process.env.GROUPDOCS_LICENSE || '';

    this.SOURCE_CELLS = this.getSampleFilePath('source.xlsx');
    this.TARGET_CELLS = this.getSampleFilePath('target.xlsx');

    this.SOURCE_WORD = this.getSampleFilePath('source.docx');
    this.SOURCE_WORD_FONT = this.getSampleFilePath('source_font.docx');
    this.TARGET_WORD = this.getSampleFilePath('target.docx');
    this.TARGET_WORD_FONT = this.getSampleFilePath('target_font.docx');
    this.TARGET2_WORD = this.getSampleFilePath('target2.docx');
    this.TARGET3_WORD = this.getSampleFilePath('target3.docx');
    this.SOURCE_WORD_PROTECTED = this.getSampleFilePath('source_protected.docx');
    this.TARGET_WORD_PROTECTED = this.getSampleFilePath('target_protected.docx');
    this.TARGET2_WORD_PROTECTED = this.getSampleFilePath('target2_protected.docx');
    this.TARGET3_WORD_PROTECTED = this.getSampleFilePath('target3_protected.docx');

    this.SOURCE_SLIDES = this.getSampleFilePath('source.pptx');
    this.TARGET_SLIDES = this.getSampleFilePath('target.pptx');

    this.SOURCE_TXT = this.getSampleFilePath('source.txt');
    this.TARGET_TXT = this.getSampleFilePath('target.txt');
    this.TARGET2_TXT = this.getSampleFilePath('target2.txt');
    this.TARGET3_TXT = this.getSampleFilePath('target3.txt');

    this.SOURCE_EMAIL = this.getSampleFilePath('source.eml');
    this.TARGET_EMAIL = this.getSampleFilePath('target.eml');
    this.TARGET2_EMAIL = this.getSampleFilePath('target2.eml');
    this.TARGET3_EMAIL = this.getSampleFilePath('target3.eml');

    this.SOURCE_PDF = this.getSampleFilePath('source.pdf');
    this.TARGET_PDF = this.getSampleFilePath('target.pdf');
    this.TARGET2_PDF = this.getSampleFilePath('target2.pdf');
    this.TARGET3_PDF = this.getSampleFilePath('target3.pdf');

    this.SOURCE_DIAGRAM = this.getSampleFilePath('source.vsdx');
    this.TARGET_DIAGRAM = this.getSampleFilePath('target.vsdx');
    this.TARGET2_DIAGRAM = this.getSampleFilePath('target2.vsdx');
    this.TARGET3_DIAGRAM = this.getSampleFilePath('target3.vsdx');

    this.SOURCE_IMAGE = this.getSampleFilePath('source.png');
    this.TARGET_IMAGE = this.getSampleFilePath('target.png');

    this.SOURCE_WITH_FOOTER = this.getSampleFilePath('sourceWithFooter.docx');
    this.TARGET_WITH_FOOTER = this.getSampleFilePath('targetWithFooter.docx');

    this.SOURCE_COMPARE_OPTIONS = this.getSampleFilePath('source_compare_options.docx');
    this.TARGET_COMPARE_OPTIONS = this.getSampleFilePath('target_compare_options.docx');

    this.SOURCE_REVISIONS = this.getSampleFilePath('revision.docx');

    this.SOURCE_FOLDER = this.getSampleFilePath('SourceFolder');
    this.TARGET_FOLDER = this.getSampleFilePath('TargetFolder');

    this.RESULT_WORD = 'result.docx';
    this.RESULT_WITH_NEW_AUTHOR_WORD = 'resultWithNewAuthor.docx';
    this.RESULT_WITH_ACCEPTED_CHANGE_WORD = 'resultWithAcceptedChange.docx';
    this.RESULT_WITH_REJECTED_CHANGE_WORD = 'resultWithRejectedChange.docx';
    this.RESULT_WORD_FONT = 'result_font.docx';

    this.RESULT_CELLS = 'result.xlsx';
    this.RESULT_SLIDES = 'result.pptx';
    this.RESULT_TXT = 'result.txt';
    this.RESULT_EMAIL = 'result.eml';
    this.RESULT_PDF = 'result.pdf';
    this.RESULT_DIAGRAM = 'result.vsdx';
    this.RESULT_IMAGE = 'result.png';
    this.RESULT_REVISIONS = 'result.docx';
    this.RESULT_FOLDER = 'ResultFolderCompare';

    this.DIAGRAM_SETTINGS = this.getSampleFilePath('basicShapes.vssx');

    // Custom font path - update with actual font file name if needed
    this.CUSTOM_FONT = this.getSampleFilePath('font.otf');

    this.ensureOutputDirectoryExists();
  }

  ensureOutputDirectoryExists() {
    const outputDirectory = path.resolve(this.outputPath);
    if (!fs.existsSync(outputDirectory)) {
      fs.mkdirSync(outputDirectory, { recursive: true });
    }
  }

  getSampleFilePath(fileName) {
    return path.join(this.samplesPath, fileName);
  }

  getOutputDirectoryPath() {
    const outputDirectory = path.resolve(this.outputPath);
    return outputDirectory;
  }

  createOutputFolder(folderName) {
    const outputDirectory = this.getOutputDirectoryPath();

    const folderPath = path.join(outputDirectory, folderName);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
    return folderPath;
  }
}

module.exports = new Constants();
