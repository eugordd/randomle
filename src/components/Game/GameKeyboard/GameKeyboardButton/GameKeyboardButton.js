import './GameKeyboardButton.css';

function GameKeyboardButton(props) {
    const increased = props.increased || false;

    const buttonClasses = `
        game-keyboard-button
        ${increased ? 'game-keyboard-button_increased' : ''}
        ${props.status === 'absent' ? 'game-keyboard-button_absent' : ''}
        ${props.status === 'present' ? 'game-keyboard-button_present' : ''}
        ${props.status === 'correct' ? 'game-keyboard-button_correct' : ''}
    `

    const buttonContent = props.icon || props.char;
    return (
        <button className={buttonClasses} onClick={props.onClick}>
            {buttonContent}
        </button>
    )
}

export default GameKeyboardButton;