export const links = [
    { name: "Bosh sahifa", isSubmenu: false, url: "/" },
    {
        name: "Sug'orish turlari",
        isSubmenu: true,
        submenu: [
            {
                name: "Tomchilatib sug'orish",
                url: "/sug'orishturlari/tomchilatib",
            },
            { name: "Pulsar sug'orish", url: "/sug'orishturlari/pulsar" },
            {
                name: "Yomg'irlatib sug'orish",
                url: "/sug'orishturlari/yomg'irlatib",
            },
            {
                name: "Barabanli sug'orish",
                url: "/sug'orishturlari/barabanli",
            },
        ],
    },
    {
        name: "Xizmatlar",
        isSubmenu: true,
        submenu: [
            {
                name: "Loyihalashtirish",
                url: "/xizmatlar/tomchilatib",
            },
            { name: "Uskunalarni o'rnatish", url: "/xizmatlar/uskunalar" },
            {
                name: "Bir mavsum davomida servis xizmat ko'rsatish",
                url: "/xizmatlar/servis",
            },
            {
                name: "Sug'orishni nazorat qilish",
                url: "/xizmatlar/nazorat",
            },
            {
                name: "Subsidiya olishda yordam",
                url: "/xizmatlar/subsidiya",
            },
        ],
    },
    {
        name: "Maxsulotlar",
        isSubmenu: true,
        submenu: [
            {
                name: "Polietilen truba",
                url: "/maxsulotlar/polietilen",
            },
            { name: "Kapilniy lenta", url: "/maxsulotlar/kapelniy" },
            {
                name: "Membrana",
                url: "/maxsulotlar/membrana",
            },
            {
                name: "Filtr",
                url: "/maxsulotlar/filtr",
            },
            {
                name: "Yumshoq quvur",
                url: "/maxsulotlar/yomshoqquvur",
            },
        ],
    },
    {
        name: "Aloqa",
        isSubmenu: false,
        url: "/bizbilanboglanish",
    },
];
