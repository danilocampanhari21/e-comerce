import Layout from "@/components/Layout";
import { useState } from "react";

export default function NewProduct() {
    const [title, setTile] = useState('');
    const [description, setDescription] = ('');
    const [price,setPrice] = useState('');
    return (
        <Layout>
            <h1>New Product</h1>
            <label>Product name</label>
            <input type="text" placeholder="product name"></input>
            <label>Description</label>
            <textarea placeholder="description"></textarea>
            <label>Price (in USD)</label>
            <input type="number" placeholder="price"></input>
            <button className="btn-primary">Save</button>
        </Layout>
    )
}