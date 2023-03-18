import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateBookMutation } from "../../features/api/apiSlice";

export default function AddBook() {
  const navigate = useNavigate();
  const [createBook, { isSuccess }] = useCreateBookMutation();

  const [formValues, setFormValues] = useState({
    id: "",
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormValues({ ...formValues, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(formValues);
    navigate("/books");
  };

  return (
    <>
      <main className="py-6 2xl:px-6">
        <div className="container">
          <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
            <h4 className="mb-8 text-xl font-bold text-center">
              Add New Book
            </h4>
            <form className="book-form" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="lws-bookName">Book Name</label>
                <input
                  required
                  className="text-input"
                  type="text"
                  id="lws-bookName"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lws-author">Author</label>
                <input
                  required
                  className="text-input"
                  type="text"
                  id="lws-author"
                  name="author"
                  value={formValues.author}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lws-thumbnail">Image Url</label>
                <input
                  required
                  className="text-input"
                  type="text"
                  id="lws-thumbnail"
                  name="thumbnail"
                  value={formValues.thumbnail}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-2 gap-8 pb-4">
                <div className="space-y-2">
                  <label htmlFor="lws-price">Price</label>
                  <input
                    required
                    className="text-input"
                    type="number"
                    id="lws-price"
                    name="price"
                    min="1"
                    value={formValues.price}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lws-rating">Rating</label>
                  <input
                    required
                    className="text-input"
                    type="number"
                    id="lws-rating"
                    name="rating"
                    min="1"
                    max="5"
                    value={formValues.rating}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="lws-featured"
                  type="checkbox"
                  name="featured"
                  className="w-4 h-4"
                  checked={formValues.featured}
                  onChange={handleChange}
                />
                <label htmlFor="lws-featured" className="ml-2 text-sm">
                  {" "}
                  This is a featured book{" "}
                </label>
              </div>

              <button
                type="submit"
                className="submit"
                id="lws-submit"
                disabled={isSuccess}
              >
                Add Book
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
