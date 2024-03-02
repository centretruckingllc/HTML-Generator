let sectionCount = 1;
let fontOptions = []; // Array to store font options

// Function to fetch font options from font.txt file
async function fetchFontOptions() {
    try {
        const response = await fetch('font.txt');
        if (!response.ok) {
            throw new Error('Failed to fetch font options');
        }
        const data = await response.text();
        fontOptions = data.split('\n').filter(option => option.trim() !== ''); // Split options by newline and filter out empty lines
        populateFontSelects(); // Populate font select dropdowns
    } catch (error) {
        console.error('Error fetching font options:', error);
    }
}

// Function to populate font select dropdowns
function populateFontSelects() {
    const fontSelects = document.querySelectorAll('[id^="sectionFont"], [id^="contentFont"]');
    fontSelects.forEach(select => {
        // Clear existing options
        select.innerHTML = "";
        // Populate options
        fontOptions.forEach(option => {
            const fontOption = document.createElement('option');
            const trimmedOption = option.trim();
            fontOption.value = trimmedOption; // Set value attribute
            fontOption.textContent = trimmedOption; // Set display text
            select.appendChild(fontOption);
        });
    });
}

// Call fetchFontOptions() when the script loads
fetchFontOptions();

function addSection() {
    const sectionsContainer = document.getElementById('sectionsContainer');
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'section';
    sectionDiv.id = `section${sectionCount}`; // Assign unique id to each section
    sectionDiv.innerHTML = `
        <hr>
        <label for="sectionTitle${sectionCount}">Title of Section ${sectionCount}:</label>
        <input type="text" id="sectionTitle${sectionCount}" name="sectionTitle${sectionCount}" required>
        <label for="sectionBackground${sectionCount}">Background Color:</label>
        <input type="color" id="sectionBackground${sectionCount}" name="sectionBackground${sectionCount}">
        <label for="sectionFontColor${sectionCount}">Font Color:</label>
        <input type="color" id="sectionFontColor${sectionCount}" name="sectionFontColor${sectionCount}">
        <label for="sectionFont${sectionCount}">Font Family:</label>
        <select id="sectionFont${sectionCount}" name="sectionFont${sectionCount}"></select>
        <label for="sectionFontSize${sectionCount}">Font Size:</label>
        <input type="number" id="sectionFontSize${sectionCount}" name="sectionFontSize${sectionCount}" min="8" max="400" value="14">
        <label for="sectionMargin${sectionCount}">Margin:</label>
        <input type="number" id="sectionMargin${sectionCount}" name="sectionMargin${sectionCount}" min="0" value="0">
        <button type="button" onclick="deleteSection(this)">Delete Section</button>
        <div class="content-container"></div>
        <button type="button" onclick="addContent(${sectionCount})">Add Content</button>
    `;
    sectionsContainer.appendChild(sectionDiv);
    sectionCount++;
    updatePreview();
}

function deleteSection(button) {
    button.parentNode.remove();
    updatePreview();
}

function addContent(sectionIndex) {
    const section = document.getElementById(`section${sectionIndex}`);
    const contentContainer = section.querySelector('.content-container');
    const contentDiv = document.createElement('div');
    contentDiv.className = 'content-item resizable';
    contentDiv.innerHTML = `
        <label for="contentTitle${sectionIndex}_${contentContainer.children.length + 1}">Content Title:</label>
        <input type="text" id="contentTitle${sectionIndex}_${contentContainer.children.length + 1}" name="contentTitle${sectionIndex}_${contentContainer.children.length + 1}">
        <label for="contentDescription${sectionIndex}_${contentContainer.children.length + 1}">Content Description:</label>
        <textarea id="contentDescription${sectionIndex}_${contentContainer.children.length + 1}" name="contentDescription${sectionIndex}_${contentContainer.children.length + 1}" rows="4"></textarea>
        <label for="contentBackground${sectionIndex}_${contentContainer.children.length + 1}">Background Color:</label>
        <input type="color" id="contentBackground${sectionIndex}_${contentContainer.children.length + 1}" name="contentBackground${sectionIndex}_${contentContainer.children.length + 1}">
        <label for="contentFontColor${sectionIndex}_${contentContainer.children.length + 1}">Font Color:</label>
        <input type="color" id="contentFontColor${sectionIndex}_${contentContainer.children.length + 1}" name="contentFontColor${sectionIndex}_${contentContainer.children.length + 1}">
        <label for="contentFont${sectionIndex}_${contentContainer.children.length + 1}">Font Family:</label>
        <select id="contentFont${sectionIndex}_${contentContainer.children.length + 1}" name="contentFont${sectionIndex}_${contentContainer.children.length + 1}"></select>
        <label for="contentFontSize${sectionIndex}_${contentContainer.children.length + 1}">Font Size:</label>
        <input type="number" id="contentFontSize${sectionIndex}_${contentContainer.children.length + 1}" name="contentFontSize${sectionIndex}_${contentContainer.children.length + 1}" min="8" max="400" value="14">
        <button type="button" onclick="deleteContent(this)">Delete Content</button>
    `;
    contentContainer.appendChild(contentDiv);
    updatePreview();
}

function deleteContent(button) {
    button.parentNode.remove();
    updatePreview();
}

function updatePreview() {
    const title = document.getElementById('title').value;
    let htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
        </head>
        <body>
    `;
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        const sectionTitle = section.querySelector(`#sectionTitle${index + 1}`).value;
        const sectionBackground = section.querySelector(`#sectionBackground${index + 1}`).value;
        const sectionFontColor = section.querySelector(`#sectionFontColor${index + 1}`).value;
        const sectionFont = section.querySelector(`#sectionFont${index + 1}`).value;
        const sectionFontSize = section.querySelector(`#sectionFontSize${index + 1}`).value + 'px';
        const sectionMargin = section.querySelector(`#sectionMargin${index + 1}`).value + 'px';
        htmlContent += `
            <section style="background-color: ${sectionBackground}; color: ${sectionFontColor}; font-family: ${sectionFont}; font-size: ${sectionFontSize}; margin: ${sectionMargin};">
                <h2>${sectionTitle}</h2>
        `;
        const contentItems = section.querySelectorAll('.content-item');
        contentItems.forEach((contentItem, contentIndex) => {
            const contentTitle = contentItem.querySelector(`#contentTitle${index + 1}_${contentIndex + 1}`).value;
            const contentDescription = contentItem.querySelector(`#contentDescription${index + 1}_${contentIndex + 1}`).value;
            const contentBackground = contentItem.querySelector(`#contentBackground${index + 1}_${contentIndex + 1}`).value;
            const contentFontColor = contentItem.querySelector(`#contentFontColor${index + 1}_${contentIndex + 1}`).value;
            const contentFont = contentItem.querySelector(`#contentFont${index + 1}_${contentIndex + 1}`).value;
            const contentFontSize = contentItem.querySelector(`#contentFontSize${index + 1}_${contentIndex + 1}`).value + 'px';
            htmlContent += `
                <div class="content" style="background-color: ${contentBackground}; color: ${contentFontColor}; font-family: ${contentFont}; font-size: ${contentFontSize};">
                    <h3>${contentTitle}</h3>
                    <p>${contentDescription}</p>
                </div>
            `;
        });
        htmlContent += `
            </section>
        `;
    });
    htmlContent += `
        </body>
        </html>
    `;
    const livePreview = document.getElementById('livePreview');
    const livePreviewDoc = livePreview.contentDocument || livePreview.contentWindow.document;
    livePreviewDoc.body.innerHTML = htmlContent;
}

function copyCode() {
    const title = document.getElementById('title').value;
    let htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
        </head>
        <body>
    `;
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        const sectionTitle = section.querySelector(`#sectionTitle${index + 1}`).value;
        const sectionBackground = section.querySelector(`#sectionBackground${index + 1}`).value;
        const sectionFontColor = section.querySelector(`#sectionFontColor${index + 1}`).value;
        const sectionFont = section.querySelector(`#sectionFont${index + 1}`).value;
        const sectionFontSize = section.querySelector(`#sectionFontSize${index + 1}`).value + 'px';
        const sectionMargin = section.querySelector(`#sectionMargin${index + 1}`).value + 'px';
        htmlContent += `
            <section style="background-color: ${sectionBackground}; color: ${sectionFontColor}; font-family: ${sectionFont}; font-size: ${sectionFontSize}; margin: ${sectionMargin};">
                <h2>${sectionTitle}</h2>
        `;
        const contentItems = section.querySelectorAll('.content-item');
        contentItems.forEach((contentItem, contentIndex) => {
            const contentTitle = contentItem.querySelector(`#contentTitle${index + 1}_${contentIndex + 1}`).value;
            const contentDescription = contentItem.querySelector(`#contentDescription${index + 1}_${contentIndex + 1}`).value;
            const contentBackground = contentItem.querySelector(`#contentBackground${index + 1}_${contentIndex + 1}`).value;
            const contentFontColor = contentItem.querySelector(`#contentFontColor${index + 1}_${contentIndex + 1}`).value;
            const contentFont = contentItem.querySelector(`#contentFont${index + 1}_${contentIndex + 1}`).value;
            const contentFontSize = contentItem.querySelector(`#contentFontSize${index + 1}_${contentIndex + 1}`).value + 'px';
            htmlContent += `
                <div class="content" style="background-color: ${contentBackground}; color: ${contentFontColor}; font-family: ${contentFont}; font-size: ${contentFontSize};">
                    <h3>${contentTitle}</h3>
                    <p>${contentDescription}</p>
                </div>
            `;
        });
        htmlContent += `
            </section>
        `;
    });
    htmlContent += `
        </body>
        </html>
    `;
    const generatedHtml = document.createElement('textarea');
    generatedHtml.value = htmlContent;
    document.body.appendChild(generatedHtml);
    generatedHtml.select();
    document.execCommand('copy');
    alert('HTML code copied to clipboard!');
    document.body.removeChild(generatedHtml);
}

document.getElementById('title').addEventListener('input', updatePreview);
document.getElementById('sectionsContainer').addEventListener('input', updatePreview);
