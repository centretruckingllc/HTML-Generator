let sectionCount = 1;

function addSection() {
    const sectionsContainer = document.getElementById('sectionsContainer');
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'section';
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
            <option value="Arial, sans-serif">Arial, sans-serif</option>
        </select>
        <label for="sectionFontSize${sectionCount}">Font Size:</label>
        <input type="number" id="sectionFontSize${sectionCount}" name="sectionFontSize${sectionCount}" min="8" max="400" value="14">
        <label for="sectionMargin${sectionCount}">Margin:</label>
        <input type="number" id="sectionMargin${sectionCount}" name="sectionMargin${sectionCount}" min="0" value="0">
        <button type="button" onclick="deleteSection(this)">Delete Section</button>
        <div class="content-container"></div>
        <button type="button" onclick="addContent(this)">Add Content</button>
    `;
    sectionsContainer.appendChild(sectionDiv);
    sectionCount++;
    updatePreview();
}

function deleteSection(button) {
    button.parentNode.remove();
    updatePreview();
}

function addContent(button) {
    const contentContainer = button.previousElementSibling.previousElementSibling;
    const contentDiv = document.createElement('div');
    contentDiv.className = 'content-item resizable';
    contentDiv.innerHTML = `
        <input type="text" placeholder="Content Title">
        <textarea rows="4" placeholder="Content Description"></textarea>
        <input type="text" placeholder="Image URL (optional)">
        <button type="button" class="adjust-image-size" onclick="adjustImageSize(this, '+')">+</button>
        <button type="button" class="adjust-image-size" onclick="adjustImageSize(this, '-')">-</button>
        <label for="fontFamily${sectionCount}">Font Family:</label>
        <select id="fontFamily${sectionCount}" name="fontFamily${sectionCount}">
            <option value="Arial, sans-serif">Arial, sans-serif</option>
        </select>
        <button type="button" onclick="deleteContent(this)">Delete Content</button>
    `;
    contentContainer.appendChild(contentDiv);
    updatePreview();
}

function adjustImageSize(button, direction) {
    const contentDiv = button.parentNode;
    const imageElement = contentDiv.querySelector('img');
    if (imageElement) {
        let currentWidth = imageElement.style.width;
        if (!currentWidth) {
            currentWidth = '100%'; // Default to 100% if width is not set
        }
        let newValue;
        if (direction === '+') {
            newValue = Math.min(parseInt(currentWidth) + 5, 100); // Increase by 5% with a maximum of 100%
        } else if (direction === '-') {
            newValue = Math.max(parseInt(currentWidth) - 5, 5); // Decrease by 5% with a minimum of 5%
        }
        imageElement.style.width = `${newValue}%`;
        updatePreview();
    }
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
            const contentTitle = contentItem.querySelector('input[type="text"]').value;
            const contentDescription = contentItem.querySelector('textarea').value;
            const imageURL = contentItem.querySelector('input[type="text"][placeholder="Image URL (optional)"]').value;
            const contentFont = contentItem.querySelector(`#fontFamily${index + 1}`).value;
            htmlContent += `
                <div class="content" style="font-family: ${contentFont};">
                    <h3>${contentTitle}</h3>
                    ${imageURL ? `<div class="image-container"><img src="${imageURL}" alt="Image"></div>` : ''}
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
    // Copy HTML code functionality
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
            const contentTitle = contentItem.querySelector('input[type="text"]').value;
            const contentDescription = contentItem.querySelector('textarea').value;
            const imageURL = contentItem.querySelector('input[type="text"][placeholder="Image URL (optional)"]').value;
            const contentFont = contentItem.querySelector(`#fontFamily${index + 1}`).value;
            htmlContent += `
                <div class="content" style="font-family: ${contentFont};">
                    <h3>${contentTitle}</h3>
                    ${imageURL ? `<div class="image-container"><img src="${imageURL}" alt="Image"></div>` : ''}
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

// Make content items resizable
$('.resizable').resizable();
