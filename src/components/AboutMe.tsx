import Me2 from "../assets/imgs/me2.webp";
import Me from "../assets/imgs/me.webp";
import Pdf from "../assets/download/Daniel-Tenorio-Curriculo.pdf";

export default function About() {
    return (
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
                            alt="Daniel Tenório"
                            className="img-fluid rounded-pill flex-image me2 mb-3"
                        />

                        <h2
                            className="display-3 fw-bold"
                            style={{ color: "var(--code-blue)" }}
                        >
                            Quem sou eu?
                        </h2>

                        <div className="pt-3">
                            <p className="lead">
                                Meu nome é <strong>Daniel Tenório</strong>. Sou
                                formado em{" "}
                                <strong style={{ color: "var(--code-pink)" }}>
                                    Análise e Desenvolvimento de Sistemas
                                </strong>{" "}
                                e atualmente estou me especializando através de
                                uma pós-graduação em{" "}
                                <strong style={{ color: "var(--code-purple)" }}>
                                    Desenvolvimento Fullstack
                                </strong>
                                .
                            </p>

                            <p className="lead">
                                Desenvolvedor Full Stack especializado na
                                criação de aplicações web escaláveis,
                                microsserviços e soluções em nuvem. Atuo em todo
                                o ciclo de vida do software — desde a
                                arquitetura do backend com{" "}
                                <strong>Java (Spring Boot)</strong> e{" "}
                                <strong>Python (Django)</strong>, modelagem de
                                dados e conteinerização com Docker, até a
                                entrega de interfaces reativas com{" "}
                                <strong>React, Next.js</strong> e{" "}
                                <strong>Angular</strong>.
                            </p>

                            <h4
                                className="mt-4 mb-3 font-principal"
                                style={{ color: "var(--gr-code)" }}
                            >
                                Habilidades Técnicas
                            </h4>

                            <div className="d-flex gap-3 hability-style">
                                <div>
                                    <h5 style={{ color: "var(--code-purple)" }}>
                                        Back-end & Arq.
                                    </h5>
                                    <ul>
                                        <li>Java (Spring Boot)</li>
                                        <li>Python (Django)</li>
                                        <li>PHP (Laravel)</li>
                                        <li>Microsserviços</li>
                                    </ul>
                                </div>

                                <div>
                                    <h5 style={{ color: "var(--code-blue)" }}>
                                        Front-end
                                    </h5>
                                    <ul>
                                        <li>React & Next.js</li>
                                        <li>Angular</li>
                                        <li>JS & TypeScript</li>
                                        <li>Tailwind & Bootstrap</li>
                                    </ul>
                                </div>

                                <div>
                                    <h5 style={{ color: "var(--code-orange)" }}>
                                        Bancos de Dados
                                    </h5>
                                    <ul>
                                        <li>MySQL</li>
                                        <li>PostgreSQL</li>
                                        <li>Firestore (NoSQL)</li>
                                    </ul>
                                </div>

                                <div>
                                    <h5 style={{ color: "var(--gr-code)" }}>
                                        DevOps & Cloud
                                    </h5>
                                    <ul>
                                        <li>Docker & Compose</li>
                                        <li>GCP & AWS Cloud</li>
                                        <li>APIs REST & JWT</li>
                                        <li>WebSockets</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-4 w-100 mt-4">
                        <h4
                            className="font-principal"
                            style={{ color: "var(--code-purple)" }}
                        >
                            Contato & Currículo
                        </h4>
                        <p className="mb-2">
                            <a
                                href="mailto:danieltenorio2046@gmail.com"
                                className="text-decoration-none"
                                style={{ color: "var(--code-blue)" }}
                            >
                                danieltenorio2046@gmail.com
                            </a>
                        </p>
                        <a
                            href={Pdf}
                            className="btn btn-outline-dark mt-1 font-principal"
                            download="Curriculo_Daniel_Tenorio.pdf"
                            style={{
                                borderColor: "var(--gr-code)",
                                color: "var(--gr-code)",
                            }}
                        >
                            Download PDF
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
}
