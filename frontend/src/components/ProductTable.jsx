import { Avatar, Button, Table } from "keep-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteProduct, read } from "../utils/api";

export const ProductTable = () => {
  const [prouductList, setProdcutList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    read().then((data) => setProdcutList(data));
  }, [loading]);

  const deleteHandler = async (productId) => {
    setLoading(true);
    await deleteProduct(productId);
    setLoading(false);
  };
  return (
    <div className="ml-20">
      <Table>
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600">
                Product List
              </p>
            </div>
          </div>
        </Table.Caption>
        <Table.Head>
          <Table.HeadCell className="min-w-[290px]">
            <p className="text-body-5 font-medium text-metal-400">Image</p>
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[152px]">
            Product Name
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[240px]">Price</Table.HeadCell>
          <Table.HeadCell className="min-w-[240px]">Action</Table.HeadCell>

          <Table.HeadCell className="min-w-[100px]" />
        </Table.Head>
        <Table.Body className="divide-gray-25 divide-y">
          {prouductList.length > 0 ? (
            prouductList.map((product) => (
              <Table.Row className="bg-white" key={product._id}>
                <Table.Cell>
                  <Avatar
                    shape="rounded"
                    img={product.productImage}
                    alt={product.productName}
                  />
                </Table.Cell>
                <Table.Cell>
                  <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                    {product.productName}
                  </p>
                </Table.Cell>
                <Table.Cell>{product.productPrice}</Table.Cell>
                <Table.Cell>
                  <div className="flex jsutify-between items-center gap-6">
                    <Button
                      color="primary"
                      variant="outline"
                      onClick={() => navigate(`/update/${product._id}`)}
                    >
                      Edit
                    </Button>
                    <Button
                      color="error"
                      variant="outline"
                      onClick={() => deleteHandler(product._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row className="bg-white flex justify-center">
              <Table.Cell>
                <p>no product found</p>
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};
