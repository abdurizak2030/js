 const colorPicker = document.getElementById('colorPicker');
    const preview = document.getElementById('preview');
    const history = document.getElementById('history');
    const clearBtn = document.getElementById('clearHistory');

    // Update preview and add to history
    colorPicker.addEventListener('input', () => {
      const selectedColor = colorPicker.value;
      preview.style.backgroundColor = selectedColor;
      preview.textContent = selectedColor;

      // Create history item
      const colorItem = document.createElement('div');
      colorItem.classList.add('color-item');

      const colorBox = document.createElement('div');
      colorBox.classList.add('color-box');
      colorBox.style.backgroundColor = selectedColor;

      const colorCode = document.createElement('span');
      colorCode.textContent = selectedColor;

      colorItem.appendChild(colorBox);
      colorItem.appendChild(colorCode);
      history.appendChild(colorItem);
    });

    // Clear history
    clearBtn.addEventListener('click', () => {
      history.innerHTML = '';
    });