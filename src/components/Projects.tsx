import { useEffect } from "react";
import ColProject from "./ColProject";

import Climar from "../assets/svgs/climar.svg";
import Mucambo from "../assets/svgs/mucambo.svg";
import CollabHub from "../assets/svgs/collab-response.svg";
import PotatoPix from "../assets/svgs/potato-response.svg";

import ENCURTA from "../assets/imgs/projects/ENCURTADORLINK.webp";
import DPicPay from "../assets/imgs/projects/DESAFIO-BACKEND-DJANGO.webp";
import GProject from "../assets/imgs/projects/PROJETOS-GITHUB.webp";
import PSchool from "../assets/imgs/projects/PROJETOS-SCHOOL.webp";
import PUrubu from "../assets/imgs/projects/PROJETO-URUBU.webp";
import QrProject from "../assets/imgs/projects/QR-CODE-PROJECT.webp";

export default () => {
    const arrayProject = [
        {
            img: ENCURTA,
            title: (
                <>
                    Encurtador de links
                    <span style={{ color: "var(--code-orange)" }}>
                        {" "}
                        Java
                    </span>{" "}
                </>
            ),
            text: `
            Projeto simples armazena e encurtar diversos tipos de links como urls de produtos da amazon, aliexpress, shopee e entre outros tipos permitindo serem compartilhado em redes sociais...`,
            link: "https://github.com/danielBRTanimacao/encurtador-de-link",
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
            link: "https://github.com/danielBRTanimacao/qr-code-maker-python",
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
            link: "https://github.com/danielBRTanimacao/urubu-do-pix-php",
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
            link: "https://github.com/danielBRTanimacao/desafio-picpay-django",
        },
        {
            img: PSchool,
            title: <>I Projeto faculdade</>,
            text: "O projeto de extensão tem como principal objetivo melhorar a comunidade em que vivemos... Isso significa que, ao desenvolver um projeto de extensão, estamos direcionando nossas habilidades em Análise e Desenvolvimento de Sistemas para criar soluções que beneficiem as pessoas ao nosso redor...um exemplo prático",
            link: "https://github.com/danielBRTanimacao/I-projeto-extensao-faculdade",
        },
        {
            img: GProject,
            title: <>Estudos gerais</>,
            text: "Estudos gerais repositorio GitHub",
            link: "https://github.com/danielBRTanimacao?tab=repositories",
        },
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

    useEffect(() => {
        const watching = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("show-top", entry.isIntersecting);
            });
        });

        const hiddenElements = document.querySelectorAll(".hidde-top");
        hiddenElements.forEach((element) => watching.observe(element));

        return () => {
            hiddenElements.forEach((element) => watching.unobserve(element));
        };
    }, []);

    return (
        <>
            <section className="container py-5 my-5" id="projects">
                <div className="py-5 row align-items-center hidden">
                    <div className="col-md-7">
                        <h1>
                            Climar eletrica{" "}
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
                            href="https://github.com/danielBRTanimacao"
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
                            Mucambo Moto Clube{" "}
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
                            href="https://github.com/danielBRTanimacao"
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
                            CollabHubBR{" "}
                            <span className="text-light-emphasis">
                                Open Source
                            </span>
                        </h1>
                        <p className="lead">
                            Com a crescente de projetos Open Source com alto
                            engajamento e participação da comunidade vem a
                            necessidade de coordenar os esforços mantendo ainda
                            o engajamento em comunidade. Pensando nisso, criamos
                            o CollabHubBR, uma plataforma Open Source 100%
                            brasileira para coordenação e organização de
                            projetos de código-aberto.
                        </p>
                        <a
                            href="https://github.com/CollabHubBR"
                            target="_blank"
                            className="btn btn-outline-light"
                        >
                            Saiba mais
                        </a>
                    </div>
                    <div className="col-md-5 d-flex justify-content-center">
                        <img src={CollabHub} className="img-fluid" alt="img" />
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row align-items-center hidden">
                    <div className="col-md-7 order-md-2">
                        <h1>
                            PotatoPix{" "}
                            <span className="text-light-emphasis">
                                Personal
                            </span>
                        </h1>
                        <p className="lead">
                            Permite que seus espectadores enviem doações durante
                            as transmissões ao vivo. Com suporte para Pix,
                            cartão de crédito (via Stripe) e várias moedas
                            digitais, os seguidores podem enviar mensagens
                            personalizadas, que são transformadas em áudio e
                            lidas em tempo real. Tudo isso é possível graças à
                            tecnologia do Eleven Labs e uma infraestrutura
                            robusta desenvolvida em Java.
                        </p>
                        <a
                            href="https://github.com/danielBRTanimacao/BirthdayManager"
                            target="_blank"
                            className="btn btn-outline-light"
                        >
                            Saiba mais
                        </a>
                    </div>
                    <div className="col-md-5 order-md-1 d-flex justify-content-center">
                        <img src={PotatoPix} alt="img" className="img-fluid" />
                    </div>
                </div>
            </section>

            <section className="container py-5 my-5 hidde-top">
                <h1
                    className="display-3 center-txt pb-2 pt-5 mt-5 fw-bold"
                    style={{ color: "var(--gr-code-light)" }}
                >
                    outrosProjetos
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
