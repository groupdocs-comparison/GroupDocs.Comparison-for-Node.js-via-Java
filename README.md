**GroupDocs.Comparison for Node.js via Java** is a powerful API to compare over 50 types of documents and images, including all Microsoft Office and OpenDocument file formats, PDF documents, raster images (TIFF, JPEG, GIF, PNG, BMP). Retrieve the list of changes in the desired format with a line-by-line comparison of content, paragraphs, characters, styles, shapes, and position.

<p align="center">

  <a title="Download complete GroupDocs.Comparison for Java source code" href="https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-Node.js-via-Java/archive/refs/heads/master.zip">
	<img src="https://raw.github.com/AsposeExamples/java-examples-dashboard/master/images/downloadZip-Button-Large.png" />
  </a>
</p>

Directory | Description
--------- | -----------
[Docs](https://github.com/groupdocs-comparison/GroupDocs.Comparison-Docs)  | Product documentation containing the Developer's Guide, Release Notes and more.
[Examples](https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-Node.js-via-Java/tree/master/Examples)  | Node.js examples and sample documents for you to get started quickly. 


## Node.js Comparator API Features 
- Compare and detect differences among similar documents.
- Support for 55+ popular document formats from various categories.
- Visual separation of detected changes with the ability to accept or reject modifications.
- Generate document preview.
- Compare paragraph, word as well as characters.
- Identify content styling and formatting changes.
- Set metadata from the source, target files or keep it user-defined.
- Make the resultant document password protected.
- Load source document with extended options;
   - Specify password for password-protected documents.
   - Load specific part or pages of the document.
   - Hide or show document comments.

## Supported Microsoft Office Formats

**Microsoft Word:** DOC, DOCM, DOCX, DOT, DOTM, DOTX, RTX
**Microsoft Excel:** XLS, XLT, XLSX, XLTM, XLSB, XLSM, XLSX
**Microsoft PowerPoint:** POT, POTX, PPS, PPSX, PPTX, PPT
**Microsoft OneNote:** ONE
**Microsoft Visio:** VSDX, VSD, VSS, VST, VDX

## Other Supported Formats

**OpenDocument:** ODT, ODP, OTP, ODS, OTT
**Portable:** PDF
**AutoCAD:** DWG, DXF
**Email:** EML, EMLX, MSG
**Images:** BMP, GIF, JPG, JPEG, PNG, DICOM
**Web:** HTM, HTML, MHT, MHTML
**Text:** TXT, CSV
**eBook:** MOBI, DJVU

## Getting Started with GroupDocs.Comparison for Node.js via Java
### Installation

From the command line:

	npm i @groupdocs/groupdocs.comparison

### Compare Microsoft Word Documents using Node.js

```js
const comparer = new groupdocs.comparison.Comparer("source_sample.docx")
comparer.add("target_sample.docx");
comparer.compare("result.docx");
```


[Home](https://www.groupdocs.com/) | [Product Page](https://products.groupdocs.com/comparison/nodejs-java) | [Documentation](https://docs.groupdocs.com/comparison/nodejs-java/) | [Blog](https://blog.groupdocs.com/category/comparison/) | [API Reference](https://apireference.groupdocs.com/comparison/nodejs-java) | [Code Samples](https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-Node.js-via-Java) | [Free Support](forum.groupdocs.com/c/comparison) | [Temporary License](https://purchase.groupdocs.com/temporary-license)
