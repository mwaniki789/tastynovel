import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";
import Carousel from "./Carousel";

// ✅ Create Context
export const CartContext = createContext();

const GetProducts = () => {
  const [cart, setCart] = useState([]);

  // ✅ Add to cart OR increase quantity
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product_id === product.product_id
      );

      // If product already exists → increase quantity
      if (existingItem) {
        return prevCart.map((item) =>
          item.product_id === product.product_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // If product doesn't exist → add with quantity 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // ✅ Increase quantity
  const increaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product_id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ✅ Decrease quantity
  const decreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.product_id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ✅ Remove item completely
  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product_id !== id)
    );
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.product_name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;

  const selectedItems = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const totalPages = Math.ceil(
    filteredProducts.length / itemsPerPage
  );

  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const img_url =
    "https://mwaniki.alwaysdata.net/static/images/";

  // ✅ Fetch products
  const getProducts = async () => {
    try {
      setLoading("Please wait as we load products...");

      const response = await axios.get(
        "https://mwaniki.alwaysdata.net/api/get_product_details"
      );

      setProducts(response.data);

      setLoading("");
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
      }}
    >
      <div>
        <Navbar />
        <Carousel />

        <div className="row container-fluid mt-4 text-center">
          <h1 className="text-primary">
            Available Products
          </h1>

          <h6 className="text-info">{loading}</h6>

          <h6 className="text-danger">{error}</h6>

          {/* Search */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search Products..."
              className="form-control w-50 mx-auto"
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />
          </div>

          {/* Products */}
          {selectedItems.map((product) => {
            // ✅ Find product in cart
            const cartItem = cart.find(
              (item) =>
                item.product_id === product.product_id
            );

            return (
              <div
                className="justify-content-center col-md-3"
                key={product.product_id}
              >
                <div className="card shadow p-4 mt-2 h-100">
                  <img
                    src={
                      img_url + product.product_photo
                    }
                    alt={product.product_name}
                    className="product_img img_hover"
                  />

                  <div className="card-body">
                    <h5>
                      {product.product_name}
                    </h5>

                    <p className="text-muted">
                      Ksh {product.product_cost}
                    </p>

                    <b className="text-warning">
                      {
                        product.product_description
                      }
                    </b>

                    <br />
                    <br />

                    {/* ✅ Quantity Controls */}
                    <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
                      {/* Minus Button */}
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          decreaseQty(
                            product.product_id
                          )
                        }
                        disabled={!cartItem}
                      >
                        -
                      </button>

                      {/* Quantity */}
                      <span className="fw-bold fs-5">
                        {cartItem?.quantity || 0}
                      </span>

                      {/* Plus Button */}
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          addToCart(product)
                        }
                      >
                        +
                      </button>
                    </div>

                    {/* Buy Now */}
                <button
  className="btn btn-dark"
  onClick={() => {
    const cartItem = cart.find(
      (item) =>
        item.product_id === product.product_id
    );

    const quantity = cartItem?.quantity || 1;

    const totalAmount =
      Number(product.product_cost) * quantity;

    navigate("/makepayment", {
      state: {
        product,
        quantity,
        totalAmount,
      },
    });
  }}
>
  Buy now
</button>

                    <br />
                    <br />

                    {/* Remove Button */}
                    {cartItem && (
                      <button
                        className="btn btn-outline-danger"
                        onClick={() =>
                          removeFromCart(
                            product.product_id
                          )
                        }
                      >
                        Remove from Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="pagination text-center mt-4 mb-4">
          <button
            className="btn btn-danger me-3"
            onClick={() =>
              setCurrentPage(currentPage - 1)
            }
            disabled={currentPage === 1}
          >
            Prev
          </button>

          <span className="fw-bold">
            Page {currentPage} of {totalPages}
          </span>

          <button
            className="btn btn-danger ms-3"
            onClick={() =>
              setCurrentPage(currentPage + 1)
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

        <hr />

        <Footer />
      </div>
    </CartContext.Provider>
  );
};

export default GetProducts;