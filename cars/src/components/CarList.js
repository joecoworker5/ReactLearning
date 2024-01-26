import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../stores";

function CarList() {
  const {cars, name} = useSelector((state) => {
    const { form, cars : {data, searchTerm} } = state;
    const filteredCars = data.filter((car) => {
        return car.name.toLowerCase().includes(searchTerm.toLowerCase());    
    })

    return {
        cars: filteredCars,
        name: form.name
    }
  });
  const dispatch = useDispatch();

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    // DECIDE if this car should be bold
    // state.form.name
    const isbold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${isbold && 'bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
