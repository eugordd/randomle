import HeaderHelp from "./HeaderHelp/HeaderHelp";
import HeaderSettings from "./HeaderSettings/HeaderSettings";
import Container from "../ui/Container/Container";

import './Header.css';

function Header() {
    return (
        <header
            className="header"
        >
            <Container className="header__container">
                <div className="header__left">
                    <HeaderHelp />
                </div>
                <div className="header__title">
                    Randomle
                </div>
                <div className="header__right">
                    <HeaderSettings />
                </div>
            </Container>
        </header>
    )
}

export default Header