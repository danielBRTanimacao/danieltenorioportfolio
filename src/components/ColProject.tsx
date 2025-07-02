export default ({
    img,
    title,
    text,
    linkGit,
}: {
    img: string;
    title: React.ReactNode;
    text: string;
    linkGit: string;
}) => {
    return (
        <div className="col d-flex justify-content-center">
            <div className="card text-truncate">
                <h5 className="text-center">{title}</h5>
                <div
                    className="img-project"
                    style={{
                        backgroundImage: `url(${img})`,
                    }}
                ></div>
                <div className="card-body">
                    <p className="card-text">{text}</p>
                    <a
                        href={linkGit}
                        target="_blank"
                        className="btn btn-outline-light btn-sm"
                        rel="noopener noreferrer"
                    >
                        Saiba mais
                    </a>
                </div>
            </div>
        </div>
    );
};
