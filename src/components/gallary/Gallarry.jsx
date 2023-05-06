import "./Gallary.css";

// unique id from uuid
import { v4 as uuidv4 } from "uuid";

const Gallarry = () => {
    const img1 = [
        {
            img: "https://images.unsplash.com/photo-1589714269969-681d7a4dd101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            img: "https://images.unsplash.com/photo-1518369623551-510c7b3c9f5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
        {
            img: "https://images.unsplash.com/photo-1662392559315-fb7035900d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            img: "https://images.unsplash.com/photo-1627060710997-18505c0c89b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        },
        {
            img: "https://images.unsplash.com/photo-1558297010-eb4f2f472abf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
        },
        {
            img: "https://images.unsplash.com/photo-1662392559315-fb7035900d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            img: "https://images.unsplash.com/photo-1656776826503-1cecdb0c225b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            img: "https://images.unsplash.com/photo-1569817254398-908cdf243100?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        },
        {
            img: "https://images.unsplash.com/photo-1662392559315-fb7035900d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            img: "https://images.unsplash.com/photo-1622726918372-ec7f7245eac4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            img: "https://images.unsplash.com/photo-1662392559315-fb7035900d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            img: "https://images.unsplash.com/photo-1627060710997-18505c0c89b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        },
        {
            img: "https://images.unsplash.com/photo-1558297010-eb4f2f472abf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
        },
        {
            img: "https://images.unsplash.com/photo-1662392559315-fb7035900d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            img: "https://images.unsplash.com/photo-1656776826503-1cecdb0c225b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            img: "https://images.unsplash.com/photo-1569817254398-908cdf243100?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        },
        {
            img: "https://images.unsplash.com/photo-1662392559315-fb7035900d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            img: "https://images.unsplash.com/photo-1622726918372-ec7f7245eac4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
    ];

    return (
        <div className="pt-16 pb-12">
            <div className="h-[160px] overflow-hidden m-auto relative w-[100%] grid place-items-center">
                <div className="slide-track flex">
                    {img1.map((img) => {
                        return (
                            <div
                                key={uuidv4()}
                                className="h-[150px] w-[250px] flex items-center p-[5px]"
                            >
                                <img
                                    src={img.img}
                                    className="w-full rounded-xl object-cover h-full"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="h-[160px] overflow-hidden m-auto relative w-[100%] grid place-items-center">
                <div className="slide-track slide-2 flex">
                    {img1.map((img) => {
                        return (
                            <div
                                key={uuidv4()}
                                className="h-[150px] w-[250px] flex items-center p-[5px]"
                            >
                                <img
                                    src={img.img}
                                    className="w-full rounded-xl object-cover h-full"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="h-[160px] overflow-hidden m-auto relative w-[100%] grid place-items-center">
                <div className="slide-track slide-3 flex">
                    {img1.map((img) => {
                        return (
                            <div
                                key={uuidv4()}
                                className="h-[150px] w-[250px] flex items-center p-[5px]"
                            >
                                <img
                                    src={img.img}
                                    className="w-full rounded-xl object-cover h-full"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Gallarry;
