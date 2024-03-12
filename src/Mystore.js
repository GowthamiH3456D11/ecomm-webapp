import React from "react";
import "./App.css";
import img1 from './cake1.jpg';
import img2 from './cake3.jpg';
import img3 from './cake4.jpg';
import img4 from './chocolat6.jpg';
import img5 from './chocolate1.jpg';
import img6 from './chocolate2.jpg';


export default function Mystore() {

    const products = [
        { id: 1, name: "Product 1", price: 100, image: img1 },
        { id: 2, name: "Product 2", price: 200, image: img2 },
        { id: 3, name: "Product 3", price: 300, image: img3 },
        { id: 4, name: "Product 4", price: 400, image: img4 },
        { id: 5, name: "Product 5", price: 500, image: img5 },
        { id: 6, name: "Product 6", price: 600, image: img6 }
    ];

    return (
        <div className="color">
            <h1>MY STORE</h1>
            
        <div className="displayList">
        
                {products.map((product, index) => (
                    <div className="container" >
                    <div key={index}>
                        {/* <div><img src={product.image} height={110} width={120}  /></div> */}
                        <div ><img src={product.image}  height={110} width={110} /></div>
                        <div>{product.name}</div>
                        <div> {product.price} </div> 
                        <div class="btn">
                             <button>Add to cart</button>
                             </div>
                    </div>
                    </div>

                ))};
                
                </div>
            </div>
    );
}

            