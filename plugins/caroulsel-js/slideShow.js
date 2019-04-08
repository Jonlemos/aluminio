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
                        url: 'https://github.com/iamwizzdom/slideWiz',
                        class: 'btn btn-medium btn-primary',
                        color: '#3781ce'
                    }
                },
                {
                    src: {
                        main: "imagens/imagem_menu2.jpg",
                        cover: "imagens/imagem_menu2.jpg"
                    },
                    title: 'Veja Mais Produtos Aqui',
                    desc: 'slideWiz is a JQuery based library created by a Nigerian by the name\n' +
                    '                    \'Wisdom Emenike\' who currently works at Imaxinacion Tech, one of Nigeria\'s leading IT companies.',
                    button: {
                        text: 'Veja Mais Produtos Aqui',
                        url: 'https://github.com/iamwizzdom/slideWiz',
                        class: 'btn btn-medium btn-primary',
                        color: '#3781ce'
                    }
                },
                {
                    src: {
                        main: "imagens/imagem_menu6.jpg",
                        cover: "imagens/imagem_menu6.jpg"
                    },
                    title: 'slideWiz Library',
                    desc: 'slideWiz is a JQuery based library created by a Nigerian by the name\n' +
                    '                    \'Wisdom Emenike\' who currently works at Imaxinacion Tech, one of Nigeria\'s leading IT companies.',
                    button: {
                        text: 'Veja Mais Produtos Aqui',
                        url: 'https://github.com/iamwizzdom/slideWiz',
                        class: 'btn btn-medium btn-primary',
                        color: '#3781ce'
                    }
                },
                {
                    src: {
                        main: "imagens/imagem_menu4.jpg",
                        cover: "imagens/imagem_menu4.jpg"
                    },
                    title: 'slideWiz Library',
                    desc: 'slideWiz is a JQuery based library created by a Nigerian by the name\n' +
                    '                    \'Wisdom Emenike\' who currently works at Imaxinacion Tech, one of Nigeria\'s leading IT companies.',
                    button: {
                        text: 'Veja Mais Produtos Aqui',
                        url: false,
                        class: 'btn btn-medium btn-primary',
                        color: '#3781ce'
                    }
                }
            ]

        }
    );
});
