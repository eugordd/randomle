import {useEffect} from "react";

import { FiDelete } from 'react-icons/fi';
import { AiOutlineEnter } from 'react-icons/ai';

import GameKeyboardButton from "./GameKeyboardButton/GameKeyboardButton";

import './GameKeyboard.css';

function GameKeyboard(props) {
    function handleKeyClick(key) {
        if (key === 'Enter') props.onEnterClick();
        if (key === 'Backspace') props.onBackspaceClick();
        props.onLetterClick(key);
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') return;
        if (!/[A-Za-z]/.test(event.key)) return;

        props.onLetterClick(event.key.toLowerCase());
    }

    function handleSpecialKeyDown(event) {
        if (event.key === 'Enter') props.onEnterClick();
        if (event.key === 'Backspace') props.onBackspaceClick();
    }

    useEffect(() => {
        window.addEventListener('keypress', handleKeyPress);
        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        };
    })

    useEffect(() => {
        window.addEventListener('keydown', handleSpecialKeyDown);
        return () => {
            window.removeEventListener('keydown', handleSpecialKeyDown);
        };
    })

    const keyList = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['gutter', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'gutter'],
        ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace']
    ];

    const keyListRender = keyList.map((row, index) =>
        <div key={index} className="game-keyboard__row">
            {row.map((char, index) => {
                if (char === 'gutter') {
                    return <div
                        key={`gutter-${index}`}
                        className="game-keyboard__row-spacer"
                    />
                }

                let icon, increased;
                if (char === 'Enter') {
                    icon = <AiOutlineEnter />;
                    increased = true;
                }
                if (char === 'Backspace') {
                    icon = <FiDelete />;
                    increased = true;
                }

                const status = props.checkLetter(char);

                return <GameKeyboardButton
                    key={char}
                    status={status}
                    char={char}
                    icon={icon}
                    increased={increased}
                    onClick={() => handleKeyClick(char)}
                />
            })}
        </div>
    );
    return (
        <div className='game-keyboard'>
            {keyListRender}
        </div>
    )
}

export default GameKeyboard;