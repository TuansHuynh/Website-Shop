import { useParams } from "react-router-dom";
import Phone from "../../page/product/phone/Phone";
import Laptop from "../../page/product/laptop/Laptop";

const ProductByName = () => {
    const { name } = useParams();

    switch (name?.toLowerCase()) {
        case "smartphone":
            return <Phone />;
        case "laptop":
            return <Laptop />;
        default:
            return <div>Không tìm thấy nhóm sản phẩm: {name}</div>;
    }
};

export default ProductByName;
