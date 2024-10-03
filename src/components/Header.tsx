export default () => {
    return (
        <>
            <header className="navbar navbar-expand-lg px-3 pt-3">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand px-3">
                        D
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarHeaderContent"
                        aria-controls="navbarHeaderContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon fs-3"></span>
                    </button>
                    <nav
                        className="collapse navbar-collapse"
                        id="navbarHeaderContent"
                    >
                        <ul className="navbar-nav ms-auto">
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
                </div>
            </header>
        </>
    );
};
