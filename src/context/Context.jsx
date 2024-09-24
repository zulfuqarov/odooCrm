import React, { createContext, useState } from "react";

export const ContextCrm = createContext();

const Context = ({ children }) => {
  const [dataState, setdataState] = useState({});

  const [data, setdata] = useState([
    {
      id: "1",
      category: "New",
      Organization: "ss",
      contact: "newww",
      email: "zulfuqarov@gmail.com",
      phone: "0987654321",
      price: "299",
    },
    {
      id: "2",
      category: "Used",
      contact: "olduser",
      Organization: "ss",
      email: "olduser@example.com",
      phone: "0123456789",
      price: "199",
    },
    {
      id: "3",
      category: "Sale",
      contact: "discount",
      Organization: "ss",
      email: "discount@example.com",
      phone: "1234567890",
      price: "99",
    },
    {
      id: "4",
      category: "Premium",
      contact: "premiumcontact",
      Organization: "ss",
      email: "premium@example.com",
      phone: "0981234567",
      price: "499",
    },
  ]);

  const getData = () => {
    const dataApi = {};

    data.forEach((element) => {
      if (!dataApi[element.category]) {
        dataApi[element.category] = [];
      }

      if (element.email) {
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
        editCategoryName
      }}
    >
      {children}
    </ContextCrm.Provider>
  );
};

export default Context;
