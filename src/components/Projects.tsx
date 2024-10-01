import Climar from "../assets/svgs/climar.svg";
import EbookWorld from "../assets/svgs/ebook-response.svg";

import DPicPay from "../assets/imgs/projects/DESAFIO BACKEND DJANGO.png";
import GProject from "../assets/imgs/projects/PROJETOS GITHUB.png";
import PSchool from "../assets/imgs/projects/PROJETOS SCHOOL.png";
import PUrubu from "../assets/imgs/projects/PROJETO URUBU.png";
import DRest from "../assets/imgs/projects/DESAFIO REST.png";

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
                <h1 className="display-4">
                    <span style={{ color: "var(--gr-code)" }}>
                        Outros Projetos
                    </span>
                    <span style={{ color: "var(--code-pink)" }}>()</span>
                    <span style={{ color: "var(--code-orange)" }}>{"{}"}</span>
                </h1>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                        <div className="card">
                            <h5 className="text-center">
                                Desafio{" "}
                                <span style={{ color: "var(--gr-code)" }}>
                                    Django
                                </span>{" "}
                                RestApi
                            </h5>
                            <img
                                src={DRest}
                                className="img-fluid"
                                alt="img-project"
                            />
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Desafio para uma empresa utilizando framework
                                django + django rest. o desafio consiste em uma
                                API para gerenciar livros e autores, incluindo
                                autenticação de usuários e funcionalidade de
                                pesquisa...
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h5 className="text-center">
                                <span style={{ color: "var(--code-pink)" }}>
                                    QrCode
                                </span>{" "}
                                Gerente Ar-condicionado
                            </h5>
                            <img
                                src="https://fakeimg.pl/470x200/"
                                className="img-fluid"
                                alt="img-project"
                            />
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h5 className="text-center">
                                Urubu do pix{" "}
                                <span style={{ color: "var(--code-purple)" }}>
                                    PHP
                                </span>
                            </h5>
                            <img
                                src={PUrubu}
                                className="img-fluid"
                                alt="img-project"
                            />
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                projeto urubu do pix feito com o simples html,
                                css, javascript e para backend php...
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h5 className="text-center">
                                Desafio{" "}
                                <span style={{ color: "var(--gr-code)" }}>
                                    PicPay Django{" "}
                                </span>
                                RestAPI
                            </h5>
                            <img
                                src={DPicPay}
                                className="img-fluid"
                                alt="img-project"
                            />
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h5 className="text-center">I Projeto faculdade</h5>
                            <img
                                src={PSchool}
                                className="img-fluid"
                                alt="img-project"
                            />
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h5 className="text-center">Estudos gerais</h5>
                            <img
                                src={GProject}
                                className="img-fluid"
                                alt="img-project"
                            />
                        </div>
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
