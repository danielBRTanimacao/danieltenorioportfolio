export default ({
    img,
    title,
    text,
    linkGit
}: {
    img: string;
    title: React.ReactNode;
    text: string;
    linkGit: string;
}) => {
    return (
        <>
            <div className="col">
                <div className="card">
                    <h5 className="text-center">{title}</h5>
                    <img src={img} className="img-fluid" alt="img-project" />
                </div>
                <div className="card-body">
                    <p className="card-text text-truncate">{text}</p>
                    <a
                        href={linkGit}
                        target="_blank"
                        className="btn btn-outline-light btn-sm"
                    >
                        Saiba mais
                    </a>
                </div>
            </div>
        </>
    );
};
