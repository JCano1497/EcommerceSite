import { product } from './product.model';
import { Item } from './item.model';

export class Cart{
  constructor(public Username: string, public product: product[]=[]){}
}


