import React, { createContext, useState } from "react";

export const ContextCrm = createContext();

const Context = ({ children }) => {
  const [dataState, setdataState] = useState({});

  const data = [
    {
      id: "1",
      category: "New",
      title: "Devis pour 150 tapis",
      expectedRevenue: "40,000.00",
      clientName: "OpenWood",
      tags: [
        {
          id: "1",
          name: "Product",
          color: "1",
        },
      ],
      priority: "Medium",
      user: {
        id: "2",
        name: "Mitchell Admin",
        avatar: "/web/image/res.users/2/avatar_128",
      },
    },
    {
      id: "1",
      category: "lost",
      title: "Devis pour 150 tapis",
      expectedRevenue: "40,000.00",
      clientName: "OpenWood",
      tags: [
        {
          id: "1",
          name: "Product",
          color: "1",
        },
      ],
      priority: "Medium",
      user: {
        id: "2",
        name: "Mitchell Admin",
        avatar: "/web/image/res.users/2/avatar_128",
      },
    },
    {
      id: "2",
      category: "New",
      title: "Project X",
      expectedRevenue: "50,000.00",
      clientName: "TechCo",
      tags: [
        {
          id: "2",
          name: "Service",
          color: "2",
        },
      ],
      priority: "High",
      user: {
        id: "3",
        name: "Sarah Smith",
        avatar: "/web/image/res.users/3/avatar_128",
      },
    },
    {
      id: "3",
      category: "Sale",
      title: "Upgrade Contract",
      expectedRevenue: "60,000.00",
      clientName: "EduTech",
      tags: [
        {
          id: "3",
          name: "Contract",
          color: "3",
        },
      ],
      priority: "Very High",
      user: {
        id: "4",
        name: "John Doe",
        avatar: "/web/image/res.users/4/avatar_128",
      },
    },
    {
      id: "4",
      category: "Sale",
      title: "Annual Subscription",
      expectedRevenue: "100,000.00",
      clientName: "GlobalCorp",
      tags: [
        {
          id: "4",
          name: "Subscription",
          color: "4",
        },
      ],
      priority: "Medium",
      user: {
        id: "5",
        name: "Emily Johnson",
        avatar: "/web/image/res.users/5/avatar_128",
      },
    },
    {
      id: "4",
      category: "Sale",
      title: "Annual Subscription",
      expectedRevenue: "100,000.00",
      clientName: "GlobalCorp",
      tags: [
        {
          id: "4",
          name: "Subscription",
          color: "4",
        },
      ],
      priority: "Medium",
      user: {
        id: "5",
        name: "Emily Johnson",
        avatar: "/web/image/res.users/5/avatar_128",
      },
    },
  ];

  const dataApi = {};

  const getData = () => {
    data.forEach((element) => {
      if (!dataApi[element.category]) {
        dataApi[element.category] = [];
      }

      dataApi[element.category].push(element);
    });
    setdataState(dataApi);
  };

  return (
    <ContextCrm.Provider
      value={{
        dataState,
        getData,
      }}
    >
      {children}
    </ContextCrm.Provider>
  );
};

export default Context;
