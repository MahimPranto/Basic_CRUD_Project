import { Input, Label } from 'keep-react';
import { Button } from 'keep-react';
import { useState } from 'react';
import { createProduct } from '../utils/api';
import {useNavigate} from 'react-router'

const CreateProduct = () => {
    const [productData, setProductData] = useState({productName : '', productImage : '', productPrice : ''});
    const navigate = useNavigate()

    const changeHandler = (e) => {
        setProductData({...productData, [e.target.name] : e.target.value})
    }

    const submitHandler = async () => {
        await createProduct(productData)
        setProductData({productName : '', productImage : '', productPrice : ''})
        navigate('/')
    }
   return (
      <div className="flex justify-center items-center w-full h-[80vh]">
         <fieldset className="max-w-md space-y-2 w-1/2 border border-gray-200 p-4 rounded-lg">
            <div>
            <Label htmlFor="name">Product Name</Label>
            <Input id="name" placeholder="product name" type="text" name='productName' onChange={changeHandler}/>
            </div>
            <div>
            <Label htmlFor="name">Product Image</Label>
            <Input id="name" placeholder="product image url" type="text" name='productImage' onChange={changeHandler}/>
            </div>
            <div>
            <Label htmlFor="name">Product Price</Label>
            <Input id="name" placeholder="product price" type="text" name='productPrice' onChange={changeHandler}/>
            </div>
            <div className="flex w-full justify-end">
               <Button color="primary" onClick={submitHandler}>Add to List</Button>
            </div>
         </fieldset>
      </div>
   );
};

export default CreateProduct;
