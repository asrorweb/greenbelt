import "./Gallary.css";
import GallaryItems from "./GallaryItems";

const Gallarry = () => {
    return (
        <div className="pt-16 pb-12">
            <GallaryItems />
            <GallaryItems nom={"slide-2"} />
            <GallaryItems nom={"slide-3"} />
        </div>
    );
};

export default Gallarry;
