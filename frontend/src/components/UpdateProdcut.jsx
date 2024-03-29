import { Input, Label } from 'keep-react';
import { Button } from 'keep-react';
import { useEffect, useState } from 'react';
import { createProduct, readSingle, updateProduct } from '../utils/api';
import { useNavigate, useParams } from 'react-router';

const UpdateProduct = () => {
   const [productData, setProductData] = useState({
      productName: '',
      productImage: '',
      productPrice: '',
   });
   const { productId } = useParams();
   const navigate = useNavigate();
   useEffect(() => {
      readSingle(productId).then((data) => setProductData(data));
   }, [productId]);

   const changeHandler = (e) => {
      setProductData({
         ...productData,
         [e.target.name]: e.target.value,
      });
   };

   const submitHandler = async () => {
      await updateProduct(productId, productData);
      setProductData({
         productName: '',
         productImage: '',
         productPrice: '',
      });
      navigate('/');
   };
   return (
      <div className="flex justify-center items-center w-full h-[80vh]">
         <fieldset className="max-w-md space-y-2 w-1/2 border border-gray-200 p-4 rounded-lg">
            <div>
               <Label htmlFor="name">Product Name</Label>
               <Input
                  id="name"
                  placeholder="product name"
                  type="text"
                  name="productName"
                  value={productData.productName}
                  onChange={changeHandler}
               />
            </div>
            <div>
               <Label htmlFor="name">Product Image</Label>
               <Input
                  id="name"
                  placeholder="product image url"
                  type="text"
                  name="productImage"
                  value={productData.productImage}
                  onChange={changeHandler}
               />
            </div>
            <div>
               <Label htmlFor="name">Product Price</Label>
               <Input
                  id="name"
                  placeholder="product price"
                  type="text"
                  name="productPrice"
                  value={productData.productPrice}
                  onChange={changeHandler}
               />
            </div>
            <div className="flex w-full justify-end">
               <Button color="primary" onClick={submitHandler}>
                  Update
               </Button>
            </div>
         </fieldset>
      </div>
   );
};

export default UpdateProduct;
