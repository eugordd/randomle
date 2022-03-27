import { useState } from "react";

import { NotificationManager } from "react-notifications";

import Container from "../ui/Container/Container";
import GameKeyboard from "./GameKeyboard/GameKeyboard";
import GameBoard from "./GameBoard/GameBoard";

import { generateWord, checkWordExist } from "../../helpers/words";

import './Game.css';

function Game() {
    const lettersInWord = 5;
    const wordsListLength = 5;
    const initWordsList = Array(wordsListLength)
        .fill('')
        .map(()=>({ word: '', completed: false }))
    const initLettersStatuses = {
        absent: [],
        present: [],
        correct: []
    };

    const [correctWord, setCorrectWord] = useState(generateWord());
    const [lettersStatuses, setLettersStatuses] = useState(initLettersStatuses);
    const [wordsList, setWordsList] = useState(initWordsList)
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    const currentWord = wordsList[currentWordIndex].word;

    function updateWord(word, completed) {
        const item = { word, completed };
        const list = [ ...wordsList ];
        list[currentWordIndex] = item;
        setWordsList(list);
        return list;
    }

    function updateLettersList(wordsList) {
        const newLettersStatuses = {
            absent: [],
            present: [],
            correct: []
        };
        wordsList
            .filter(wordObj => wordObj.completed)
            .forEach(wordObj => {
                wordObj.word.split('').forEach((letter, index) => {
                    let letterStatus = 'absent';
                    if (correctWord.includes(letter)) letterStatus = 'present';
                    if (correctWord[index] === letter) letterStatus = 'correct';

                    newLettersStatuses[letterStatus].push(letter);
                })
            })
        setLettersStatuses(newLettersStatuses);
    }

    const checkLetter = letter => {
        const letterStatus = Object
            .entries(lettersStatuses)
            .find((status, index) => status[1].includes(letter))
        return letterStatus ? letterStatus[0] : 'blank';
    }

    function handleLetterClick(key) {
        let newWord = currentWord;
        if (currentWord.length === wordsListLength) {
            return;
        }
        newWord += key;
        updateWord(newWord, false);
    }

    function handleEnterClick() {
        if (currentWord.length === lettersInWord) {
            if (!checkWordExist(currentWord)) {
                NotificationManager.error('Word is not in word list!', '', 1000);
                return;
            }

            const newWordsList = updateWord(currentWord, true);
            updateLettersList(newWordsList);
            if (currentWord === correctWord) {
                NotificationManager.success('You win!', '', 3000);
            } else if ((currentWord !== correctWord) && (currentWordIndex === wordsListLength - 1)) {
                if (wordsList[currentWordIndex].completed) return;
                NotificationManager.error(correctWord, '', 10000);

            } else {
                setCurrentWordIndex(currentWordIndex + 1);
                setCorrectWord(generateWord());
            }
        }
    }

    function handleBackspaceClick() {
        if (currentWord.length > 0) {
            const newWord = currentWord.slice(0, -1);
            updateWord(newWord, false);
        }
    }

    return (
        <Container className="game">
            <GameBoard
                checkLetter={checkLetter}
                wordsList={wordsList}
                currentWordIndex={currentWordIndex}
            />
            <GameKeyboard
                checkLetter={checkLetter}
                onLetterClick={handleLetterClick}
                onEnterClick={handleEnterClick}
                onBackspaceClick={handleBackspaceClick}
            />
        </Container>
    )
}

export default Game;