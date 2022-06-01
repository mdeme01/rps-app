module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                scissorsGrad: 'linear-gradient(from hsl(39, 89%, 49%) to hsl(40, 84%, 53%))',
                paperGrad: ' linear-gradient(from hsl(230, 89%, 62%) to hsl(230, 89%, 65%))',
                rockGrad: 'linear-gradient(from hsl(349, 71%, 52%) to hsl(349, 70%, 56%))',
                lizardGrad: 'linear-gradient(from hsl(261, 73%, 60%) to hsl(261, 72%, 63%))',
                cyanGrad: 'linear-gradient(to bottom, hsl(189, 59%, 53%), hsl(189, 58%, 57%))',
                radialGrad: 'hsl(214, 47%, 23%)', //'radial-gradient(ellipse at top, hsl(214, 47%, 23%), transparent)',
                textDark: 'hsl(229, 25%, 31%)',
                textScore: 'hsl(229, 64%, 46%)',
                headerOutline: 'hsl(217, 16%, 45%)',
            },
            fontWeight: {
                semibold: 600,
                bold: 700,
            },
        },
    },
    plugins: [],
};
