let sectionCount = 1;

function addSection() {
    const sectionsContainer = document.getElementById('sectionsContainer');
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'section';
    sectionDiv.id = `section${sectionCount}`;
    sectionDiv.innerHTML = `
        <hr>
        <label for="sectionTitle${sectionCount}">Title of Section ${sectionCount}:</label>
        <input type="text" id="sectionTitle${sectionCount}" name="sectionTitle${sectionCount}" required>
        <label for="sectionBackground${sectionCount}">Background Color:</label>
        <input type="color" id="sectionBackground${sectionCount}" name="sectionBackground${sectionCount}">
        <label for="sectionFontColor${sectionCount}">Font Color:</label>
        <input type="color" id="sectionFontColor${sectionCount}" name="sectionFontColor${sectionCount}">
        <label for="sectionFont${sectionCount}">Font Family:</label>
        <select id="sectionFont${sectionCount}" name="sectionFont${sectionCount}">

        </select>
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
        <label for="contentImageUrl${sectionIndex}_${contentContainer.children.length + 1}">Image URL:</label>
        <input type="text" id="contentImageUrl${sectionIndex}_${contentContainer.children.length + 1}" name="contentImageUrl${sectionIndex}_${contentContainer.children.length + 1}">
        <label for="contentTitleBackground${sectionIndex}_${contentContainer.children.length + 1}">Title Background Color:</label>
        <input type="color" id="contentTitleBackground${sectionIndex}_${contentContainer.children.length + 1}" name="contentTitleBackground${sectionIndex}_${contentContainer.children.length + 1}">
        <label for="contentTitleFontColor${sectionIndex}_${contentContainer.children.length + 1}">Title Font Color:</label>
        <input type="color" id="contentTitleFontColor${sectionIndex}_${contentContainer.children.length + 1}" name="contentTitleFontColor${sectionIndex}_${contentContainer.children.length + 1}">
        <label for="contentTitleFont${sectionIndex}_${contentContainer.children.length + 1}">Title Font Family:</label>
        <select id="contentTitleFont${sectionIndex}_${contentContainer.children.length + 1}" name="contentTitleFont${sectionIndex}_${contentContainer.children.length + 1}">
        
        </select>
        <label for="contentTitleFontSize${sectionIndex}_${contentContainer.children.length + 1}">Title Font Size:</label>
        <input type="number" id="contentTitleFontSize${sectionIndex}_${contentContainer.children.length + 1}" name="contentTitleFontSize${sectionIndex}_${contentContainer.children.length + 1}" min="8" max="400" value="14">
        <label for="contentDescBackground${sectionIndex}_${contentContainer.children.length + 1}">Description Background Color:</label>
        <input type="color" id="contentDescBackground${sectionIndex}_${contentContainer.children.length + 1}" name="contentDescBackground${sectionIndex}_${contentContainer.children.length + 1}">
        <label for="contentDescFontColor${sectionIndex}_${contentContainer.children.length + 1}">Description Font Color:</label>
        <input type="color" id="contentDescFontColor${sectionIndex}_${contentContainer.children.length + 1}" name="contentDescFontColor${sectionIndex}_${contentContainer.children.length + 1}">
        <label for="contentDescFont${sectionIndex}_${contentContainer.children.length + 1}">Description Font Family:</label>
        <select id="contentDescFont${sectionIndex}_${contentContainer.children.length + 1}" name="contentDescFont${sectionIndex}_${contentContainer.children.length + 1}">
        
        </select>
        <label for="contentDescFontSize${sectionIndex}_${contentContainer.children.length + 1}">Description Font Size:</label>
        <input type="number" id="contentDescFontSize${sectionIndex}_${contentContainer.children.length + 1}" name="contentDescFontSize${sectionIndex}_${contentContainer.children.length + 1}" min="8" max="400" value="14">
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
            const contentTitleBackground = contentItem.querySelector(`#contentTitleBackground${index + 1}_${contentIndex + 1}`).value;
            const contentTitleFontColor = contentItem.querySelector(`#contentTitleFontColor${index + 1}_${contentIndex + 1}`).value;
            const contentTitleFont = contentItem.querySelector(`#contentTitleFont${index + 1}_${contentIndex + 1}`).value;
            const contentTitleFontSize = contentItem.querySelector(`#contentTitleFontSize${index + 1}_${contentIndex + 1}`).value + 'px';
            const contentDescription = contentItem.querySelector(`#contentDescription${index + 1}_${contentIndex + 1}`).value;
            const contentDescBackground = contentItem.querySelector(`#contentDescBackground${index + 1}_${contentIndex + 1}`).value;
            const contentDescFontColor = contentItem.querySelector(`#contentDescFontColor${index + 1}_${contentIndex + 1}`).value;
            const contentDescFont = contentItem.querySelector(`#contentDescFont${index + 1}_${contentIndex + 1}`).value;
            const contentDescFontSize = contentItem.querySelector(`#contentDescFontSize${index + 1}_${contentIndex + 1}`).value + 'px';
            htmlContent += `
                <div class="content">
                    <h3 style="background-color: ${contentTitleBackground}; color: ${contentTitleFontColor}; font-family: ${contentTitleFont}; font-size: ${contentTitleFontSize};">${contentTitle}</h3>
                    <p style="background-color: ${contentDescBackground}; color: ${contentDescFontColor}; font-family: ${contentDescFont}; font-size: ${contentDescFontSize};">${contentDescription}</p>
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
            const contentTitleBackground = contentItem.querySelector(`#contentTitleBackground${index + 1}_${contentIndex + 1}`).value;
            const contentTitleFontColor = contentItem.querySelector(`#contentTitleFontColor${index + 1}_${contentIndex + 1}`).value;
            const contentTitleFont = contentItem.querySelector(`#contentTitleFont${index + 1}_${contentIndex + 1}`).value;
            const contentTitleFontSize = contentItem.querySelector(`#contentTitleFontSize${index + 1}_${contentIndex + 1}`).value + 'px';
            const contentDescription = contentItem.querySelector(`#contentDescription${index + 1}_${contentIndex + 1}`).value;
            const contentDescBackground = contentItem.querySelector(`#contentDescBackground${index + 1}_${contentIndex + 1}`).value;
            const contentDescFontColor = contentItem.querySelector(`#contentDescFontColor${index + 1}_${contentIndex + 1}`).value;
            const contentDescFont = contentItem.querySelector(`#contentDescFont${index + 1}_${contentIndex + 1}`).value;
            const contentDescFontSize = contentItem.querySelector(`#contentDescFontSize${index + 1}_${contentIndex + 1}`).value + 'px';
            htmlContent += `
                <div class="content">
                    <h3 style="background-color: ${contentTitleBackground}; color: ${contentTitleFontColor}; font-family: ${contentTitleFont}; font-size: ${contentTitleFontSize};">${contentTitle}</h3>
                    <p style="background-color: ${contentDescBackground}; color: ${contentDescFontColor}; font-family: ${contentDescFont}; font-size: ${contentDescFontSize};">${contentDescription}</p>
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
