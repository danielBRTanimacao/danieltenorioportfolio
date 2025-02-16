import Me2 from "../assets/imgs/me2.jpg";
import Me from "../assets/imgs/me.png";

import Pdf from "../assets/download/Daniel-Tenorio-Curriculo.pdf";

export default () => {
    return (
        <>
            <section className="py-5 my-5 hidde-top" id="about">
                <h1
                    className="display-1 fw-bold center-txt py-3"
                    style={{ color: "var(--code-blue-light)" }}
                >
                    SobreMim
                </h1>
                <div className="d-flex">
                    <img
                        src={Me2}
                        alt="img-center"
                        className="img-fluid right-image me2"
                    />
                    <article className="transparent-bg p-4 flex-items">
                        <div>
                            <img
                                src={Me}
                                alt="img-center"
                                className="img-fluid rounded-pill flex-image me2"
                            />
                            <h2 className="display-2 fw-bold">Quem sou eu?</h2>
                            <div className="pt-3">
                                <p className="lead">
                                    Meu nome é Daniel Tenório. Atualmente, estou
                                    cursando Análise e Desenvolvimento de
                                    Sistemas. Possuo dois anos de experiência no
                                    desenvolvimento e criação de novos
                                    softwares.
                                </p>
                                <p className="lead">
                                    Embora ainda esteja no início da minha
                                    carreira e tenha tido poucas experiências
                                    com equipes, sou capaz de realizar tarefas
                                    básicas como CRUD, consumo e criação de
                                    APIs, além de utilizar bancos de dados...
                                </p>
                            </div>
                        </div>

                        <div
                            className="mt-auto flex-curriculum"
                            style={{ width: "100%" }}
                        >
                            <h3>Curriculos</h3>
                            <a
                                href="/Daniel-Tenorio-curriculo.docx"
                                className="btn radial-btn-w"
                                download="curriculo Daniel"
                            >
                                WORD
                            </a>
                            <a
                                href={Pdf}
                                className="btn radial-btn-p"
                                download="curriculo Daniel"
                            >
                                PDF
                            </a>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
};
