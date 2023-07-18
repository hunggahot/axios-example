import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import productApi from "./api/productApi";

function App() {
  const [search, setSearch] = useState("");
  const [result, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});
  const [product, setProducts] = useState([]);

  // useEffect(() => {
  //   if (search === "") return;
  //   axios.get(
  //     `https://en.wikipedia.org/w/api/php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`
  //   );
  // });

  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      try {
        const { data } = await productApi.getAll(params);
        setProducts(data);
      } catch (err) {
        if (err.response) {
          // Notthing in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };

    fetchProducts();

    console.log(product, "product");
  }, []);

  return (
    <div className="App">
      <h1>Wikipedia API</h1>

      {/* {product.map((item) => {
        return <h4>{item.name}</h4>;
      })} */}
    </div>
  );
}

export default App;
