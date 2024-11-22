import { useState, useEffect } from 'react';
import {
  CheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import { cartItems } from './data';
import type {
  Product,
  CartItemProps,
  QuantitySelectorProps,
  StockIndicatorProps,
  OrderSummaryProps,
} from './types';

const SHIPPING_COST = 5.0;

const CartItem = ({ product, onUpdateQuantity, onRemove }: CartItemProps) => (
  <li className="flex py-6 sm:py-10">
    <div className="shrink-0">
      <img
        src={product.imageSrc}
        alt={product.imageAlt}
        className="size-24 rounded-md object-cover sm:size-48"
      />
    </div>

    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
        <div>
          <div className="flex justify-between">
            <h3 className="text-sm">
              <a
                href={product.href}
                className="font-medium text-gray-700 hover:text-gray-800"
              >
                {product.name}
              </a>
            </h3>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{product.color}</p>
            {product.size && (
              <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                {product.size}
              </p>
            )}
          </div>
          <p className="mt-1 text-sm font-medium text-gray-900">
            {product.price}
          </p>
        </div>

        <QuantitySelector
          quantity={product.quantity}
          onChange={(quantity) => onUpdateQuantity(product.id, quantity)}
          onRemove={() => onRemove(product.id)}
        />
      </div>

      <StockIndicator inStock={product.inStock} leadTime={product.leadTime} />
    </div>
  </li>
);

const QuantitySelector = ({
  quantity,
  onChange,
  onRemove,
}: QuantitySelectorProps) => (
  <div className="mt-4 sm:mt-0 sm:pr-9">
    <select
      value={quantity}
      onChange={(e) => onChange(Number(e.target.value))}
      className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
    >
      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
        <option key={num} value={num}>
          {num}
        </option>
      ))}
    </select>

    <div className="absolute right-0 top-0">
      <button
        type="button"
        onClick={onRemove}
        className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
      >
        <span className="sr-only">Remove</span>
        <XMarkIcon className="size-5" aria-hidden="true" />
      </button>
    </div>
  </div>
);

const StockIndicator = ({ inStock, leadTime }: StockIndicatorProps) => (
  <p className="mt-4 flex space-x-2 text-sm text-gray-700">
    {inStock ? (
      <CheckIcon
        className="size-5 shrink-0 text-green-500"
        aria-hidden="true"
      />
    ) : (
      <ClockIcon className="size-5 shrink-0 text-gray-300" aria-hidden="true" />
    )}
    <span>{inStock ? 'In stock' : `Ships in ${leadTime}`}</span>
  </p>
);

const OrderSummary = ({
  subtotal,
  tax,
  total,
  shippingCost,
  onCheckout,
}: OrderSummaryProps) => {
  if (shippingCost === undefined) {
    shippingCost = 0;
  }

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
        Order summary
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm text-gray-600">Subtotal</dt>
          <dd className="text-sm font-medium text-gray-900">
            ${subtotal.toFixed(2)}
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="flex items-center text-sm text-gray-600">
            <span>Shipping estimate</span>
            <a
              href="#"
              className="ml-2 shrink-0 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">
                Learn more about how shipping is calculated
              </span>
              <QuestionMarkCircleIcon className="size-5" aria-hidden="true" />
            </a>
          </dt>
          <dd className="text-sm font-medium text-gray-900">
            ${shippingCost.toFixed(2)}
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="flex text-sm text-gray-600">
            <span>Tax estimate</span>
            <a
              href="#"
              className="ml-2 shrink-0 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">
                Learn more about how tax is calculated
              </span>
              <QuestionMarkCircleIcon className="size-5" aria-hidden="true" />
            </a>
          </dt>
          <dd className="text-sm font-medium text-gray-900">
            ${tax.toFixed(2)}
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-base font-medium text-gray-900">Order total</dt>
          <dd className="text-base font-medium text-gray-900">
            ${total.toFixed(2)}
          </dd>
        </div>
      </dl>

      <div className="mt-6">
        <button
          type="submit"
          onClick={onCheckout}
          className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
          Checkout
        </button>
      </div>
    </section>
  );
};

const ShoppingCartManager = () => {
  const [products, setProducts] = useState<Product[]>(cartItems);
  const [shippingCost, setShippingCost] = useState(5.0);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newSubtotal = products.reduce((sum, product) => {
      return (
        sum + parseFloat(product.price.replace('$', '')) * product.quantity
      );
    }, 0);
    setSubtotal(newSubtotal);
  }, [products]);

  useEffect(() => {
    setTax(subtotal * 0.08);
  }, [subtotal]);

  useEffect(() => {
    setTotal(subtotal + tax + shippingCost);
  }, [subtotal, tax, shippingCost]);

  const updateQuantity = (productId: number, quantity: number) => {
    setProducts(
      products.map((product) =>
        product.id === productId ? { ...product, quantity } : product,
      ),
    );
  };

  const removeProduct = (productId: number) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>
            <ul
              role="list"
              className="divide-y divide-gray-200 border-b border-t border-gray-200"
            >
              {products.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeProduct}
                />
              ))}
            </ul>
          </section>

          <OrderSummary
            subtotal={subtotal}
            tax={tax}
            total={total}
            shippingCost={shippingCost}
            onCheckout={() => alert('Checkout not implemented')}
          />
        </form>
      </div>
    </div>
  );
};

export default ShoppingCartManager;
