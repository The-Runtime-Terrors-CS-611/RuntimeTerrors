const selectElement = document.getElementById('character-select');
const infoParagraph = document.getElementById('character-info');

function updateCharacter() {
    const characterSelect = selectElement.value;
    switch (characterSelect) {
        case 'ranger':
            const nonRanger = document.querySelectorAll("#barbarianStart, #rogueStart, #mageStart");
            nonRanger.forEach(element => {
                element.style.display = "none";
            }); 
            infoParagraph.innerHTML = 'You shot or whatever';
            document.getElementById("rangerStart").style.display= "block";
            break;

        case 'barbarian':
            const nonBarbarian = document.querySelectorAll("#rangerStart, #rogueStart, #mageStart");
            nonBarbarian.forEach(element => {
                element.style.display = "none";
            })
            infoParagraph.innerHTML = 'Next barbarian decision.';
            document.getElementById("barbarianStart").style.display = "block";
            break;

        case 'rogue':
            const nonRogue = document.querySelectorAll("#rangerStart, #barbarianStart, #mageStart");
            nonRogue.forEach(element => {
                element.style.display = "none";
            })
            infoParagraph.innerHTML = 'Next rogue decision.';
            document.getElementById("rogueStart").style.display = "block";
            break;

        case 'mage':
            const nonMage = document.querySelectorAll("#rangerStart, #barbarianStart, #rogueStart");
            nonMage.forEach(element => {
                element.style.display = "none";
            })
            infoParagraph.innerHTML = 'Next mage decision.';
            document.getElementById("mageStart").style.display = "block";
            break;

        default:
            const level1Branch = document.getElementsByClassName("level1");
            for (let i = 0; i < level1Branch.length; i++) {
                level1Branch[i].style.display = "none";
            }
            infoParagraph.innerHTML = '';
    }
}

selectElement.addEventListener('change', updateCharacter);
updateCharacter();
