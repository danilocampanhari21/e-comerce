import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function ProductForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState ('');
    const [price,setPrice] = useState('');
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
            <h1>New Product</h1>
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