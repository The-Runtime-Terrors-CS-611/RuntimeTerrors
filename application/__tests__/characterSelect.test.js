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
  jest.resetModules();
  const scriptPath = path.join(__dirname, "..", "script.js");
  const scriptCode = fs.readFileSync(scriptPath, "utf8");
  // Execute the script in the JSDOM context
  // eslint-disable-next-line no-eval
  eval(scriptCode);
}

function setSelectValue(selectId, value) {
  const select = document.getElementById(selectId);
  if (!select) throw new Error(`Missing select element: #${selectId}`);
  select.value = value;
  select.dispatchEvent(new Event("change"));
}

function expectHidden(id) {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Missing element: #${id}`);
  expect(el.style.display).toBe("none");
}

function expectShown(id) {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Missing element: #${id}`);
  expect(el.style.display).toBe("block");
}

describe("Forged in Fire - character selection branching (level1 only)", () => {
  beforeEach(() => {
    loadHtmlIntoDom();
    loadScript();
  });

  test("Default state hides all level1 branches", () => {
    // script.js calls updateCharacter() on load with default selection ("")
    expectHidden("rangerStart");
    expectHidden("barbarianStart");
    expectHidden("rogueStart");
    expectHidden("mageStart");
  });

  test("Selecting ranger shows rangerStart and hides the other branches", () => {
    setSelectValue("character-select", "ranger");

    expectShown("rangerStart");
    expectHidden("barbarianStart");
    expectHidden("rogueStart");
    expectHidden("mageStart");
  });

  test("Selecting barbarian shows barbarianStart and hides the other branches", () => {
    setSelectValue("character-select", "barbarian");

    expectShown("barbarianStart");
    expectHidden("rangerStart");
    expectHidden("rogueStart");
    expectHidden("mageStart");
  });

  test("Selecting rogue shows rogueStart and hides the other branches", () => {
    setSelectValue("character-select", "rogue");

    expectShown("rogueStart");
    expectHidden("rangerStart");
    expectHidden("barbarianStart");
    expectHidden("mageStart");
  });

  test("Selecting mage shows mageStart and hides the other branches", () => {
    setSelectValue("character-select", "mage");

    expectShown("mageStart");
    expectHidden("rangerStart");
    expectHidden("barbarianStart");
    expectHidden("rogueStart");
  });

  test("Resetting to default hides all branches again", () => {
    setSelectValue("character-select", "mage");
    setSelectValue("character-select", ""); // back to default option

    expectHidden("rangerStart");
    expectHidden("barbarianStart");
    expectHidden("rogueStart");
    expectHidden("mageStart");
  });
});