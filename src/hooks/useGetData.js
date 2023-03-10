import { useEffect, useState } from "react";
import axios from "axios";


const useGetData = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
    const endPoint = 'http://18.220.234.192:4000/api/users/64040284d9a91413da049e67'
    axios.get(endPoint)
      .then(response => {
        const products2 = response.assumptionData.map((e) => {
          console.log(products2)
          return {
            id: e._id,
            canales: e.canales,
            churns: e.churns,
            paises: e.paises,
            productos: e.productos,
            idUser: e.idUser,
            v: e.__v
          }
        });
        setProducts(products);
      })
      .catch(error => {
        alert(<h2>Perdón por el inconveniente, intenta mas tarde</h2>)
        //instalar swal sweet alert
      })
  }, [products]);
};

export default useGetData