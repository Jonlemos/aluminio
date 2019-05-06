//animation list: card, fade, box3D, glide

$(document).ready(function () {
    $('.slideWiz').slideWiz(
        {
            auto: true,
            speed: 5000,
            type : 'glide',
            row: 9,
            file : [
                {
                    src: {
                        main: "imagens/imagem_menu5.jpg",
                        cover: "imagens/imagem_menu5.jpg"
                    },
                    title: 'Churrasqueira Antiaderente',
                    desc: 'Pratica, Rápida e Eficiênte' +
                    '                  ',
                    button: {
                        text: 'Veja Mais Produtos Aqui',
                        url: 'produtos.html',
                        class: 'btn btn-medium btn-primary',
                        color: '#3781ce'
                    }
                },
                {
                    src: {
                        main: "imagens/imagem_menu2.jpg",
                        cover: "imagens/imagem_menu2.jpg"
                    },
                    title: 'Bule',
                    desc: 'Ideal para o dia a dia, com variados tamanhos'+
                    '                  ',
                    button: {
                        text: 'Veja Mais Produtos Aqui',
                        url: 'produtos.html',
                        class: 'btn btn-medium btn-primary',
                        color: '#3781ce'
                    }
                },
                {
                    src: {
                        main: "imagens/imagem_menu6.jpg",
                        cover: "imagens/imagem_menu6.jpg"
                    },
                    title: 'Pipoqueira',
                    desc: 'Linha Hotel, perfeito para cozinha industrial'+
                    '                  ',
                    button: {
                        text: 'Veja Mais Produtos Aqui',
                        url: 'produtos.html',
                        class: 'btn btn-medium btn-primary',
                        color: '#3781ce'
                    }
                },
                {
                    src: {
                        main: "imagens/imagem_menu4.jpg",
                        cover: "imagens/imagem_menu4.jpg"
                    },
                    title: 'Caldeirão Reto',
                    desc: 'Linha Hotel, perfeito para cozinha industrial' +
                    '                    ',
                    button: {
                        text: 'Veja Mais Produtos Aqui',
                        url: 'produtos.html',
                        class: 'btn btn-medium btn-primary',
                        color: '#3781ce'
                    }
                }
            ]

        }
    );
});
