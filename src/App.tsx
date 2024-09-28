import Header from "./components/Header";

import Me from "./assets/imgs/me.png";

export default () => {
    return (
        <>
            <Header />
            <main className="px-4 main">
                <article className="row">
                    <div className="col-md-7 d-flex align-items-center">
                        <div>
                            <span className="text-hi">Olá, sou...</span>
                            <h1 className="font-principal">Daniel Tenório </h1>
                            <h1 className="display-1">Desenvolvedor BackEnd</h1>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img
                            src={Me}
                            className="img-fluid rounded-circle"
                            alt="my-image"
                        />
                    </div>
                </article>
            </main>
        </>
    );
};
