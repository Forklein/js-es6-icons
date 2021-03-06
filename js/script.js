const elementDisplay = document.getElementById('cards');

//# Print cards Function
const printCard = (arr, targetElement) => {
    let iconTemplate = '';
    arr.forEach((icon, index) => {
        let offsetDisplay = '';
        if (index % 5 == 0) {
            offsetDisplay = 'offset-md-1';
        }
        iconTemplate += `
        <div class="col-md-2 ${offsetDisplay} 
        d-flex flex-column align-items-center justify-content-center">
            <div class="border rounded-2 bg-white shadow w-100 h-100 p-3">
               <i class="${icon.family} fa-${icon.name} fa-3x ${icon.type}"></i>
               <p class="h4">${icon.name.toUpperCase()}</p>
            </div>
        </div>
        `;
    });
    targetElement.innerHTML = iconTemplate;
}
printCard(icons, elementDisplay);

//# Print option Function
const filterDisplay = document.getElementById('filter');
let optionTemplate = '<option>all</option>';

const printOption = (arr, targetElement) => {
    arr.forEach((icon) => {
        if (!optionTemplate.includes(icon.type))
            optionTemplate += `<option>${icon.type}</option>`;
    });
    targetElement.innerHTML = optionTemplate;
}
printOption(icons, filterDisplay);

//# Filter
filterDisplay.addEventListener('change', () => {
    if (filterDisplay.value == 'all') {
        printCard(icons, elementDisplay);
        return;
    }
    const filteredIcons = icons.filter((icon) => icon.type == filterDisplay.value ? true : false);
    printCard(filteredIcons, elementDisplay);
    console.log(filteredIcons);
});


//# Take input from input value


const displaySearch = document.getElementById('search');
displaySearch.addEventListener('input', () => {
    let elementInSearch = '';
    icons.forEach((icon) => {
        console.log(icon.name);
        if (icon.name.includes(displaySearch.value)) {
            console.log('FILTRATA', icon.name)
            elementInSearch += `
            <div class="col-md-6 m-3 mx-auto d-flex flex-column align-items-center justify-content-center">
                <div class="border rounded-2 bg-white shadow w-100 h-100 p-3">
                   <i class="${icon.family} fa-${icon.name} fa-3x ${icon.type}"></i>
                   <p class="h4">${icon.name.toUpperCase()}</p>
                </div>
            </div>
           `
        }
    });
    elementDisplay.innerHTML = elementInSearch;
});