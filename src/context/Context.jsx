import React, { createContext, useState } from "react";

export const ContextCrm = createContext();

const Context = ({ children }) => {
  const [dataState, setdataState] = useState({});

  const [data, setdata] = useState([
    {
      id: "1",
      category: "New",
      Create: "ss",
      fullName: "newww1",
      Product: "zulfuqarov@gmail.com",
      Probability: "0987654321",
      Expected: "299",
    },
    {
      id: "2",
      category: "New2",
      Create: "ss",
      fullName: "newww2",
      Product: "zulfuqarov@gmail.com",
      Probability: "0987654321",
      Expected: "299",
    },
    {
      id: "3",
      category: "New3",
      Create: "ss",
      fullName: "newww3",
      Product: "zulfuqarov@gmail.com",
      Probability: "0987654321",
      Expected: "299",
    },
    {
      id: "4",
      category: "New4",
      Create: "ss",
      fullName: "newww4",
      Product: "zulfuqarov@gmail.com",
      Probability: "0987654321",
      Expected: "299",
    },
    {
      id: "4",
      category: "New5",
      Create: "ss",
      fullName: "newww5",
      Product: "zulfuqarov@gmail.com",
      Probability: "0987654321",
      Expected: "299",
    },
  ]);

  const getData = () => {
    const dataApi = {};

    data.forEach((element) => {
      if (!dataApi[element.category]) {
        dataApi[element.category] = [];
      }

      if (element.fullName) {
        dataApi[element.category].push(element);
      }
    });
    setdataState(dataApi);
  };

  // add Stage Category
  const addStageCategory = (categoryName) => {
    setdata([...data, { category: categoryName }]);
  };

  // add New Contact
  const addNewContact = (input) => {
    setdata([...data, input]);
  };

  // changeCategoryName
  const editCategoryName = (newCategory, categoryName) => {
    setdata(
      data.map((item) =>
        item.category === categoryName
          ? { ...item, category: newCategory }
          : item
      )
    );
  };

  return (
    <ContextCrm.Provider
      value={{
        data,
        dataState,
        setdataState,
        getData,
        addStageCategory,
        addNewContact,
        editCategoryName,
      }}
    >
      {children}
    </ContextCrm.Provider>
  );
};

export default Context;
