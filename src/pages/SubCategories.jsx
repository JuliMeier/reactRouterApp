import { useParams } from "react-router-dom";
import ListPosts from "../components/ListPosts"; 

export const SubCategorias = () => {
    const { subCategoria } = useParams();
    return (
        <ListPosts url={`/posts?subcategoria=${subCategoria}`} />   
    )
}