import GameBoardTile from "./GameBoardTile/GameBoardTile";

import './GameBoard.css';

function GameBoard(props) {
    const wordsListRender = props.wordsList.map((wordItem, wordIndex) => {
        let lettersList = Array.from({ length: 5 }).fill('');
        lettersList = lettersList.map((letter, letterIndex) => {
            const value = wordItem.word[letterIndex] ? wordItem.word[letterIndex] : '';

            let status = 'blank';
            if (props.currentWordIndex === wordIndex) status = 'active';
            if (wordItem.completed) status = props.checkLetter(value);

            return {
                status,
                value
            }
        });

        return (
            <div
                className='game-board__row'
                key={wordIndex}
            >
                {lettersList.map((letter, index) =>
                    <GameBoardTile
                        key={letter.value + index}
                        status={letter.status}
                    >
                        {letter.value}
                    </GameBoardTile>
                )}
            </div>
        )
    });
    return (
        <div className="game-board">
            {wordsListRender}
        </div>
    )
}

export default GameBoard;