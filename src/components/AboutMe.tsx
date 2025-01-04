import Me2 from "../assets/imgs/me2.jpg";
import Me from "../assets/imgs/me.png";

import Pdf from "../assets/download/Daniel-Tenorio-Curriculo.pdf";

export default () => {
    return (
        <>
            <section className="px-4 py-5 hidde-top" id="about">
                <h1 className="display-4 py-3">
                    <span style={{ color: "var(--code-pink)" }}>class </span>
                    <span style={{ color: "var(--code-blue)" }}>SobreMim</span>
                    <span style={{ color: "var(--code-orange)" }}>
                        (<span style={{ color: "var(--code-blue)" }}>Me</span>)
                    </span>
                    <span>:</span>
                </h1>
                <div className="d-flex rounded shadow-lg">
                    <img
                        src={Me2}
                        alt="img-center"
                        className="img-fluid rounded-start right-image me2"
                    />
                    <article className="transparent-bg p-4 rounded-end flex-items">
                        <div>
                            <img
                                src={Me}
                                alt="img-center"
                                className="img-fluid rounded-pill flex-image me2"
                            />
                            <h2>Agora um pouco sobre mim</h2>
                            <div className="pt-3">
                                <p className="lead">
                                    Meu nome é Daniel Tenório. Atualmente, estou
                                    cursando Análise e Desenvolvimento de
                                    Sistemas. Possuo dois anos de experiência no
                                    desenvolvimento e criação de novos
                                    softwares. Embora ainda esteja no início da
                                    minha carreira e tenha tido poucas
                                    experiências com equipes, sou capaz de
                                    realizar tarefas básicas como CRUD, consumo
                                    e criação de APIs, além de utilizar bancos
                                    de dados...
                                </p>
                            </div>
                        </div>
                        <div className="d-flex gap-2">
                            <div className="bg-light text-dark rounded p-2">
                                <h4>hard skills</h4>
                            </div>
                            <div className="bg-light text-dark rounded p-2">
                                <h4>soft skills</h4>
                            </div>
                        </div>
                        <div
                            className="mt-auto flex-curriculum"
                            style={{ width: "50%" }}
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
