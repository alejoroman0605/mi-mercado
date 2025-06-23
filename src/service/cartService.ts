import type { CartItem } from "../interface/CartItem";
import type { Product } from "../interface/Product";

const KEY = "cart";

function loadCart(): CartItem[] {
  const data = sessionStorage.getItem(KEY);
  return data ? (JSON.parse(data) as CartItem[]) : [];
}

function saveCart(items: CartItem[]): void {
  sessionStorage.setItem(KEY, JSON.stringify(items));
}

export const cartService = {
  getCart(): CartItem[] {
    return loadCart();
  },

  addToCart(product: Product, quantity = 1): void {
    const items = loadCart();
    const existing = items.find((it) => it.product.id === product.id);

    if (existing) {
      existing.quantity += quantity;
    } else {
      items.push({ product, quantity });
    }

    saveCart(items);
  },

  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      cartService.removeItem(productId);
      return;
    }
    const items = loadCart();
    const existing = items.find((it) => it.product.id === productId);
    if (existing) {
      existing.quantity = quantity;
      saveCart(items);
    }
  },

  removeItem(productId: number): void {
    const items = loadCart().filter((it) => it.product.id !== productId);
    saveCart(items);
  },

  clear(): void {
    sessionStorage.removeItem(KEY);
  },

  getTotal(): number {
    return loadCart().reduce((sum, it) => sum + it.product.price * it.quantity, 0);
    },
  
  handleFinalizeSale(): boolean {
      sessionStorage.removeItem("cart");  
      return true;
    }
};