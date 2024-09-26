import React, { useContext, useEffect, useState } from "react";
import KanbanView from "../components/KanbanView";
import { ContextCrm } from "../context/Context";

const ActionPages = () => {
  const { getData, data, dataState } = useContext(ContextCrm);

  const [categoryArry, setcategoryArry] = useState();
  const [draggedElement, setDraggedElement] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (event, index) => {
    if (event.target.classList.contains("CardDrop")) {
      setDraggedElement(event.target);
    } else {
      setDraggedIndex(index);
    }
  };

  const handleDragOver = (event) => {
    if (event.target.classList.contains("CardRow")) {
      event.preventDefault();
    } else {
      event.preventDefault();
    }
  };

  const handleDrop = (event, index) => {
    if (event.target.classList.contains("CardRow")) {
      if (draggedElement) {
        const headerDiv = Array.from(event.target.children).find((child) =>
          child.classList.contains("o_kanban_header")
        );

        if (headerDiv) {
          event.target.insertBefore(
            draggedElement,
            headerDiv.nextElementSibling
          );
        }

        setDraggedElement(null);
      }
    } else {
      const newItems = [...categoryArry];
      const [draggedItem] = newItems.splice(draggedIndex, 1);
      newItems.splice(index, 0, draggedItem);
      setcategoryArry(newItems);
      console.log(newItems);

      setDraggedIndex(null);
    }
  };

  useEffect(() => {
    getData();
    // console.log(dataState);
    console.log(data);
  }, [data]);

  useEffect(() => {
    setcategoryArry(Object.keys(dataState));
  }, [dataState]);

  return (
    <div className="o_action_manager">
      <KanbanView
        categoryArry={categoryArry}
        handleDragStart={handleDragStart}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
      />
    </div>
  );
};

export default ActionPages;
