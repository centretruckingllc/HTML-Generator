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
        <select id="contentFont${sectionIndex}_${contentContainer.children.length + 1}" name="contentFont${sectionIndex}_${contentContainer.children.length + 1}">
        <option value="Arial, sans-serif">Arial, sans-serif</option>
        <option value="Times New Roman, serif">Times New Roman, serif</option>
        <option value="Arial, sans-serif">Arial, sans-serif</option>
        <option value="Verdana, sans-serif">Verdana, sans-serif</option>
        <option value="Helvetica, sans-serif">Helvetica, sans-serif</option>
        <option value="Tahoma, sans-serif">Tahoma, sans-serif</option>
        <option value="Trebuchet MS, sans-serif">Trebuchet MS, sans-serif</option>
        <option value="Times New Roman, serif">Times New Roman, serif</option>
        <option value="Georgia, serif">Georgia, serif</option>
        <option value="Palatino Linotype, serif">Palatino Linotype, serif</option>
        <option value="Book Antiqua, serif">Book Antiqua, serif</option>
        <option value="Courier New, monospace">Courier New, monospace</option>
        <option value="Lucida Console, monospace">Lucida Console, monospace</option>
        <option value="Monaco, monospace">Monaco, monospace</option>
        <option value="Consolas, monospace">Consolas, monospace</option>
        <option value="Lucida Sans Unicode, sans-serif">Lucida Sans Unicode, sans-serif</option>
        <option value="Arial Black, sans-serif">Arial Black, sans-serif</option>
        <option value="Impact, sans-serif">Impact, sans-serif</option>
        <option value="Century Gothic, sans-serif">Century Gothic, sans-serif</option>
        <option value="Franklin Gothic Medium, sans-serif">Franklin Gothic Medium, sans-serif</option>
        <option value="Garamond, serif">Garamond, serif</option>
        <option value="Cambria, serif">Cambria, serif</option>
        <option value="Baskerville, serif">Baskerville, serif</option>
        <option value="Didot, serif">Didot, serif</option>
        <option value="Brush Script MT, cursive">Brush Script MT, cursive</option>
        <option value="Comic Sans MS, cursive">Comic Sans MS, cursive</option>
        <option value="Papyrus, fantasy">Papyrus, fantasy</option>
        <option value="Copperplate, fantasy">Copperplate, fantasy</option>
        <option value="Courier, monospace">Courier, monospace</option>
        <option value="Rockwell, sans-serif">Rockwell, sans-serif</option>
        <option value="Rockwell Extra Bold, sans-serif">Rockwell Extra Bold, sans-serif</option>
        <option value="Segoe UI, sans-serif">Segoe UI, sans-serif</option>
        <option value="Calibri, sans-serif">Calibri, sans-serif</option>
        <option value="Arial Narrow, sans-serif">Arial Narrow, sans-serif</option>
        <option value="Geneva, sans-serif">Geneva, sans-serif</option>
        <option value="Candara, sans-serif">Candara, sans-serif</option>
        <option value="Arial Rounded MT Bold, sans-serif">Arial Rounded MT Bold, sans-serif</option>
        <option value="Curlz MT, cursive">Curlz MT, cursive</option>
        <option value="Kristen ITC, cursive">Kristen ITC, cursive</option>
        <option value="Old English Text MT, serif">Old English Text MT, serif</option>
        <option value="Perpetua, serif">Perpetua, serif</option>
        <option value="Plantagenet Cherokee, cursive">Plantagenet Cherokee, cursive</option>
        <option value="Ravie, fantasy">Ravie, fantasy</option>
        <option value="Segoe Print, sans-serif">Segoe Print, sans-serif</option>
        <option value="Segoe Script, cursive">Segoe Script, cursive</option>
        <option value="Tempus Sans ITC, sans-serif">Tempus Sans ITC, sans-serif</option>
        <option value="Viner Hand ITC, cursive">Viner Hand ITC, cursive</option>
        <option value="Wide Latin, fantasy">Wide Latin, fantasy</option>
        <option value="Algerian, fantasy">Algerian, fantasy</option>
        <option value="Arial Unicode MS, sans-serif">Arial Unicode MS, sans-serif</option>
        <option value="Bodoni MT, serif">Bodoni MT, serif</option>
        <option value="Bodoni MT Black, serif">Bodoni MT Black, serif</option>
        <option value="Bodoni MT Condensed, serif">Bodoni MT Condensed, serif</option>
        <option value="Bradley Hand ITC, cursive">Bradley Hand ITC, cursive</option>
        <option value="Bookman Old Style, serif">Bookman Old Style, serif</option>
        <option value="Century, serif">Century, serif</option>
        <option value="Century Schoolbook, serif">Century Schoolbook, serif</option>
        <option value="Chiller, fantasy">Chiller, fantasy</option>
        <option value="Colonna MT, serif">Colonna MT, serif</option>
        <option value="Constantia, serif">Constantia, serif</option>
        <option value="Cooper Black, sans-serif">Cooper Black, sans-serif</option>
        <option value="Copperplate Gothic, sans-serif">Copperplate Gothic, sans-serif</option>
        <option value="Corbel, sans-serif">Corbel, sans-serif</option>
        <option value="Elephant, sans-serif">Elephant, sans-serif</option>
        <option value="Engravers MT, sans-serif">Engravers MT, sans-serif</option>
        <option value="Eras Bold ITC, sans-serif">Eras Bold ITC, sans-serif</option>
        <option value="Eras Demi ITC, sans-serif">Eras Demi ITC, sans-serif</option>
        <option value="Eras Light ITC, sans-serif">Eras Light ITC, sans-serif</option>
        <option value="Eras Medium ITC, sans-serif">Eras Medium ITC, sans-serif</option>
        <option value="Estrangelo Edessa, sans-serif">Estrangelo Edessa, sans-serif</option>
        <option value="Felix Titling, sans-serif">Felix Titling, sans-serif</option>
        <option value="Forte, sans-serif">Forte, sans-serif</option>
        <option value="Freestyle Script, sans-serif">Freestyle Script, sans-serif</option>
        <option value="French Script MT, cursive">French Script MT, cursive</option>
        <option value="Gigi, sans-serif">Gigi, sans-serif</option>
        <option value="Gloucester MT Extra Condensed, sans-serif">Gloucester MT Extra Condensed, sans-serif</option>
        <option value="Goudy Old Style, serif">Goudy Old Style, serif</option>
        <option value="Haettenschweiler, sans-serif">Haettenschweiler, sans-serif</option>
        <option value="Harlow Solid Italic, sans-serif">Harlow Solid Italic, sans-serif</option>
        <option value="Harrington, sans-serif">Harrington, sans-serif</option>
        <option value="High Tower Text, sans-serif">High Tower Text, sans-serif</option>
        <option value="Imprint MT Shadow, sans-serif">Imprint MT Shadow, sans-serif</option>
        <option value="Informal Roman, sans-serif">Informal Roman, sans-serif</option>
        <option value="Jokerman, fantasy">Jokerman, fantasy</option>
        <option value="Juice ITC, fantasy">Juice ITC, fantasy</option>
        <option value="Kunstler Script, cursive">Kunstler Script, cursive</option>
        <option value="Leelawadee, sans-serif">Leelawadee, sans-serif</option>
        <option value="Lucida Bright, serif">Lucida Bright, serif</option>
        <option value="Lucida Fax, serif">Lucida Fax, serif</option>
        <option value="Magneto, sans-serif">Magneto, sans-serif</option>
        <option value="Maiandra GD, sans-serif">Maiandra GD, sans-serif</option>
        <option value="Malgun Gothic, sans-serif">Malgun Gothic, sans-serif</option>
        <option value="Marlett, sans-serif">Marlett, sans-serif</option>
        <option value="Matura MT Script Capitals, cursive">Matura MT Script Capitals, cursive</option>
        <option value="Microsoft Himalaya, sans-serif">Microsoft Himalaya, sans-serif</option>
        <option value="Mistral, sans-serif">Mistral, sans-serif</option>
        <option value="Modern No. 20, sans-serif">Modern No. 20, sans-serif</option>
        <option value="MS Gothic, sans-serif">MS Gothic, sans-serif</option>
        <option value="MS Outlook, sans-serif">MS Outlook, sans-serif</option>
        <option value="MS Reference Sans Serif, sans-serif">MS Reference Sans Serif, sans-serif</option>
        <option value="MS Reference Specialty, sans-serif">MS Reference Specialty, sans-serif</option>
        <option value="MV Boli, sans-serif">MV Boli, sans-serif</option>
        <option value="Niagara Engraved, sans-serif">Niagara Engraved, sans-serif</option>
        <option value="Niagara Solid, sans-serif">Niagara Solid, sans-serif</option>
        <option value="OCR A Extended, monospace">OCR A Extended, monospace</option>
        <option value="Orator Std, monospace">Orator Std, monospace</option>
        <option value="Parchment, sans-serif">Parchment, sans-serif</option>
        <option value="Parchment, fantasy">Parchment, fantasy</option>
        <option value="Perpetua Titling MT, serif">Perpetua Titling MT, serif</option>
        <option value="Playbill, sans-serif">Playbill, sans-serif</option>
        <option value="Poor Richard, serif">Poor Richard, serif</option>
        <option value="Poplar Std, sans-serif">Poplar Std, sans-serif</option>
        <option value="Rage Italic, sans-serif">Rage Italic, sans-serif</option>
        <option value="Ravie, sans-serif">Ravie, sans-serif</option>
        <option value="Rockwell Condensed, sans-serif">Rockwell Condensed, sans-serif</option>
        <option value="Script MT Bold, cursive">Script MT Bold, cursive</option>
        <option value="Showcard Gothic, sans-serif">Showcard Gothic, sans-serif</option>
        <option value="Snap ITC, sans-serif">Snap ITC, sans-serif</option>
        <option value="Stencil, sans-serif">Stencil, sans-serif</option>
        <option value="Sylfaen, sans-serif">Sylfaen, sans-serif</option>
        <option value="Tempus Sans ITC, serif">Tempus Sans ITC, serif</option>
        <option value="Tw Cen MT, sans-serif">Tw Cen MT, sans-serif</option>
        <option value="Tw Cen MT Condensed, sans-serif">Tw Cen MT Condensed, sans-serif</option>
        <option value="Tw Cen MT Condensed Extra Bold, sans-serif">Tw Cen MT Condensed Extra Bold, sans-serif</option>
        <option value="Tw Cen MT Condensed Medium, sans-serif">Tw Cen MT Condensed Medium, sans-serif</option>
        <option value="Tw Cen MT Condensed Light, sans-serif">Tw Cen MT Condensed Light, sans-serif</option>
        <option value="Tw Cen MT Condensed Bold, sans-serif">Tw Cen MT Condensed Bold, sans-serif</option>
        <option value="Tw Cen MT Bold, sans-serif">Tw Cen MT Bold, sans-serif</option>
        <option value="Verdana Pro, sans-serif">Verdana Pro, sans-serif</option>
        <option value="Verdana Pro Cond, sans-serif">Verdana Pro Cond, sans-serif</option>
        <option value="Verdana Pro Light, sans-serif">Verdana Pro Light, sans-serif</option>
        <option value="Wingdings, sans-serif">Wingdings, sans-serif</option>
        <option value="Wingdings 2, sans-serif">Wingdings 2, sans-serif</option>
        <option value="Wingdings 3, sans-serif">Wingdings 3, sans-serif</option>
        <option value="Zapf Dingbats, sans-serif">Zapf Dingbats, sans-serif</option>
        <option value="Zapfino, cursive">Zapfino, cursive</option>
        </select>
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