const productos = {
    'mates-camioneros': {
        titulo: 'Mates camioneros',
        precio: '$1000',
        imagen: 'img/Mates/Nueva carpeta/mate_uruguayo4.webp',
        descripcion: 'El clásico mate camionero de cuero, ideal para el día a día. De excelente calidad y durabilidad.'
    },
    'mates-torpedos': {
        titulo: 'Mates Topedos',
        precio: '$1500',
        imagen: 'img/Mates/MatesTorpedos/TorpedoImperial/img70.webp',
        descripcion: 'Un mate con forma de torpedo, muy cómodo para la mano. Hecho con calabaza natural y forrado en cuero.'
    },
    'mate-imperial': {
        titulo: 'Mates Imperiales',
        precio: '$2000',
        imagen: 'img/Mates/Mates imperiales/Imperial virola cincelada/img48.webp',
        descripcion: 'El mate de la realeza. Detalles en alpaca cincelada y la mejor selección de calabaza. Un lujo para tus mates.'
    },
    'mate-imperial-personalizado': {
        titulo: 'Mate Imperial Personalizado',
        precio: '$2500',
        imagen: 'img/Mates/Mateimperialpersonalizado/ig106.webp',
        descripcion: 'Un mate imperial único, con grabados y detalles personalizados a tu gusto.'
    },
    'mates-torpedo-personalizado': {
        titulo: 'Mates Torpedo Personalizado',
        precio: '$3000',
        imagen: 'img/Mates/Torpedo Joyero Personalizado/img108.webp',
        descripcion: 'La comodidad de un torpedo con el toque personal que lo hace inigualable. Ideal para un regalo.'
    },
    'mate-ranchero': {
        titulo: 'Mate Ranchero',
        precio: '$3500',
        imagen: 'img/Mates/Mate Ranchero/img100.webp',
        descripcion: 'Un mate robusto y tradicional, perfecto para el campo o la ciudad. Máxima durabilidad.'
    },
    'bombilla-cincelada-bronce': {
        titulo: 'Bombilla cincelada de bronce',
        precio: '$1000',
        imagen: 'img/Bombillas/Bombilla cincelada bronce/img1.webp',
        descripcion: 'Bombilla de bronce con detalles cincelados a mano. Un clásico que nunca falla.'
    },
    'bombilla-pico-de-loro-acero': {
        titulo: 'Bombilla pico de loro de acero',
        precio: '$1500',
        imagen: 'img/Bombillas/Bombilla pico de loro de acero/img9.webp',
        descripcion: 'Bombilla de acero con diseño de pico de loro para un agarre más cómodo.'
    },
    'bombillon-alpaca-cincelado': {
        titulo: 'Bombillon de alpaca cincelado',
        precio: '$2000',
        imagen: 'img/Bombillas/Bombillon de alpaca cincelado/img13.webp',
        descripcion: 'Bombillón de alpaca de alta calidad con elegantes detalles cincelados.'
    },
    'bombilla-pico-loro-gauchito': {
        titulo: 'Bombilla pico de loro cincelada gauchito',
        precio: '$2500',
        imagen: 'img/Bombillas/Bombilla pico de loro cincelada gauchito/img5.webp',
        descripcion: 'Diseño tradicional y robusto, ideal para los amantes de la tradición.'
    },
    'bombillon-premium': {
        titulo: 'Bombillon Premium',
        precio: '$3000',
        imagen: 'img/Bombillas/Bombillon Premium/img16.webp',
        descripcion: 'Bombillón de diseño exclusivo con materiales de primera calidad. Máxima elegancia.'
    },
    'bombillon-premium-mini': {
        titulo: 'Bombillon Premium MINI',
        precio: '$3500',
        imagen: 'img/Bombillas/Bombillon Premium MINI/img20.webp',
        descripcion: 'La versión compacta de nuestro bombillón premium. Ideal para mates pequeños.'
    },
    'termo-stanley': {
        titulo: 'Termo stanley',
        precio: '$1000',
        imagen: 'img/Termos/Termo stanley/img83.webp',
        descripcion: 'El termo icónico, conocido por su durabilidad y capacidad para mantener la temperatura.'
    },
    'termo-media-manija': {
        titulo: 'Termo media manija 1ltr',
        precio: '$1500',
        imagen: 'img/Termos/Termo media manija 1ltr/img80.webp',
        descripcion: 'Termo práctico con media manija para un agarre cómodo y seguro. Capacidad de 1 litro.'
    },
    'termolar-clickmate-negro': {
        titulo: 'Termolar Clickmate NEGRO',
        precio: '$2000',
        imagen: 'img/Termos/Termolar Clickmate NEGRO/img87.webp',
        descripcion: 'Innovador sistema Clickmate para servir con una sola mano. Acabado en elegante color negro.'
    },
    'termo-stanley-mate-system-negro': {
        titulo: 'Termo Stanley Mate System 800ml NEGRO',
        precio: '$2500',
        imagen: 'img/Termos/Termo Stanley Mate System 800ml NEGRO/img127.webp',
        descripcion: 'Termo Stanley con pico cebador diseñado especialmente para el mate. Tamaño compacto de 800ml.'
    },
    'termo-stanley-mate-system-verde': {
        titulo: 'Termo Stanley Mate System 1,2ltr VERDE',
        precio: '$3000',
        imagen: 'img/Termos/Termo Stanley Mate System 1,2ltr VERDE/img131.webp',
        descripcion: 'El clásico termo Stanley en un tamaño más grande de 1,2 litros y un color verde vibrante.'
    },
    'termo-stanley-mate-system-rose': {
        titulo: 'Termo Stanley Mate System 1,2ltr ROSE QUARTZ',
        precio: '$3500',
        imagen: 'img/Termos/Termo Stanley Mate System 1,2ltr ROSE QUARTZ/img135.webp',
        descripcion: 'Elegancia y funcionalidad en un solo termo. Capacidad de 1,2 litros en un hermoso color cuarzo rosa.'
    },
    'yerba-baldo': {
        titulo: 'Baldo 1kg (Packaging Brasilero)',
        precio: '$1000',
        imagen: 'img/Yerbas/Baldo 1kg (Packaging Brasilero)/img92.webp',
        descripcion: 'Yerba Baldo importada con un sabor distintivo y de alta calidad.'
    },
    'yerba-armino-compuesta': {
        titulo: 'Armiño Compuesta 1kg',
        precio: '$1500',
        imagen: 'img/Yerbas/Armiño compuesta 1kg/img112.webp',
        descripcion: 'Una mezcla de hierbas que le da un sabor único y refrescante a tus mates.'
    },
    'yerba-canarias-serena': {
        titulo: 'Canarias Serena 1kg',
        precio: '$2000',
        imagen: 'img/Yerbas/Canarias Serena 1kg/img116.webp',
        descripcion: 'La yerba Canarias en su versión Serena, con una selección de hierbas relajantes.'
    },
    'yerba-sara-compuesta': {
        titulo: 'Sara Compuesta 1kg',
        precio: '$2500',
        imagen: 'img/Yerbas/Sara Compuesta 1kg/img124.webp',
        descripcion: 'Combinación perfecta de yerba con hierbas naturales para un mate lleno de sabor.'
    },
    'yerba-sara-esplendida': {
        titulo: 'Sara Espléndida 1kg',
        precio: '$3000',
        imagen: 'img/Yerbas/Sara Espléndida 1kg/img118.webp',
        descripcion: 'Yerba de sabor intenso y duradero. Ideal para quienes buscan un mate fuerte.'
    },
    'yerba-canarias-tradicional': {
        titulo: 'Canarias Tradicional 500g',
        precio: '$3500',
        imagen: 'img/Yerbas/Canarias tradicional 500g/img114.webp',
        descripcion: 'La yerba tradicional de la marca Canarias, en un formato más pequeño. Sabor clásico garantizado.'
    },
};