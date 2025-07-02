import Header from "./components/Header";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

import Me from "./assets/imgs/me.png";

export default () => {
    return (
        <>
            <Header />
            <main
                className="py-5 my-5 container main user-select-none"
                id="header"
            >
                <article className="row">
                    <div className="col-md-7 d-flex align-items-center">
                        <div>
                            <span className="text-hi font-principal ">
                                Olá, sou...
                                <div className="popover-arrow"></div>
                            </span>
                            <h1 className="display-2 ">
                                <span className="span-primary">
                                    Daniel Tenório✨{" "}
                                </span>
                                <span className="span-secondary">
                                    Desenvolvedor{" "}
                                    <span className="span-third">
                                        FullStack
                                    </span>
                                </span>
                            </h1>
                        </div>
                    </div>
                    <div className="col-md-5 d-flex justify-content-center">
                        <a href="#about">
                            <img
                                src={Me}
                                className="img-fluid rounded-circle my-image"
                                alt="my-image"
                            />
                        </a>
                    </div>
                </article>
            </main>
            <Projects />
            <AboutMe />
            <Footer />
        </>
    );
};
