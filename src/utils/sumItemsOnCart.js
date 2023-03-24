export default function sumItemsOnCart(cart) {
  const items = cart.map((item) => item.count);

  const initialValue = 0;

  const sum = items.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  return sum;
}
