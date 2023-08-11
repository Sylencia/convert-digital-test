type CartProps = {
  cart: Record<string, number>;
};

export const Cart = ({ cart }: CartProps) => {
  const itemsInCart = Object.values(cart).reduce(
    (prev, quantity) => prev + quantity,
    0
  );

  return (
    <div className="flex h-10 w-16 rounded-lg justify-center items-center bg-orange-500">
      <div className="flex items-center justify-center h-full w-full text-xl text-white text-bold">
        🛒 {itemsInCart}
      </div>
    </div>
  );
};
