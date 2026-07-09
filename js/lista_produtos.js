const produtos = [
    // Seção 1 - Cordas
    {
        id_produto: 1,
        descricao_produto: "Guitarra Les Paul",
        valor_unitario: 1399.90,
        unidade: "UN",
        caminho_imagem: "image/guitarra_les_paul.png",
        id_secao: 1,
        secao: "Cordas"
    },
    {
        id_produto: 2,
        descricao_produto: "Guitarra Stratocaster",
        valor_unitario: 1199.99,
        unidade: "UN",
        caminho_imagem: "image/guitarra_stratocaster.png",
        id_secao: 1,
        secao: "Cordas"
    },
    {
        id_produto: 3,
        descricao_produto: "Violão Acústico",
        valor_unitario: 990.00,
        unidade: "UN",
        caminho_imagem: "image/violao_acustico.png",
        id_secao: 1,
        secao: "Cordas"
    },
    {
        id_produto: 4,
        descricao_produto: "Baixo Elétrico",
        valor_unitario: 1670.90,
        unidade: "UN",
        caminho_imagem: "image/baixo_eletrico.png",
        id_secao: 1,
        secao: "Cordas"
    },
    {
        id_produto: 5,
        descricao_produto: "Violino",
        valor_unitario: 1099.90,
        unidade: "UN",
        caminho_imagem: "image/violino.png",
        id_secao: 1,
        secao: "Cordas"
    },
    {
        id_produto: 6,
        descricao_produto: "Viola Caipira",
        valor_unitario: 950.00,
        unidade: "UN",
        caminho_imagem: "image/viola_caipira.png",
        id_secao: 1,
        secao: "Cordas"
    },
    {
        id_produto: 7,
        descricao_produto: "Ukulele",
        valor_unitario: 450.00,
        unidade: "UN",
        caminho_imagem: "image/ukulele.png",
        id_secao: 1,
        secao: "Cordas"
    },
    {
        id_produto: 8,
        descricao_produto: "Banjo",
        valor_unitario: 1299.90,
        unidade: "UN",
        caminho_imagem: "image/banjo.png",
        id_secao: 1,
        secao: "Cordas"
    },
    {
        id_produto: 9,
        descricao_produto: "Harpa",
        valor_unitario: 7999.90,
        unidade: "UN",
        caminho_imagem: "image/harpa.png",
        id_secao: 1,
        secao: "Cordas"
    },
    {
        id_produto: 10,
        descricao_produto: "Contrabaixo Acústico",
        valor_unitario: 4899.90,
        unidade: "UN",
        caminho_imagem: "image/contrabaixo_acustico.png",
        id_secao: 1,
        secao: "Cordas"
    },

    // Seção 2 - Teclas
    {
        id_produto: 11,
        descricao_produto: "Piano de Cauda",
        valor_unitario: 1499.90,
        unidade: "UN",
        caminho_imagem: "image/piano_de_cauda.png",
        id_secao: 2,
        secao: "Teclas"
    },
    {
        id_produto: 12,
        descricao_produto: "Teclado Musical",
        valor_unitario: 1200.50,
        unidade: "UN",
        caminho_imagem: "image/teclado_musical.png",
        id_secao: 2,
        secao: "Teclas"
    },
    {
        id_produto: 13,
        descricao_produto: "Piano Digital",
        valor_unitario: 2899.90,
        unidade: "UN",
        caminho_imagem: "image/piano_digital.png",
        id_secao: 2,
        secao: "Teclas"
    },
    {
        id_produto: 14,
        descricao_produto: "Órgão Eletrônico",
        valor_unitario: 2599.90,
        unidade: "UN",
        caminho_imagem: "image/orgao_eletronico.png",
        id_secao: 2,
        secao: "Teclas"
    },
    {
        id_produto: 15,
        descricao_produto: "Sintetizador",
        valor_unitario: 3199.90,
        unidade: "UN",
        caminho_imagem: "image/sintetizador.png",
        id_secao: 2,
        secao: "Teclas"
    },
    {
        id_produto: 16,
        descricao_produto: "Acordeão",
        valor_unitario: 2799.90,
        unidade: "UN",
        caminho_imagem: "image/acordeao.png",
        id_secao: 2,
        secao: "Teclas"
    },
    {
        id_produto: 17,
        descricao_produto: "Escaleta",
        valor_unitario: 199.90,
        unidade: "UN",
        caminho_imagem: "image/escaleta.png",
        id_secao: 2,
        secao: "Teclas"
    },
    {
        id_produto: 18,
        descricao_produto: "Piano Vertical",
        valor_unitario: 6999.90,
        unidade: "UN",
        caminho_imagem: "image/piano_vertical.png",
        id_secao: 2,
        secao: "Teclas"
    },
    {
        id_produto: 19,
        descricao_produto: "Controlador MIDI",
        valor_unitario: 899.90,
        unidade: "UN",
        caminho_imagem: "image/controlador_midi.png",
        id_secao: 2,
        secao: "Teclas"
    },
    {
        id_produto: 20,
        descricao_produto: "Clavinova",
        valor_unitario: 5499.90,
        unidade: "UN",
        caminho_imagem: "image/clavinova.png",
        id_secao: 2,
        secao: "Teclas"
    },

    // Seção 3 - Percussão
    {
        id_produto: 21,
        descricao_produto: "Bateria Acústica",
        valor_unitario: 6000.00,
        unidade: "UN",
        caminho_imagem: "image/bateria_acustica.png",
        id_secao: 3,
        secao: "Percussão"
    },
    {
        id_produto: 22,
        descricao_produto: "Cajón",
        valor_unitario: 500.00,
        unidade: "UN",
        caminho_imagem: "image/cajon.png",
        id_secao: 3,
        secao: "Percussão"
    },
    {
        id_produto: 23,
        descricao_produto: "Pandeiro",
        valor_unitario: 400.00,
        unidade: "UN",
        caminho_imagem: "image/pandeiro.png",
        id_secao: 3,
        secao: "Percussão"
    },
    {
        id_produto: 24,
        descricao_produto: "Tamborim",
        valor_unitario: 120.00,
        unidade: "UN",
        caminho_imagem: "image/tamborim.png",
        id_secao: 3,
        secao: "Percussão"
    },
    {
        id_produto: 25,
        descricao_produto: "Surdo",
        valor_unitario: 699.90,
        unidade: "UN",
        caminho_imagem: "image/surdo.png",
        id_secao: 3,
        secao: "Percussão"
    },
    {
        id_produto: 26,
        descricao_produto: "Conga",
        valor_unitario: 1499.90,
        unidade: "UN",
        caminho_imagem: "image/conga.png",
        id_secao: 3,
        secao: "Percussão"
    },
    {
        id_produto: 27,
        descricao_produto: "Bongô",
        valor_unitario: 799.90,
        unidade: "UN",
        caminho_imagem: "image/bongo.png",
        id_secao: 3,
        secao: "Percussão"
    },
    {
        id_produto: 28,
        descricao_produto: "Agogô",
        valor_unitario: 180.00,
        unidade: "UN",
        caminho_imagem: "image/agogo.png",
        id_secao: 3,
        secao: "Percussão"
    },
    {
        id_produto: 29,
        descricao_produto: "Triângulo",
        valor_unitario: 80.00,
        unidade: "UN",
        caminho_imagem: "image/triangulo.png",
        id_secao: 3,
        secao: "Percussão"
    },
    {
        id_produto: 30,
        descricao_produto: "Xilofone",
        valor_unitario: 999.90,
        unidade: "UN",
        caminho_imagem: "image/xilofone.png",
        id_secao: 3,
        secao: "Percussão"
    },

    // Seção 4 - Sopro
    {
        id_produto: 31,
        descricao_produto: "Saxofone Alto",
        valor_unitario: 1300.00,
        unidade: "UN",
        caminho_imagem: "image/saxofone_alto.png",
        id_secao: 4,
        secao: "Sopro"
    },
    {
        id_produto: 32,
        descricao_produto: "Flauta Transversal",
        valor_unitario: 999.90,
        unidade: "UN",
        caminho_imagem: "image/flauta_transversal.png",
        id_secao: 4,
        secao: "Sopro"
    },
    {
        id_produto: 33,
        descricao_produto: "Clarinete",
        valor_unitario: 1499.90,
        unidade: "UN",
        caminho_imagem: "image/clarinete.png",
        id_secao: 4,
        secao: "Sopro"
    },
    {
        id_produto: 34,
        descricao_produto: "Trompete",
        valor_unitario: 1899.90,
        unidade: "UN",
        caminho_imagem: "image/trompete.png",
        id_secao: 4,
        secao: "Sopro"
    },
    {
        id_produto: 35,
        descricao_produto: "Trombone",
        valor_unitario: 2199.90,
        unidade: "UN",
        caminho_imagem: "image/trombone.png",
        id_secao: 4,
        secao: "Sopro"
    },
    {
        id_produto: 36,
        descricao_produto: "Tuba",
        valor_unitario: 5999.90,
        unidade: "UN",
        caminho_imagem: "image/tuba.png",
        id_secao: 4,
        secao: "Sopro"
    },
    {
        id_produto: 37,
        descricao_produto: "Oboé",
        valor_unitario: 3599.90,
        unidade: "UN",
        caminho_imagem: "image/oboe.png",
        id_secao: 4,
        secao: "Sopro"
    },
    {
        id_produto: 38,
        descricao_produto: "Fagote",
        valor_unitario: 7999.90,
        unidade: "UN",
        caminho_imagem: "image/fagote.png",
        id_secao: 4,
        secao: "Sopro"
    },
    {
        id_produto: 39,
        descricao_produto: "Gaita",
        valor_unitario: 199.90,
        unidade: "UN",
        caminho_imagem: "image/gaita.png",
        id_secao: 4,
        secao: "Sopro"
    },
    {
        id_produto: 40,
        descricao_produto: "Flauta Doce",
        valor_unitario: 89.90,
        unidade: "UN",
        caminho_imagem: "image/flauta_doce.png",
        id_secao: 4,
        secao: "Sopro"
    }
];

export{produtos}