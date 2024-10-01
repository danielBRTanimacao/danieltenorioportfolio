import ColProject from "./ColProject";

import Climar from "../assets/svgs/climar.svg";
import EbookWorld from "../assets/svgs/ebook-response.svg";

import DPicPay from "../assets/imgs/projects/DESAFIO BACKEND DJANGO.png";
import GProject from "../assets/imgs/projects/PROJETOS GITHUB.png";
import PSchool from "../assets/imgs/projects/PROJETOS SCHOOL.png";
import PUrubu from "../assets/imgs/projects/PROJETO URUBU.png";
import DRest from "../assets/imgs/projects/DESAFIO REST.png";
import QrProject from "../assets/imgs/projects/QR CODE PROJECT.png";

export default () => {
    const listImg: string[] = [
        DRest,
        QrProject,
        PUrubu,
        DPicPay,
        PSchool,
        GProject
    ];
    const titleList: React.ReactNode[] = [
        <>
            Desafio <span style={{ color: "var(--gr-code)" }}>Django</span>{" "}
            RestApi
        </>,
        <>
            {" "}
            <span style={{ color: "var(--code-pink)" }}>QrCode</span> Gerente
            Ar-condicionado
        </>,
        <>
            Urubu do pix{" "}
            <span style={{ color: "var(--code-purple)" }}>PHP</span>
        </>,
        <>
            Desafio{" "}
            <span style={{ color: "var(--gr-code)" }}>PicPay Django </span>
            RestAPI
        </>,
        <>I Projeto faculdade</>,
        <>Estudos gerais</>
    ];
    const textList: string[] = [
        `
        Desafio para uma empresa utilizando framework
        django + django rest. o desafio consiste em uma
        API para gerenciar livros e autores, incluindo
        autenticação de usuários e funcionalidade de
        pesquisa...
        `,
        "Gerenciamento de ar condicionados de uma empresa local, o site gera um QrCode para os ar-condicionado dos clientes onde é possível escanear ver informações sobre aquele ar especifico pode ser escaneado por qualquer pessoa, mas só e possível ser editado por gerentes específicos feito com django + boostrap",
        "Projeto urubu do pix feito com o simples html, css, javascript e para backend php...",
        "PICPAY SIMPLIFICADO com Python e Django Desafio",
        "O projeto de extensão tem como principal objetivo melhorar a comunidade em que vivemos... Isso significa que, ao desenvolver um projeto de extensão, estamos direcionando nossas habilidades em Análise e Desenvolvimento de Sistemas para criar soluções que beneficiem as pessoas ao nosso redor...um exemplo prático",
        "Estudos gerais repositorio GitHub"
    ];
    const listLinkGit: string[] = [
        "https://github.com/danielBRTanimacao/desafio-spotter-django-rest",
        "https://github.com/danielBRTanimacao/qr-code-maker-python",
        "https://github.com/danielBRTanimacao/urubu-do-pix-php",
        "https://github.com/danielBRTanimacao/desafio-picpay-django",
        "https://github.com/danielBRTanimacao/I-projeto-extensao-faculdade",
        "https://github.com/danielBRTanimacao?tab=repositories"
    ];

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
                <h1 className="display-4 py-5">
                    <span style={{ color: "var(--gr-code)" }}>
                        Outros Projetos
                    </span>
                    <span style={{ color: "var(--code-pink)" }}>()</span>
                    <span style={{ color: "var(--code-orange)" }}>{"{}"}</span>
                </h1>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {listImg.map((img, index) => (
                        <ColProject
                            key={index}
                            img={img}
                            title={titleList[index]}
                            text={textList[index]}
                            linkGit={listLinkGit[index]}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};
