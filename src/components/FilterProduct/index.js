import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/reducers/categoriesSlice";

const FilterProduct = ({ filterOnChange }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-5 sm:pr-5 md:pr-10">
      <h1 className="text-2xl font-semibold text-black">Filter by category:</h1>
      <select
        className="select select-bordered w-full max-w-xs bg-white text-black rounded-2 border-black"
        defaultValue="Choose a category"
        onChange={(e) => filterOnChange(e.target.value)}
      >
        <option disabled value="Choose a category">
          Choose a category
        </option>
        <option value="">all items</option>
        {categories?.categories?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterProduct;
