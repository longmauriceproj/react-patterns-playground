interface Product {
  id: number;
  name: string;
  href: string;
  price: string;
  color: string;
  inStock: boolean;
  leadTime?: string;
  size?: string;
  imageSrc: string;
  imageAlt: string;
  quantity: number;
}

interface CartItemProps {
  product: Product;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  onRemove: () => void;
}

interface StockIndicatorProps {
  inStock: boolean;
  leadTime?: string;
}

interface OrderSummaryProps {
  subtotal: number;
  tax: number;
  total: number;
  shippingCost?: number;
  onCheckout: () => void;
}

export type {
  Product,
  CartItemProps,
  QuantitySelectorProps,
  StockIndicatorProps,
  OrderSummaryProps,
};
