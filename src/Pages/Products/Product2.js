import Product from '../Shop/Product';
import Shop from '../Shop/Shop';

const Product2 = () => {
  return (
    <div className="flex justify-center">
      <div className="font-bold">Product2</div>
      <div><Shop data={Product}/></div>
    </div>
  );
};

export default Product2;
