import {produce} from 'immer';
import { useState, useEffect, useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

// function CounterPage({ initialCount }) {
//   const [count, setCount] = useState(initialCount);
//   const [valueToAdd, setValueToAdd] = useState(0);

//   useEffect(() => {
//     console.log(count);
//   }, [count]);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   const handleChange = (event) =>{
//       const value = parseInt(event.target.value) || 0;
//       setValueToAdd(value);
//   }

//   const handleSubmit = (event) => {
//       event.preventDefault();
//       setCount(count+valueToAdd);
//       setValueToAdd(0);
//   }

//   return (
//     <Panel className="m-3">
//       <h1 className="text-lg">Count is {count}</h1>
//       <div className="flex flex-row">
//         <Button onClick={increment}>Increment</Button>
//         <Button onClick={decrement}>Decrement</Button>
//       </div>

//       <form onSubmit={handleSubmit}>
//         <label>Add a lot!</label>
//         <input
//           type="number"
//           value={valueToAdd || ''}
//           onChange={handleChange}
//           className="p-1 m-3 bg-gray-50 border border-gray-300"
//         />
//         <Button>Add it!</Button>
//       </form>
//     </Panel>
//   );
// }

// export default CounterPage;

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const CHANGE_VALUE_TO_ADD = "change_value_to_add";
const ADD_VALUE_TO_COUNT = "addValueToCount";

const reducer = (state, action) => {
  // 在不同 action 情況下，更新 state
  switch (action.type) {
    case INCREMENT_COUNT:
      // with immer
      state.count = state.count + 1;
      return;
      // w/o immer
      // return {
      //   ...state,
      //   count: state.count + 1,
      // };
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
      // return {
      //   ...state,
      //   count: state.count - 1,
      // };
    case CHANGE_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
      // return {
      //   ...state,
      //   valueToAdd: action.payload,
      // };
    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
      // return {
      //   ...state,
      //   valueToAdd: 0,
      //   count: state.count + state.valueToAdd
      // }
    default:
      return;
      // return state;
  }
};

function CounterPageRefactorWithUseReducer({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });
  console.log(state);

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: CHANGE_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT
    })
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          type="number"
          value={state.valueToAdd || ""}
          onChange={handleChange}
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPageRefactorWithUseReducer;
