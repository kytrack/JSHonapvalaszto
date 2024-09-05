function generateDivs() {
    let container = document.getElementById('container');
    container.innerHTML = '';

    let napokSzama = document.getElementById('honapok').value;

    
        for (let i = 1; i <= napokSzama; i++) {
            let rowDiv = document.createElement('div');

            let dayNumber = document.createElement('span');
            dayNumber.textContent = i + ". ";

            let input = document.createElement('input');
            input.type = 'text';

            rowDiv.appendChild(dayNumber);
            rowDiv.appendChild(input);

            container.appendChild(rowDiv);
        }
    
}