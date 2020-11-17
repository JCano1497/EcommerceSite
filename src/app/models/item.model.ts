import { product } from './product.model';

export class Cart{
  constructor(public Product: product, public quantity: number){}
}
