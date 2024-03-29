import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function ProductForm({
    _id,
        title:existingTitle,
        description:existingdescription,
        price:existingPrice,
    }) {
    const [title, setTitle] = useState(existingTitle || '');
    const [description, setDescription] = useState (existingdescription || '');
    const [price,setPrice] = useState(existingPrice || '');
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter();
    async function saveProduct(ev) {
        ev.preventDefault();
        const data = {title, description,price};
        if (_id) {
            //update
            await axios.put('/api/products', {...data,_id});
            
        } else {
            //create
            await axios.post('/api/products', data);
        }
        setGoToProducts(true);
    }
    if(goToProducts) {
        router.push('/products');
    }
    return (
            <form onSubmit={saveProduct}>
            <label>Product name</label>
            <input type="text" 
            placeholder="product name" 
            value={title} 
            onChange={ev => setTitle (ev.target.value)}></input>
            <label>
                PAREI AQUI, O PROXIMO PASSO É COLOCAR O INDEXADOR DE FOTOS (APAGAR ISSO) 
            </label>

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