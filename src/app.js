// Get editor and document HTML elements
const editableArea = document.getElementById('editable');
const toolbarElement = document.getElementById('toolbar');
const documentArea = document.getElementById('document');

// Initialize MathType
window.wrs_int_init(editableArea, toolbarElement);

// Add a click event handler to the "Update" button
document.getElementById('btn_update').addEventListener('click', (e) => {
    // Get and parse the editor contents
    const editorContent = WirisPlugin.Parser.endParse(editableArea.innerHTML);
    // Update the document with the editor contents
    documentArea.innerHTML = editorContent;
    // Filter the document with the display engine parser to properly render formulas
    com.wiris.js.JsPluginViewer.parseElement(documentArea);
});

