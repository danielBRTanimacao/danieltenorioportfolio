import Header from "./components/Header";

export default () => {
    return (
        <>
            <Header />
            <main className="main">
                <h1 className="font-principal">
                    Daniel Tenório{" "}
                    <span className="text-body-secondary">
                        Desenvolvedor BackEnd
                    </span>
                </h1>
                <img src="image" alt="my-image" />
            </main>
        </>
    );
};
