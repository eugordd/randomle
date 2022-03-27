import './IconButton.css';

import { useEffect, useState } from "react";

function IconButton(props) {
    const icons = props.icons || [];
    const interval = props.interval || 5000;
    const isIconDynamic = icons.length > 0 && !props.children;

    const [iconIndex, setIconIndex] = useState(Math.floor(Math.random() * icons.length));
    useEffect(
        () => {
            if (isIconDynamic) {
                const intervalId = setInterval(() => {
                    const newIndex = (iconIndex === icons.length - 1) ? 0 : iconIndex + 1;
                    setIconIndex(newIndex);
                }, interval);
                return () => clearInterval(intervalId);
            }
        }
    )

    const renderingIcon = isIconDynamic ? icons[iconIndex] : props.children;
    return (
        <button className="icon-button" onClick={props.onClick}>
            {renderingIcon}
        </button>
    )
}

export default IconButton;