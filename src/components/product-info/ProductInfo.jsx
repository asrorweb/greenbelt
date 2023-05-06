import React from "react";

const ProductInfo = () => {
    return (
        <div className="py-10">
            <div className="max-w-7xl mx-auto px-10 max-md:px-4">
                <div className="flex gap-5 mb-10  max-lg:gap-7 max-sm:gap-8 max-md:flex-col">
                    <div className="lg:w-[40%] max-lg:w-[400px] max-md:w-[60%] max-sm:w-full">
                        <div className="border rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://akona.com.tr/tr/wp-content/uploads/2019/05/010.jpg"
                                className="w-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="max-w-[60%] flex flex-col justify-between max-lg:justify-start max-sm:max-w-full ">
                        <div>
                            {/* text-white py-2 bg-green-700 inline-block px-7 rounded-2xl shadow-[0px_5px_68px_17px_rgba(34,60,80,0.2)] */}
                            <h2 className="text-3xl font-medium mb-5 max-sm:mb-4 dark:text-white max-lg:mb-10">
                                Kapilniy lenta
                            </h2>
                            <p className="text-[18px] h-[200px] max-lg:hidden overflow-hidden leading-[150%] dark:text-slate-50">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Exercitationem adipisci facere
                                a cumque, quisquam deserunt, nostrum maxime
                                debitis tenetur earum aliquid. Eius velit culpa
                                asperiores quibusdam nulla accusamus
                            </p>
                        </div>

                        <a
                            href="tel:l000"
                            className="inline-block max-sm:text-center max-sm:w-full sticky top-[100px] px-8 text-[20px] mr-auto shadow-[0px_5px_70px_5px_rgba(0,0,0,0.2)]  py-2 bg-[#08c308] text-white rounded-lg md:hover:scale-[1.05] duration-150"
                        >
                            Buyutma berish
                        </a>
                    </div>
                </div>

                {/* batafsil malumot */}
                <div>
                    <h1 className="mb-9 pt-6 text-2xl dark:text-white">
                        Batafsil ma'lumot
                    </h1>
                    <p className="dark:text-white">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. A fuga possimus cum quo? Mollitia consectetur
                        ipsum enim totam fugiat reprehenderit possimus placeat
                        amet eos, tempora natus facilis sit nisi eius tempore
                        incidunt ab? Ipsam quas neque, in quidem exercitationem
                        ad totam pariatur odio architecto ipsum, esse illo
                        expedita placeat officia hic tempore natus earum
                        quisquam porro illum rerum sit. Ad cumque nostrum
                        cupiditate eos accusantium velit id minus neque iste
                        sapiente quo voluptatibus veniam officia autem iure ex
                        quaerat dolores ea provident repellat voluptas, quod
                        eveniet fugit? Nihil totam minima quas voluptatum illum
                        libero officiis commodi facere labore? Iste ad fuga
                        consequatur culpa blanditiis id, totam libero. Cum,
                        sequi architecto eum temporibus et iusto rem corrupti
                        commodi quam vitae. Quisquam nemo voluptates modi
                        temporibus fuga corporis itaque animi a impedit nam
                        voluptatum optio et quibusdam dolorem deleniti accusamus
                        aut, veritatis doloremque cumque reiciendis. Illo
                        possimus magni, aspernatur voluptatem veniam ullam quae
                        quibusdam doloribus omnis. Natus distinctio in, enim aut
                        asperiores dignissimos, atque a quibusdam omnis dicta
                        voluptatibus amet esse consequatur culpa soluta,
                        praesentium iusto eum incidunt rem quas animi fugiat
                        nobis! Alias, minima vitae eveniet molestias doloribus
                        maiores numquam asperiores tenetur hic tempore suscipit
                        ducimus doloremque! Iste tempora et similique?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
