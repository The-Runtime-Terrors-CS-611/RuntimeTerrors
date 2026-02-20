const fs = require("fs");
const path = require("path");

function loadHtmlIntoDom() {
  const htmlPath = path.join(__dirname, "..", "index.html");
  const html = fs.readFileSync(htmlPath, "utf8");
  document.open();
  document.write(html);
  document.close();
}

function loadScript() {
  // Ensure a clean load each test
  jest.resetModules();

  const scriptPath = path.join(__dirname, "..", "script.js");
  const scriptCode = fs.readFileSync(scriptPath, "utf8");

  // Execute the script in the JSDOM context
  // eslint-disable-next-line no-eval
  eval(scriptCode);
}

function setSelectValue(selectId, value) {
  const select = document.getElementById(selectId);
  select.value = value;
  // Either call updateCharacter directly, or simulate the event.
  select.dispatchEvent(new Event("change"));
}

describe("Forged in Fire - character selection branching", () => {
  beforeEach(() => {
    loadHtmlIntoDom();
    loadScript();
  });

  test("Default state hides all level1 branches and clears info text", () => {
    const ranger = document.getElementById("rangerStart");
    const barbarian = document.getElementById("barbarianStart");
    const rogue = document.getElementById("rogueStart");
    const mage = document.getElementById("mageStart");

    // script.js calls updateCharacter() once on load; default selection is ""
    expect(ranger.style.display).toBe("none");
    expect(barbarian.style.display).toBe("none");
    expect(rogue.style.display).toBe("none");
    expect(mage.style.display).toBe("none");

    const info = document.getElementById("character-info");
    expect(info.innerHTML).toBe("");
  });

  test("Selecting ranger shows rangerStart and hides the other branches", () => {
    setSelectValue("character-select", "ranger");

    expect(document.getElementById("rangerStart").style.display).toBe("block");
    expect(document.getElementById("barbarianStart").style.display).toBe("none");
    expect(document.getElementById("rogueStart").style.display).toBe("none");
    expect(document.getElementById("mageStart").style.display).toBe("none");

    expect(document.getElementById("character-info").innerHTML).toBe("You shot or whatever");
  });

  test("Selecting barbarian shows barbarianStart and hides the other branches", () => {
    setSelectValue("character-select", "barbarian");

    expect(document.getElementById("barbarianStart").style.display).toBe("block");
    expect(document.getElementById("rangerStart").style.display).toBe("none");
    expect(document.getElementById("rogueStart").style.display).toBe("none");
    expect(document.getElementById("mageStart").style.display).toBe("none");

    expect(document.getElementById("character-info").innerHTML).toBe("Next barbarian decision.");
  });

  test("Selecting rogue shows rogueStart and hides the other branches", () => {
    setSelectValue("character-select", "rogue");

    expect(document.getElementById("rogueStart").style.display).toBe("block");
    expect(document.getElementById("rangerStart").style.display).toBe("none");
    expect(document.getElementById("barbarianStart").style.display).toBe("none");
    expect(document.getElementById("mageStart").style.display).toBe("none");

    expect(document.getElementById("character-info").innerHTML).toBe("Next rogue decision.");
  });

  test("Selecting mage shows mageStart and hides the other branches", () => {
    setSelectValue("character-select", "mage");

    expect(document.getElementById("mageStart").style.display).toBe("block");
    expect(document.getElementById("rangerStart").style.display).toBe("none");
    expect(document.getElementById("barbarianStart").style.display).toBe("none");
    expect(document.getElementById("rogueStart").style.display).toBe("none");

    expect(document.getElementById("character-info").innerHTML).toBe("Next mage decision.");
  });

  test("Resetting to default hides all branches and clears info text again", () => {
    setSelectValue("character-select", "mage");
    setSelectValue("character-select", "");

    expect(document.getElementById("rangerStart").style.display).toBe("none");
    expect(document.getElementById("barbarianStart").style.display).toBe("none");
    expect(document.getElementById("rogueStart").style.display).toBe("none");
    expect(document.getElementById("mageStart").style.display).toBe("none");
    expect(document.getElementById("character-info").innerHTML).toBe("");
  });
});