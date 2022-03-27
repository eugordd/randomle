import { BiHelpCircle } from 'react-icons/bi';
import { GrHelp } from 'react-icons/gr'
import { GiHelp } from 'react-icons/gi';
import { IoIosHelpBuoy } from "react-icons/io";

import IconButton from "../../ui/IconButton/IconButton";

import './HeaderHelp.css';

function HeaderHelp() {
    const icons = [<BiHelpCircle />, <GrHelp />, <GiHelp />, <IoIosHelpBuoy />];
    return (
        <IconButton
            className="header-help"
            interval={2000}
            icons={icons}
        />
    )
}

export default HeaderHelp;