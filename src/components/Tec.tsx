import Docker from "../assets/svgs/icons/docker.svg";
import Django from "../assets/svgs/icons/django.svg";
import Python from "../assets/svgs/icons/python.svg";
import React_ from "../assets/svgs/icons/react.svg";

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
                <article className="center-tecs py-5">
                    <div className="docker">
                        <img src={Docker} width={100} alt="docker" />
                    </div>
                    <div className="django">
                        <img src={Django} width={100} alt="django" />
                    </div>
                    <div className="python">
                        <img src={Python} width={100} alt="python" />
                    </div>
                    <div className="react">
                        <img src={React_} width={100} alt="react" />
                    </div>
                </article>
            </section>
        </>
    );
};
