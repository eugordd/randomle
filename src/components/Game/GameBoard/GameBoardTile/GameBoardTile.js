import './GameBoardTile.css';

function GameBoardTile(props) {
    const tileClasses = `
        game-board-tile
        ${props.status === 'blank' ? 'game-board-tile_blank' : ''}
        ${props.status === 'active' ? 'game-board-tile_active' : ''}
        ${props.status === 'absent' ? 'game-board-tile_absent' : ''}
        ${props.status === 'present' ? 'game-board-tile_present' : ''}
        ${props.status === 'correct' ? 'game-board-tile_correct' : ''}
    `;

    return (
        <div className={tileClasses.trim()}>
            {props.children}
        </div>
    )
}

export default GameBoardTile