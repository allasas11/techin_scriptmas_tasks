
const inputLines = [
    "Ei, drauguži, žiemos vidury Roges jei turi, tai gerai!",
    "Į kalną aukščiausią, patį balčiausią įkopt jei gali, tai gerai!"
];

function buildTreeStructure(lines) {
    const treeLines = [];

    const allWords = lines.join(" ").split(" ").filter(word => word !== "");

    let wordsNeeded = 1;

    while (allWords.length > 0) {

        const currentLineWords = allWords.splice(0, wordsNeeded);

        const lineString = currentLineWords.join(" ");
        treeLines.push(lineString);

        wordsNeeded++;
    }

    return treeLines;
}
function findMaxLineLength(lines) {
    let longest = 0;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].length > longest) {
            longest = lines[i].length;
        }
    }
    return longest;
}
function alignToTrunk(treeLines) {
    const axis = findMaxLineLength(treeLines);
    const finalResult = [];

    for (let i = 0; i < treeLines.length; i++) {
        const currentLine = treeLines[i];

        if (i % 2 === 0) {
            const spaceCount = axis - currentLine.length;
            const paddedLine = " ".repeat(spaceCount) + currentLine;
            finalResult.push(paddedLine);
        } else {
            const paddedLine = " ".repeat(axis) + currentLine;
            finalResult.push(paddedLine);
        }
    }

    return finalResult;
}

const lines = buildTreeStructure(inputLines);

const treeOutput = alignToTrunk(lines);

const displayArea = document.getElementById("tree-output");
if (displayArea) {
    displayArea.textContent = treeOutput.join("\n");
}