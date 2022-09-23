export interface User {
  name: string
  username: string
  website: string
  address: {
    city: string
    street: string
    suite: string
  }
}

export interface Product {
  name: string,
  type: string,
  brand: string,
  real_price: {
    amount: number,
    currency: string
  }
}
