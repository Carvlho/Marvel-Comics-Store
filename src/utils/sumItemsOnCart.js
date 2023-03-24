import { useSelector } from "react-redux";
import { cartSelector } from "@/store/cart";

export default function sumItemsOnCart() {
  const { cart } = useSelector(cartSelector);

  const items = cart.map((item) => item.count);

  const initialValue = 0;

  const sum = items.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  return sum;
}
