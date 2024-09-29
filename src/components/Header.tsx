import { useState } from "react";

export default () => {
    const [hide, setHide] = useState(false);
    const burgerChange = () => {
        setHide((prevHide) => !prevHide);
    };
    return (
        <>
            <header className="navbar navbar-expand px-4 pt-3">
                <a href="/" className="navbar-brand px-3">
                    D
                </a>
                <button onClick={burgerChange} className="burger-btn">
                    Hide
                </button>
                <nav>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="#header">
                                <span>1.</span>
                                Cabeçalho
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects">
                                <span>2.</span>
                                Projetos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#about">
                                <span>3.</span>
                                Sobre mim
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#tec">
                                <span>4.</span>
                                Tecnologias
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};
