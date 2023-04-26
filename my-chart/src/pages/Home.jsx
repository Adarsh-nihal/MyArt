import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://stock-server.onrender.com/products?&_limit=12&_page=1`)
      .then((d) => {
        setData(d.data);
        console.log(d.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
   
      <SimpleGrid mt="3rem" columns={{ base: 2, md: 4, lg: 6}} spacing={4}>
        {data.length > 0 &&
          data.map((product) => <ProductCard key={product.id} {...product} />)}
      </SimpleGrid>
    
  );
};

export default Home;
