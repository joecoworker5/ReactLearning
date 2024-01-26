import { useDispatch, useSelector} from 'react-redux';
import { changeName, changeCost, addCar } from '../stores';
function CarForm() {
  const dispatch = useDispatch();
  const {name, cost} = useSelector((state)=> state.form);


  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    const carCost = event.target.value || 0;
    dispatch(changeCost(carCost));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({
      name: name,
      cost: parseInt(cost)
    }))
  }


  return (
    <div className="car-form panel">
      <h4 className= "subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expaned"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expaned"
              type="number"
              value={cost || ''}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
