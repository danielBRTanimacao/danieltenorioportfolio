export default () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="font-principal text-center pt-5 pb-3">
                <h5>Daniel Tenório Portfolio - {currentYear}©</h5>
            </footer>
        </>
    );
};
