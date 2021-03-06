'use strict';
var vscode = require('vscode');
var LineByLineReader = require('line-by-line');
function translateCharacterPositionsToPositions(filePath, positions) {
    return new Promise(function (resolve, reject) {
        var lineNumbersIndexedByPosition = new Map();
        //Find the largest (last position we have to check)
        var largestPosition = 0;
        positions.forEach(function (pos) { return largestPosition = pos > largestPosition ? pos : largestPosition; });
        //If the file is open use the editor to get the line number
        var docs = vscode.workspace.textDocuments.filter(function (doc) { return doc.uri.fsPath.toUpperCase() === filePath.toUpperCase(); });
        if (docs.length > 0) {
            var doc = docs[0];
            positions.forEach(function (pos) {
                lineNumbersIndexedByPosition.set(pos, doc.positionAt(pos));
            });
            return resolve(lineNumbersIndexedByPosition);
        }
        //Open the file and get the line numbers untill the last position required
        var lr = new LineByLineReader(filePath);
        var lineNumber = 0;
        var lengthOfEachLine = new Map();
        var totalCharactersRead = 0;
        lr.on('error', reject);
        lr.on('line', function (line) {
            //Two characters for the charriage return and line feeds
            lengthOfEachLine.set(lineNumber, line.length + 2);
            var totalCharactersUntillPreviousLine = totalCharactersRead;
            totalCharactersRead += line.length + 2;
            positions.forEach(function (pos) {
                if (totalCharactersRead === pos) {
                    lineNumbersIndexedByPosition.set(pos, new vscode.Position(lineNumber, line.length));
                    return;
                }
                if (totalCharactersRead > pos && pos > totalCharactersUntillPreviousLine) {
                    lineNumbersIndexedByPosition.set(pos, new vscode.Position(lineNumber, pos - totalCharactersUntillPreviousLine));
                }
            });
            //If we have read untill the position required, then bugger off from here
            if (totalCharactersRead >= largestPosition) {
                lr.close();
                lineNumber++;
            }
        });
        lr.on('end', function () {
            resolve(lineNumbersIndexedByPosition);
        });
    });
}
exports.translateCharacterPositionsToPositions = translateCharacterPositionsToPositions;
//# sourceMappingURL=lineUtils.js.map