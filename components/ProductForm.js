import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function ProductForm({
        title:existingTitle,
        description:existingdescription,
        price:existingPrice,
    }) {
    const [title, setTitle] = useState(existingTitle || '');
    const [description, setDescription] = useState (existingdescription || '');
    const [price,setPrice] = useState(existingPrice || '');
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter();
    async function createProduct(ev) {
        ev.preventDefault();
        const data = {title, description,price};
        await axios.post('/api/products', data);
        setGoToProducts(true);
    }
    if(goToProducts) {
        router.push('/products');
    }
    return (
            <form onSubmit={createProduct}>
            <label>Product name</label>
            <input type="text" 
            placeholder="product name" 
            value={title} 
            onChange={ev => setTitle (ev.target.value)}></input>

            <label>Description</label>
            <textarea 
                placeholder="description" 
                value={description}
                onChange={ev => setDescription(ev.target.value)}
            ></textarea>

            <label>Price (in USD)</label>
            <input type="number" 
            placeholder="price" 
            value={price}
            onChange={ev => setPrice(ev.target.value)}
            ></input>

            <button 
                type="submit" 
                className="btn-primary">
                Save
            </button>

            </form>

    );
}