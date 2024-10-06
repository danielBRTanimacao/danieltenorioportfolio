import Docker from "../assets/svgs/icons/docker.svg";

export default () => {
    return (
        <>
            <section className="px-4 py-5">
                <h1 className="display-4 py-3" id="tec">
                    <span style={{ color: "var(--code-pink)" }}>def </span>
                    <span style={{ color: "var(--gr-code)" }}>tecnologias</span>
                    <span style={{ color: "var(--code-orange)" }}>
                        (<span style={{ color: "var(--code-blue)" }}></span>)
                    </span>
                    <span>:</span>
                </h1>
                <article className="center-tecs">
                    <div className="docker">
                        <img src={Docker} alt="docker" />
                    </div>
                    <div className="django">
                        <img src="" alt="django" />
                    </div>
                    <div className="python">
                        <img src="" alt="python" />
                    </div>
                    <div className="react">
                        <img
                            src="https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256"
                            alt="react"
                        />
                    </div>
                </article>
            </section>
        </>
    );
};
