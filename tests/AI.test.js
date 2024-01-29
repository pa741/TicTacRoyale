const CalculateMove = require("../data/AI.js");








let board = [
    "O", "", "",
    "X", "X", "",
    "", "", ""];
let result = 5;
test("Prent Loss", () => {
    expect(CalculateMove(board)).toBe(result);
});
board = [
    "O", "O", "",
    "X", "X", "",
    "", "", ""];
result = 2;
test("Try to win 1", () => {
    expect(CalculateMove(board)).toBe(result);
});
board = [
    "O", "X", "O",
    "X", "X", "O",
    "", "", ""];
result = 8;
test("Try to win 2", () => {
    expect(CalculateMove(board)).toBe(result);
});

board = [
    "O", "X", "X",
    "X", "O", "O",
    "O", "", "X"];
result = 7;
test("Tie", () => {
    expect(CalculateMove(board)).toBe(result);
});
board = [
    "O", "X", "X",
    "X", "O", "O",
    "O", "O", "X"];
result = -1;
test("No space", () => {
    expect(CalculateMove(board)).toBe(result);
});