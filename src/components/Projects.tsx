import { useEffect } from "react";
import ColProject from "./ColProject";

import Climar from "../assets/svgs/climar.svg";
import EbookWorld from "../assets/svgs/ebook-response.svg";
import PmApp from "../assets/svgs/pmapp.svg";
import Mucambo from "../assets/svgs/mucambo.svg";

import DPicPay from "../assets/imgs/projects/DESAFIO BACKEND DJANGO.png";
import GProject from "../assets/imgs/projects/PROJETOS GITHUB.png";
import PSchool from "../assets/imgs/projects/PROJETOS SCHOOL.png";
import PUrubu from "../assets/imgs/projects/PROJETO URUBU.png";
import DRest from "../assets/imgs/projects/DESAFIO REST.png";
import QrProject from "../assets/imgs/projects/QR CODE PROJECT.png";

export default () => {
    const arrayProject = [
        {
            img: DRest,
            title: (
                <>
                    Desafio{" "}
                    <span style={{ color: "var(--gr-code)" }}>Django</span>{" "}
                    RestApi
                </>
            ),
            text: `
            Desafio para uma empresa utilizando framework django + django rest. 
            o desafio consiste em uma API para gerenciar livros e autores, incluindo autenticação de 
            usuários e funcionalidade de pesquisa...`,
            link: "https://github.com/danielBRTanimacao/desafio-spotter-django-rest"
        },
        {
            img: QrProject,
            title: (
                <>
                    {" "}
                    <span style={{ color: "var(--code-pink)" }}>
                        QrCode
                    </span>{" "}
                    Gerente Ar-condicionado
                </>
            ),
            text: "Gerenciamento de ar condicionados de uma empresa local, o site gera um QrCode para os ar-condicionado dos clientes onde é possível escanear ver informações sobre aquele ar especifico pode ser escaneado por qualquer pessoa, mas só e possível ser editado por gerentes específicos feito com django + boostrap",
            link: "https://github.com/danielBRTanimacao/qr-code-maker-python"
        },
        {
            img: PUrubu,
            title: (
                <>
                    Urubu do pix{" "}
                    <span style={{ color: "var(--code-purple)" }}>PHP</span>
                </>
            ),
            text: "Projeto urubu do pix feito com o simples html, css, javascript e para backend php...",
            link: "https://github.com/danielBRTanimacao/urubu-do-pix-php"
        },
        {
            img: DPicPay,
            title: (
                <>
                    Desafio{" "}
                    <span style={{ color: "var(--gr-code)" }}>
                        PicPay Django{" "}
                    </span>
                    RestAPI
                </>
            ),

            text: "PICPAY SIMPLIFICADO com Python e Django Desafio",
            link: "https://github.com/danielBRTanimacao/desafio-picpay-django"
        },
        {
            img: PSchool,
            title: <>I Projeto faculdade</>,
            text: "O projeto de extensão tem como principal objetivo melhorar a comunidade em que vivemos... Isso significa que, ao desenvolver um projeto de extensão, estamos direcionando nossas habilidades em Análise e Desenvolvimento de Sistemas para criar soluções que beneficiem as pessoas ao nosso redor...um exemplo prático",
            link: "https://github.com/danielBRTanimacao/I-projeto-extensao-faculdade"
        },
        {
            img: GProject,
            title: <>Estudos gerais</>,
            text: "Estudos gerais repositorio GitHub",
            link: "https://github.com/danielBRTanimacao?tab=repositories"
        }
    ];

    useEffect(() => {
        const watching = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("showing", entry.isIntersecting);
            });
        });

        const hiddenElements = document.querySelectorAll(".hidden");
        hiddenElements.forEach((element) => watching.observe(element));

        return () => {
            hiddenElements.forEach((element) => watching.unobserve(element));
        };
    }, []);

    return (
        <>
            <section className="px-4" id="projects">
                <div className="py-5 row align-items-center hidden">
                    <div className="col-md-7">
                        <h1>
                            Climar eletrica e climatização,{" "}
                            <span className="text-light-emphasis">
                                Freelancer
                            </span>
                        </h1>
                        <p className="lead">
                            Este é um e-commerce para uma pequena empresa local
                            da cidade, focada na venda de materiais relacionados
                            a elétrica, construção e tecnologia. Ainda não é
                            possível visualizar uma prévia, mas você pode obter
                            mais informações clicando em "saiba mais".
                        </p>
                        <a
                            href="github.com/danielBRTanimacao"
                            target="_blank"
                            className="btn btn-outline-light"
                        >
                            Saiba mais
                        </a>
                    </div>
                    <div className="col-md-5 d-flex justify-content-center">
                        <img src={Climar} className="img-fluid" alt="img" />
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row align-items-center hidden">
                    <div className="col-md-7 order-md-2">
                        <h1>
                            Mucambo Moto Clube,{" "}
                            <span className="text-light-emphasis">
                                Freelancer
                            </span>
                        </h1>
                        <p className="lead">
                            Projeto desenvolvido para um clube de motoqueiros
                            local uma pagina web desenvolvida com Django +
                            Boostrap, conheça a história de um grupo de
                            motoqueiros navegue pela página web para descobrir
                            mais sobre sua historia e os membros que compõem,
                            também e possível entrar em contato, basta preencher
                            o formulário
                        </p>
                        <a
                            href="github.com/danielBRTanimacao"
                            target="_blank"
                            className="btn btn-outline-light"
                        >
                            Saiba mais
                        </a>
                    </div>
                    <div className="col-md-5 order-md-1 d-flex justify-content-center">
                        <img src={Mucambo} alt="img" className="img-fluid" />
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row align-items-center hidden">
                    <div className="col-md-7">
                        <h1>
                            Percepção Musical,{" "}
                            <span className="text-light-emphasis">
                                Open Source
                            </span>
                        </h1>
                        <p className="lead">
                            Percepção Musical é um aplicativo em desenvolvimento
                            utilizando as tecnologias Python, Django RestApi,
                            HTML, CSS e Typescript.{" "}
                            <a
                                href="https://github.com/victorhugorl"
                                target="_blank"
                                className="link-special link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                            >
                                Victor Lima
                            </a>{" "}
                            lidera o projeto como principal gerente e
                            desenvolvedor backend, enquanto eu colaboro
                            principalmente no desenvolvimento frontend. Para
                            mais informações, clique em saiba mais.
                        </p>
                        <a
                            href="https://github.com/victorhugorl/percepcao_musical_app_web-version"
                            target="_blank"
                            className="btn btn-outline-light"
                        >
                            Saiba mais
                        </a>
                    </div>
                    <div className="col-md-5 d-flex justify-content-center">
                        <img src={PmApp} className="img-fluid" alt="img" />
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row align-items-center hidden">
                    <div className="col-md-7 order-md-2">
                        <h1>
                            Ebook World,{" "}
                            <span className="text-light-emphasis">Estudo</span>
                        </h1>
                        <p className="lead">
                            Esse e um projeto inspirado em dois sites{" "}
                            <a
                                className="link-special link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                                target="_blank"
                                href="https://www.skoob.com.br"
                            >
                                Skoob
                            </a>
                            ,{" "}
                            <a
                                className="link-special link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                                target="_blank"
                                href="https://github.com/victorhugorl/Landin_page_ebook"
                            >
                                Landing page
                            </a>{" "}
                            em uma versão "simples" apenas estudo usando Django
                            e python, o site também esta em desenvolvimento, mas
                            assim como o anterior e possivel ver ele em saiba
                            mais...
                        </p>
                        <a
                            href="https://github.com/danielBRTanimacao/ebook-world-django"
                            target="_blank"
                            className="btn btn-outline-light"
                        >
                            Saiba mais
                        </a>
                    </div>
                    <div className="col-md-5 order-md-1 d-flex justify-content-center">
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
                    {arrayProject.map((item, index) => (
                        <ColProject
                            key={index}
                            img={item.img}
                            title={item.title}
                            text={item.text}
                            linkGit={item.link}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};
