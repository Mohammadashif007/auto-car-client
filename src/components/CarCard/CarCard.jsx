import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const CarCard = ({ car }) => {
    const { name, price, category, description, type, image, id } = car;
    const axiosSecure = useAxiosSecure();

    const handleOnClick = () => {
        const carInfo = {
            carId: id,
            name,
            price,
            image,
            category,
            description,
            type,
        };

        axiosSecure
            .post("/carts", {
                carInfo
            })
            .then((res) => {
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <div className="card bg-base-100 shadow-xl mt-16">
                <figure>
                    <img src={image} alt="Cars" className="w-full" />
                </figure>
                <div className="m-5">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-start">{description}</p>
                    <div className="text-start text-[24px] font-bold my-4">
                        {price}
                    </div>
                    <div className="card-actions flex justify-between items-center">
                        <div>
                            <button
                                onClick={handleOnClick}
                                className="btn btn-primary"
                            >
                                Add to cart
                            </button>
                        </div>
                        <div>
                            <div className="badge badge-outline">
                                {category}
                            </div>
                            <div className="badge badge-outline">{type}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
