import useData from "../../hooks/useData";
import CarCard from "../CarCard/CarCard";


const Home = () => {
    const cars = useData();

    if (cars.length === 0) {
        return <span className="loading loading-spinner text-error"></span>;
    }
    return (
        <div className="w-4/5 mx-auto">
            <div className="grid grid-cols-3 gap-5">
                {cars.map((car) => (
                    <CarCard key={car.id} car={car}></CarCard>
                ))}
            </div>
        </div>
    );
};

export default Home;
