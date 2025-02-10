import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  inStock: boolean;
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [
    {
      id: '1',
      name: 'Digital Blood Pressure Monitor',
      price: 15000,
      category: 'Medical Equipment',
      image: '/images/products/bp-monitor.jpg',
      description: 'Accurate digital blood pressure monitoring device',
      inStock: true,
    },
    {
      id: '2',
      name: 'Dental Surgical Gloves (100 pcs)',
      price: 5000,
      category: 'Surgical',
      image: '/images/products/surgical-gloves.jpg',
      description: 'High-quality latex surgical gloves',
      inStock: true,
    },
    {
      id: '3',
      name: 'Dental Chair',
      price: 750000,
      category: 'Dental',
      image: '/images/products/dental-chair.jpg',
      description: 'Modern dental examination chair',
      inStock: true,
    },
    // Add more products as needed
  ],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(p => p.id !== action.payload);
    },
  },
});

export const { setProducts, addProduct, updateProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
