import Climar from "../assets/svgs/climar.svg";
import EbookWorld from "../assets/svgs/ebook-response.svg";

export default () => {
    return (
        <>
            <section className="px-4" id="projects">
                {/* animation left */}
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <h1>Climar</h1>
                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Repudiandae esse aspernatur aliquid!
                            Recusandae iusto impedit placeat adipisci velit
                            pariatur fuga natus minus, reprehenderit accusamus
                            amet esse nobis veniam quibusdam assumenda.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img src={Climar} className="img-fluid" alt="img" />
                    </div>
                </div>
                {/* animation right */}
                <div className="row align-items-center">
                    <div className="col-md-7 order-md-2">
                        <h1>Mucambo Moto Clube</h1>
                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aperiam iusto tempora facilis laborum eius
                            voluptas minus ratione dolorem ducimus cumque
                            corporis libero nisi rem nam facere officia aut,
                            assumenda provident.
                        </p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src={Climar} alt="img" className="img-fluid" />
                    </div>
                </div>
                {/* animation left */}
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <h1>Percepção Musical</h1>
                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Repudiandae esse aspernatur aliquid!
                            Recusandae iusto impedit placeat adipisci velit
                            pariatur fuga natus minus, reprehenderit accusamus
                            amet esse nobis veniam quibusdam assumenda.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img src={Climar} className="img-fluid" alt="img" />
                    </div>
                </div>
                {/* animation right */}
                <div className="row align-items-center">
                    <div className="col-md-7 order-md-2">
                        <h1>Ebook World</h1>
                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aperiam iusto tempora facilis laborum eius
                            voluptas minus ratione dolorem ducimus cumque
                            corporis libero nisi rem nam facere officia aut,
                            assumenda provident.
                        </p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src={EbookWorld} alt="img" className="img-fluid" />
                    </div>
                </div>
            </section>
            <section className="px-4">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                        <div className="card shadow-sm">
                            Desafio Django RestApi
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            QrCode Gerente Ar-condicionado
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">Urubu do pix PHP</div>
                        <div className="card-body">
                            <p className="card-text">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            Desafio PicPay DjangoRest
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">Projeto faculdade</div>
                        <div className="card-body">
                            <p className="card-text">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">Estudos gerais</div>
                        <div className="card-body">
                            <p className="card-text">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
