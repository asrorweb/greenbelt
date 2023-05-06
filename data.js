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
                url: "/services",
            },
            { name: "Uskunalarni o'rnatish", url: "/services" },
            {
                name: "Bir mavsum davomida servis xizmat ko'rsatish",
                url: "/services",
            },
            {
                name: "Sug'orishni nazorat qilish",
                url: "/services",
            },
            {
                name: "Subsidiya olishda yordam",
                url: "/services",
            },
        ],
    },
    {
        name: "Maxsulotlar",
        isSubmenu: false,
        submenu: [
            {
                name: "Polietilen truba",
                url: "/maxsulotlar",
            },
            { name: "Kapilniy lenta", url: "/maxsulotlar" },
            {
                name: "Membrana",
                url: "/maxsulotlar",
            },
            {
                name: "Filtr",
                url: "/maxsulotlar",
            },
            {
                name: "Yumshoq quvur",
                url: "/maxsulotlar",
            },
        ],
        url: "/maxsulotlar",
    },
    {
        name: "Aloqa",
        isSubmenu: false,
        url: "/bizbilanboglanish",
    },
];
