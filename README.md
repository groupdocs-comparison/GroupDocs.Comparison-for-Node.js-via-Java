# GroupDocs.Comparison for Node.js via Java — Code Examples

This repository contains runnable code examples demonstrating how to use GroupDocs.Comparison for Node.js via Java to compare documents, spreadsheets, presentations, PDFs, images, emails, and more.

## Quick Start

### Prerequisites

- **Node.js** 20 LTS or later
- **Java** JRE/JDK 8+ (17 LTS recommended)
- **Java Environment**: Set `JAVA_HOME` and add to `PATH`

**Windows PowerShell:**
```powershell
$env:JAVA_HOME="C:\Program Files\Java\jdk-17"
$env:Path="$env:JAVA_HOME\bin;$env:Path"
```

**Linux/macOS:**
```bash
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk
export PATH=$JAVA_HOME/bin:$PATH
```

For detailed installation instructions and platform-specific notes, refer to the documentation:

- [Installation](https://docs.groupdocs.com/comparison/nodejs-java/installation/)
- [System Requirements](https://docs.groupdocs.com/comparison/nodejs-java/system-requirements/)

### Installation

```bash
npm install
```

This installs the bundled package (`groupdocs-groupdocs.comparison-25.11.0.tgz`) referenced in `package.json`.

## Running Examples

### Run All Examples

Execute all examples: 

```bash
node runExamples.js
```

Outputs are saved to `Results/Output/<example-name>/`.

## Example Structure

Examples are organized into three categories:

### QuickStart

Minimal examples to get started:

- **`helloWorld.js`** - Basic document comparison
- **`setLicense.js`** - License setup example
- **`setMeteredLicense.js`** - Metered license setup

### BasicUsage

Core comparison functionality examples:

| File | What It Demonstrates |
|------|---------------------|
| `compareDocumentsFromPath.js` | Compare documents using file paths |
| `compareDocumentsFromStream.js` | Compare documents using file streams |
| `compareDocumentsProtectedPath.js` | Compare password-protected documents (paths) |
| `compareDocumentsProtectedStream.js` | Compare password-protected documents (streams) |
| `compareCellsFromPath.js` | Compare Excel spreadsheets (paths) |
| `compareCellsFromStream.js` | Compare Excel spreadsheets (streams) |
| `compareImageFromPath.js` | Compare image files (paths) |
| `compareImageFromStream.js` | Compare image files (streams) |
| `compareMultiplePdfDocuments.js` | Compare multiple PDFs simultaneously |
| `getDocumentInfoPath.js` | Get document properties (paths) |
| `getDocumentInfoStream.js` | Get document properties (streams) |
| `getSupportedFormats.js` | List all supported file formats |

### AdvancedUsage

Advanced scenarios organized by feature:

#### Comparison (`AdvancedUsage/Comparison/`)

- **`acceptRejectDetectedChangesPath.js`** - Accept/reject changes programmatically (paths)
- **`acceptRejectDetectedChangesStream.js`** - Accept/reject changes programmatically (streams)
- **`compareDocumentsSettingsStream.js`** - Custom comparison settings (sensitivity, styles)
- **`compareFolders.js`** - Compare entire folders, save as TXT or HTML
- **`compareMultipleDocumentsPath.js`** - Compare multiple documents at once (paths)
- **`compareMultipleDocumentsStream.js`** - Compare multiple documents (streams)
- **`compareMultipleDocumentsProtectedPath.js`** - Multiple password-protected documents (paths)
- **`compareMultipleDocumentsProtectedStream.js`** - Multiple password-protected documents (streams)
- **`compareMultipleDocumentsSettingsPath.js`** - Multiple documents with custom settings (paths)
- **`compareMultipleDocumentsSettingsStream.js`** - Multiple documents with custom settings (streams)

#### Loading (`AdvancedUsage/Loading/`)

- **`loadDocumentFromLocalDisc.js`** - Load with custom options (passwords, pages, comments)
- **`loadDocumentFromStream.js`** - Load from streams with options
- **`loadTextFromString.js`** - Load document content from string

#### Saving (`AdvancedUsage/Saving/`)

- **`setDocumentMetadataSource.js`** - Set metadata for source document
- **`setDocumentMetadataTarget.js`** - Set metadata for target document
- **`setPasswordForResultantDocument.js`** - Password-protect result document

## Example Code Snippets

### Basic Comparison (Path)

```javascript
// BasicUsage/compareDocumentsFromPath.js
const comparer = new groupdocs.comparison.Comparer(Constants.SOURCE_WORD);
comparer.add(Constants.TARGET_WORD);
comparer.compare(outputFileName);
```

### Basic Comparison (Stream)

```javascript
// BasicUsage/compareDocumentsFromStream.js
const InputStream = java.import('java.io.FileInputStream');
const comparer = new groupdocs.comparison.Comparer(
    new InputStream(Constants.SOURCE_WORD)
);
comparer.add(new InputStream(Constants.TARGET_WORD));
comparer.compare(outputFileName);
```

### Accept/Reject Changes

```javascript
// AdvancedUsage/Comparison/acceptRejectDetectedChangesPath.js
const comparer = new groupdocs.comparison.Comparer(Constants.SOURCE_WORD);
comparer.add(Constants.TARGET_WORD);
await comparer.compare();

let changes = await comparer.getChanges();
changes[0].setComparisonAction(groupdocs.comparison.ComparisonAction.ACCEPT);

const applyChangeOptions = new groupdocs.comparison.ApplyChangeOptions();
applyChangeOptions.setChanges(Arrays.asList(changes));
await comparer.applyChanges(outputPath, applyChangeOptions);
```

### Custom Comparison Settings

```javascript
// AdvancedUsage/Comparison/compareDocumentsSettingsStream.js
const compareOptions = new groupdocs.comparison.CompareOptions();
const styleSettings = new groupdocs.comparison.StyleSettings();
styleSettings.setUnderline(true);
styleSettings.setFontColor(Color.GREEN);
styleSettings.setHighlightColor(Color.RED);
compareOptions.setInsertedItemStyle(styleSettings);

await comparer.compare(outputFileName, compareOptions);
```

### Multiple Documents

```javascript
// AdvancedUsage/Comparison/compareMultipleDocumentsPath.js
const comparer = new groupdocs.comparison.Comparer(Constants.SOURCE_WORD);
comparer.add(Constants.TARGET_WORD);
comparer.add(Constants.TARGET2_WORD);
comparer.add(Constants.TARGET3_WORD);
await comparer.compare(outputFileName);
```

### Password-Protected Documents

```javascript
// BasicUsage/compareDocumentsProtectedPath.js
const loadOptions = new groupdocs.comparison.LoadOptions();
loadOptions.setPassword("1234");

const comparer = new groupdocs.comparison.Comparer(
    Constants.SOURCE_WORD_PROTECTED, 
    loadOptions
);
comparer.add(Constants.TARGET_WORD_PROTECTED, loadOptions);
comparer.compare(outputFileName);
```

## Using the Examples Module

All examples are accessible through `examples.js`:

```javascript
const examples = require('./examples');

// Basic examples
await examples.helloWorld();
await examples.compareDocumentsFromPath();
await examples.compareDocumentsFromStream();
await examples.compareCellsFromPath();
await examples.compareImageFromPath();

// Advanced examples
await examples.acceptRejectDetectedChangesPath();
await examples.compareMultipleWordsDocuments();
await examples.compareFolderSaveAsTxt();
await examples.loadDocumentFromLocalDisc();
await examples.setDocumentMetadataSource();
```

## Project Structure

```
├── BasicUsage/              # Basic comparison examples
│   ├── compareDocumentsFromPath.js
│   ├── compareDocumentsFromStream.js
│   ├── compareCellsFromPath.js
│   └── ...
│
├── AdvancedUsage/          # Advanced features
│   ├── Comparison/         # Advanced comparison scenarios
│   ├── Loading/           # Document loading options
│   └── Saving/            # Result saving options
│
├── QuickStart/            # Quick start examples
│   ├── helloWorld.js
│   ├── setLicense.js
│   └── setMeteredLicense.js
│
├── Resources/
│   └── SampleFiles/      # Sample input files
│       ├── source.docx
│       ├── target.docx
│       └── ...
│
├── Results/
│   └── Output/           # Generated results (auto-created)
│
├── constants.js           # File paths and configuration
├── examples.js            # Example runner module
├── runExamples.js         # Run all examples
└── package.json
```

## Input and Output

- **Input Files**: `Resources/SampleFiles/` (configured in `constants.js`)
- **Output Files**: `Results/Output/<example-name>/` (auto-created per example)

Modify `constants.js` to change paths if needed.

## License Setup (Optional)

Examples run in trial mode by default. To use a license:

**Option 1: Environment variable**

Create `.env`:
```env
GROUPDOCS_LICENSE=C:\path\to\license.lic
```

**Option 2: Programmatic**

```javascript
const examples = require('./examples');
await examples.setLicense('path/to/license.lic');
```

**Get a temporary license**: [GroupDocs Temporary License](https://purchase.groupdocs.com/temp-license/107398)

## Troubleshooting

### Java Not Detected

Set `JAVA_HOME` and add to `PATH` (see Prerequisites above).

### Build Errors

Install build tools:
- **Windows**: Visual Studio Build Tools
- **Linux**: `sudo apt-get install build-essential`
- **macOS**: `xcode-select --install`

### Output Permission Errors

Ensure write access to `Results/Output/` directory.

### Missing Fonts

Install common fonts (especially on Linux servers):
- Microsoft Core Fonts
- Liberation Fonts
- DejaVu Fonts

## Resources

- **Documentation**: [docs.groupdocs.com/comparison/nodejs-java](https://docs.groupdocs.com/comparison/nodejs-java/)
- **API Reference**: [apireference.groupdocs.com/comparison/nodejs-java](https://apireference.groupdocs.com/comparison/nodejs-java)
- **Support Forum**: [forum.groupdocs.com/c/comparison](https://forum.groupdocs.com/c/comparison)
- **Product Page**: [products.groupdocs.com/comparison/nodejs-java](https://products.groupdocs.com/comparison/nodejs-java)

---

**Note**: These are code examples demonstrating GroupDocs.Comparison features. For production use, ensure you have a valid license.
