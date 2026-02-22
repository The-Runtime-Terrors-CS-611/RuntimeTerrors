function hide(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => el.style.display = "none");
}

const selectElement = document.getElementById('character-select');
const mageSelect = document.getElementById('mage-select');
const rogueSelect = document.getElementById('rogue-select');
const barbarianSelect = document.getElementById('barbarian-select');
const rangerSelect = document.getElementById('ranger-select');

function updateCharacter() {
    hide('.level1');
    hide('.level2');
 
    if (mageSelect) mageSelect.selectedIndex = 0;
    if (rogueSelect) rogueSelect.selectedIndex = 0;
    if (barbarianSelect) barbarianSelect.selectedIndex = 0;
    if (rangerSelect) rangerSelect.selectedIndex = 0;

    const characterSelect = selectElement.value;
    switch (characterSelect) {
        case 'ranger':
            document.getElementById("rangerStart").style.display= "block";
            break;

        case 'barbarian':
            document.getElementById("barbarianStart").style.display = "block";
            break;

        case 'rogue':
            document.getElementById("rogueStart").style.display = "block";
            break;

        case 'mage':
            document.getElementById("mageStart").style.display = "block";
            break;

        default:
            hide('.level1');
    }
}
selectElement.addEventListener('change', updateCharacter);
updateCharacter();

function mageBranching() {
    const mageFirst = mageSelect.value;
    hide('.level2');
    switch (mageFirst) {
        case 'mage1':
            document.getElementById("mageA").style.display= "block";
            break;

        case 'mage2':
            document.getElementById("mageB").style.display = "block";
            break;
    }
}
mageSelect.addEventListener('change', mageBranching);
mageBranching();

function rogueBranching() {
    const rogueFirst = rogueSelect.value;
    hide('.level2');
    switch (rogueFirst) {
        case 'rogue1':
            document.getElementById("rogueA").style.display= "block";
            break;

        case 'rogue2':
            document.getElementById("rogueB").style.display = "block";
            break;
    }
}
rogueSelect.addEventListener('change', rogueBranching);
rogueBranching();

function rangerBranching() {
    const rangerFirst = rangerSelect.value;
    hide('.level2');
    switch (rangerFirst) {
        case 'ranger1':
            document.getElementById("rangerA").style.display= "block";
            break;

        case 'ranger2':
            document.getElementById("rangerB").style.display = "block";
            break;
    }
}
rangerSelect.addEventListener('change', rangerBranching);
rangerBranching();

function barbarianBranching() {
    const barbarianFirst = barbarianSelect.value;
    hide('.level2');
    switch (barbarianFirst) {
        case 'barbarian1':
            document.getElementById("barbarianA").style.display= "block";
            break;

        case 'barbarian2':
            document.getElementById("barbarianB").style.display = "block";
            break;
    }
}
barbarianSelect.addEventListener('change', barbarianBranching);
barbarianBranching();

if (typeof window !== "undefined") {
    window.__forgedInFire__ = {
        updateCharacter,
        mageBranching,
        rogueBranching,
        rangerBranching,
        barbarianBranching
    };
}