import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const getProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

function Produtos() {
  const [produtos, setProdutos] = useState([]);

  const run = async () => {
    setProdutos(await getProducts());
  };

  useEffect(() => {
    run();
  }, []);

  return (
    <div>
      <h1>Hello world</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {produtos.map((produto) => {
          return (
            <div key={produto.id} style={{ width: "33%" }}>
              <img
                src={produto.image}
                alt=""
                style={{ maxWidth: 100, height: 150 }}
              />
              <a href={`/produtos/${produto.id}`}>{produto.title}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Produtos;
