import Me from "../assets/imgs/me.png";

import Docx from "../assets/download/Daniel-Tenorio-Curriculo.docx";
import Pdf from "../assets/download/Daniel-Tenorio-Curriculo.pdf";

export default () => {
    return (
        <>
            <section className="px-4 pb-5">
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
                        src={Me}
                        alt="img-center"
                        className="img-fluid rounded-start right-image"
                    />
                    <article className="transparent-bg p-4 rounded-end flex-items">
                        <div>
                            <img
                                src={Me}
                                alt="img-center"
                                className="img-fluid rounded-pill flex-image"
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
                        <div className="mt-auto flex-curriculum">
                            <h3>Curriculos</h3>
                            <a
                                href={Docx}
                                className="btn btn-primary"
                                download="curriculo Daniel"
                            >
                                WORD
                            </a>
                            <a
                                href={Pdf}
                                className="btn btn-danger"
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
