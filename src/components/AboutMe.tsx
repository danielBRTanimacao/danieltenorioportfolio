import Me from "../assets/imgs/me.png";

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
                <div
                    className="d-flex rounded"
                    style={{ outline: "8px solid var(--flash-light)" }}
                >
                    <img
                        src={Me}
                        alt="img-center"
                        className="img-fluid rounded-start"
                    />
                    <article className="transparent-bg p-4 rounded-end">
                        <div>
                            <aside>
                                <h2>Agora um pouco sobre mim</h2>
                                <div>
                                    <a href="#" className="btn">
                                        CURRICULO WORD icon
                                    </a>
                                    <a href="#" className="btn">
                                        CURRICULO PDF icon
                                    </a>
                                </div>
                            </aside>
                        </div>
                        <div className="pt-3">
                            <p className="lead">
                                Meu nome é Daniel Tenório. Atualmente, estou
                                cursando Análise e Desenvolvimento de Sistemas.
                                Possuo dois anos de experiência no
                                desenvolvimento e criação de novos softwares.
                            </p>
                            <p className="lead">
                                Embora ainda esteja no início da minha carreira
                                e tenha tido poucas experiências com equipes,
                                sou capaz de realizar tarefas básicas como CRUD,
                                consumo e criação de APIs, além de utilizar
                                bancos de dados...
                            </p>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
};
