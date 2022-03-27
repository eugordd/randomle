import { FiSettings } from 'react-icons/fi';
import { GiSettingsKnobs } from 'react-icons/gi';
import { IoSettings } from 'react-icons/io5';
import { GoSettings } from 'react-icons/go';

import IconButton from "../../ui/IconButton/IconButton";

import './HeaderSettings.css';

function HeadingSettings() {
    const icons = [<FiSettings />, <GiSettingsKnobs />, <IoSettings />, <GoSettings />];
    return (
        <IconButton
            className="header-help"
            interval={3000}
            icons={icons}
        />
    )
}

export default HeadingSettings;