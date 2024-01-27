import { useContext, useState } from "react";
import tag from "../assets/tag.svg";
import { getImgUrl } from "../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";
import toast, { Toaster } from "react-hot-toast";
import { MovieContext } from "../contexts";
const MovieCard = ({ movie }) => {
  // states
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { title, genre, cover, price, rating } = movie;

  // context provider

  // const { cartData, setCartData } = useContext(MovieContext);// with useState
  const { state, dispatch } = useContext(MovieContext); // with useReduer

  // handler
  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleAddToCart = (event, movie) => {
    event.stopPropagation();
    const found = state.cartData.find((item) => {
      return item.id === movie.id;
    });
    if (!found) {
      // setCartData([...state.cartData, movie]); // with useState
      dispatch({ // with reducer
        type : "ADD_TO_CART",
        payload : { // can use any name here but it's a convation to use payload
          ...movie
        }
      }) // with Reducer
      toast.success("Movie added to the cart successfully", {
        position : "top-center"
      });
    } else {
      toast.error(`The movie ${title} is already added to the cart`, {
        position : "top-center"
      });
    }
  };

  return (
    <div>
      {showModal && (
        <MovieDetailsModal onAddToCart = {handleAddToCart} movie={selectedMovie} onClose={handleModalClose} />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl cursor-pointer">
        <a onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full  object-cover"
            src={getImgUrl(cover)}
            alt={title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={rating} />
            </div>
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src={tag} alt="" />
              <span>${price} | Add to cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
      <Toaster />
    </div>
  );
};

export default MovieCard;
