import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import * as PropTypes from "prop-types";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img
        className={`h-28 ${soldOut ? "grayscale" : ""}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex justify-between text-sm uppercase">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-bold text-stone-400">Sold out</p>
          )}
          <Button type="small">Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

MenuItem.propTypes = {
  pizza: PropTypes.object,
};

export default MenuItem;
