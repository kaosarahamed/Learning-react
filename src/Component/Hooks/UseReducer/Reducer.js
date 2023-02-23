import React, { useReducer, useState } from "react";

const initialValue = [
  { id: 1, title: "Sport book" },
  { id: 2, title: "Gaming book" },
  { id: 3, title: "Fashion book" },
];
function Reducer() {
  const reducer = (state, action) => {
    if (action.type === "ADD") {
      const allBooks = [...state.books, action.payload];
      return {
        ...state,
        books: allBooks,
        isModelOpen: true,
        modelText: "Book is added sucessfull",
      };
    }
    if (action.type === "REMOVE") {
      const filterBooks = [...state.books].filter(
        (book) => book.id !== action.payload
      );
      console.log(filterBooks);
      return {
        ...state,
        books: filterBooks,
        isModelOpen: true,
        modelText: "item remove Sucessfull",
      };
    }
    return state;
  };

  const [bookState, dispatch] = useReducer(reducer, {
    books: initialValue,
    isModelOpen: false,
    modelText: "",
  });
  const [bookname, setBookName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Math.floor(Math.random() * 10 * 100),
      title: bookname,
    };
    dispatch({ type: "ADD", payload: newBook });
    setBookName("");
    console.log(newBook);
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE", payload: id });
    console.log(id);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={bookname}
          onChange={(e) => setBookName(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      <p>{bookState.modelText}</p>
      {bookState.books.map((book, index) => {
        return (
          <div key={index}>
            <span>{book.title}</span>
            <button
              onClick={() => {
                removeItem(book.id);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Reducer;
