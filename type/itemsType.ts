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

export interface Order {
  status_before: string,
  status: string,
  number: string,
  created_at: string,
  customer: {
    lastname: string,
    firstname: string,
  },
  summary: {
    total_due: {
      amount: number,
      currency: string,
    }
  }
}

export interface OrderInfo {
  name: string,
  brand: string,
  price: {
    amount: number,
    currency: string,
  },
  total: {
    amount: number,
  },
  quantity: number,
  summary: {
    total_items_amount: {
      amount: number
    }
  }
}
