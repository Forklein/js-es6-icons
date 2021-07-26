const elementDisplay = document.getElementById('cards');




let iconTemplate = '';
let offsetDisplay = '';

icons.forEach((icon, index) => {
    if (index % 5 == 0) {
        offsetDisplay = 'offset-md-1';
    } else {
        offsetDisplay = '';
    }
    iconTemplate += `
    <div class="col-md-2 bg-white shadow p-3 border rounded-2 ${offsetDisplay}">
       <i class="${icon.fas} fa-${icon.type} fa-3x"></i>
       <p class="h4">${icon.name}</p>
    </div>
    `;
});
elementDisplay.innerHTML = iconTemplate;