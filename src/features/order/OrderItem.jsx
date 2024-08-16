import * as PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
          <br />
          <span className="text-sm capitalize italic text-stone-500">
            {isLoadingIngredients ? "Loading..." : ingredients.join(", ")}
          </span>
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

OrderItem.propTypes = {
  item: PropTypes.object,
  isLoadingIngredients: PropTypes.bool,
  ingredients: PropTypes.array,
};

export default OrderItem;
