import ListGroup from 'react-bootstrap/ListGroup';
import {product_1,product_2,product_3,product_4,product_5} from '../products'
import ProductCard from './Card';
import styled from 'styled-components';
const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 40px;
  background-color: #f8f9fa;
`;


function HorizontalExample() {
  return (
    <ListGroup horizontal style={{padding:"200px"}}>
      <ProductCard title={product_1.name} description={product_1.description} price={product_1.price} url={product_1.url}/>
      <ProductCard title={product_2.name} description={product_2.description} price={product_2.price} url={product_2.url}/>
      <ProductCard title={product_3.name} description={product_3.description} price={product_3.price} url={product_3.url}/>
      <ProductCard title={product_4.name} description={product_4.description} price={product_4.price} url={product_4.url}/>
      <ProductCard title={product_5.name} description={product_5.description} price={product_5.price} url={product_5.url}/>
      
    </ListGroup>
  );
}

export default HorizontalExample;