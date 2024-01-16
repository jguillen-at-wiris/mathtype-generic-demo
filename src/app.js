// Get editor and document HTML elements
const editableArea = document.getElementById('editable');
const toolbarElement = document.getElementById('toolbar');
const documentArea = document.getElementById('document');

// Uncomment the next line to initialize MathType in classic mode
// window.wrs_int_init(editableArea, toolbarElement);

// Uncomment the next line to initialize MathType in handwriting mode only
//window.wrs_int_init(editableArea, toolbarElement, undefined, { forcedHandMode: true });

// Add a click event handler to the "Update" button to render the editor content in an HTML element (document).
document.getElementById('btn_update').addEventListener('click', (e) => {
    // Get and parse the editor contents
    const editorContent = WirisPlugin.Parser.endParse(editableArea.innerHTML);
    // Update the document with the editor contents
    documentArea.innerHTML = editorContent;
    // Filter the document with the display engine parser to properly render formulas
    com.wiris.js.JsPluginViewer.parseElement(documentArea);
});

