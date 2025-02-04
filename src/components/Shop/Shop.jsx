import { useEffect, useState } from 'react';
import css from './Shop.module.css';
import axios from 'axios';
import Louder from '../Louder/Louder';

import SearchForm from '../SearchForm/SearchForm';

const Shop = () => {
  const [products, setProducts] = useState(null);
  const [louder, setLouder] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState(null);

  const onSearch = searchTerm => {
    setSearchValue(searchTerm);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLouder(true);
        const { data } = await axios.get(
          'https://dummyjson.com/products?limit=10',
        );

        console.log(data);
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLouder(false);
      }
    };
    fetchProduct();
  }, []);

  useEffect(() => {
    if (searchValue === null) return;
    const fetchProductBySearchValue = async () => {
      try {
        setLouder(true);
        const { data } = await axios.get(
          `https://dummyjson.com/products/search?q=${searchValue}`,
        );

        console.log(data);
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLouder(false);
      }
    };
    fetchProductBySearchValue();
  }, [searchValue]);
  return (
    <div className={css.shopPage}>
      <h1>Products catalog</h1>
      <div className={css.searchWrapper}>
        <SearchForm onSearch={onSearch} />
      </div>
      {louder && <Louder />}
      {error && <p>Please, try again later 🍵</p>}
      <ul className={css.list}>
        {Array.isArray(products) &&
          products.map(item => {
            return (
              <li key={item.id} className={css.listItem}>
                <img
                  className={css.itemImg}
                  src={item.thumbnail}
                  alt={item.title}
                />
                <h3 className={css.itemTitle}>{item.title}</h3>
                <p className={css.itemDescription}>{item.description}</p>
                <p className={css.itemDescription}>Rating:{item.rating}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
/* github.com/remezovskyi2508/h2o-tracker-ui/pull/4 */
export default Shop;
