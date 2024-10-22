import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import buyCake from "../redux/cake/cakeActions";

function CakeContainer() {
  const [value, setValue] = useState(1);
  const state = useSelector((state) => state.cake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>CakeContainer :{state.numOfCakes}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(value))}>Buy cake</button>
    </div>
  );
}

export default CakeContainer;
