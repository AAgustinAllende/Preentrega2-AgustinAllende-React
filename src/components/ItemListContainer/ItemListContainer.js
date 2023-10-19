import React, { useEffect, useState } from 'react';
import { getProducts } from '../../mock/data';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export default function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const { categoryId,  seleccionId } = useParams();

  useEffect(() => {
    getProducts()
      .then((response) => {
        let filteredProducts = response;

        if (categoryId) {
          filteredProducts = filteredProducts.filter((prod) => prod.categoria === categoryId);
        }

        if (seleccionId) {
          filteredProducts = filteredProducts.filter((prod) => prod.seleccion === seleccionId);
        }

        setProducts(filteredProducts);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId, seleccionId]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
}
