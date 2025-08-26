import Me2 from "../assets/imgs/me2.webp";
import Me from "../assets/imgs/me.png";

import Pdf from "../assets/download/Daniel-Tenorio-Curriculo.pdf";

export default () => {
    return (
        <>
            <section
                className="py-5 my-5 hidde-top container user-select-none"
                id="about"
            >
                <div className="d-flex">
                    <div
                        className="secondary-image right-image me2 rounded-start"
                        style={{
                            backgroundImage: `url(${Me2})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                        }}
                    ></div>

                    <article className="p-4 flex-items">
                        <div>
                            <img
                                src={Me}
                                alt="img-center"
                                className="img-fluid rounded-pill flex-image me2"
                            />
                            <h2
                                className="display-3 fw-bold"
                                style={{ color: "var(--code-blue-light)" }}
                            >
                                Quem sou eu?
                            </h2>
                            <div className="pt-3">
                                <p className="lead">
                                    Meu nome é Daniel Tenório. Atualmente, estou
                                    cursando uma pôs graduação em
                                    Desenvolvimento fullstack já conclui o curso
                                    de Análise e Desenvolvimento de Sistemas.
                                </p>
                                <p className="lead">
                                    Sou Desenvolvedor Full Stack especializado
                                    em Java e Spring Boot, com experiência em
                                    soluções web, automação e integração de
                                    sistemas. Atuo em todas as etapas do
                                    desenvolvimento, priorizando escalabilidade,
                                    segurança e cloud. Busco oportunidades para
                                    colaborar em projetos inovadores, agregando
                                    valor e resultados para equipes e empresas.
                                </p>
                                <h4>Habilidades Técnicas</h4>
                                <aside className="d-flex justify-content-between gap-3 hability-style">
                                    <div>
                                        <h5>Back-end</h5>
                                        <ul>
                                            <li>Java (Spring Boot)</li>
                                            <li>Python (Django)</li>
                                            <li>PHP(Laravel)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5>Front end</h5>
                                        <ul>
                                            <li>
                                                Html, Css, Bootstrap, JavaScript
                                            </li>
                                            <li>React, Typescript</li>
                                            <li>Angular</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h5>Banco de dados</h5>
                                        <ul>
                                            <li>Docker, Docker-Compose</li>
                                            <li>MySql, PostGreSQl</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5>Integrações</h5>
                                        <ul>
                                            <li>Api Rest</li>
                                            <li>Autenticação JWT</li>
                                            <li>WebScraping</li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>

                        <div className="mt-auto pt-2" style={{ width: "100%" }}>
                            <h4>Contato</h4>
                            <p>danieltenorio2046@gmail.com</p>
                            <a
                                href={Pdf}
                                className="btn btn-outline-light"
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
