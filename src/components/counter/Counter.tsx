import { useDispatch, useSelector } from "react-redux";
import { decrement, reset, increment } from "./counterSlice";
import { RootState } from "../../store";
import { GrFormAdd, GrPowerReset, GrFormSubtract } from "react-icons/gr";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counterR.count);
  const dispatch = useDispatch();

  const handleIncrementBy1 = () => {
    dispatch(increment());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  const handleDecrementBy1 = () => {
    dispatch(decrement());
  };

  return (
    <div className="container">
      <div className="counter">
        <div className="title"> COUNT</div>
        <div className="amount">{count}</div>
      </div>
      <div className="contorls">
        <GrFormAdd className="counter-controler" onClick={handleIncrementBy1} />
        <GrPowerReset className="counter-controler" onClick={handleReset} />
        <GrFormSubtract
          className="counter-controler"
          onClick={handleDecrementBy1}
        />
      </div>
    </div>
  );
};

export default Counter;
