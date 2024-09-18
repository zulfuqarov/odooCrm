import React, { useContext, useEffect, useState } from "react";
import KanbanView from "../components/KanbanView";
import { ContextCrm } from "../context/Context";

const ActionPages = () => {
  const { getData, data, dataState } = useContext(ContextCrm);

  const [draggedElement, setDraggedElement] = useState(null);

  const handleDragStart = (event) => {
    if (event.target.classList.contains("CardDrop")) {
      setDraggedElement(event.target);
    }
  };

  const handleDragOver = (event) => {
    if (event.target.classList.contains("CardRow")) {
      event.preventDefault();
    }
  };

  const handleDrop = (event) => {
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
        } else {
          event.target.prepend(draggedElement);
        }

        setDraggedElement(null);
      }
    }
  };

  useEffect(() => {
    getData();
    console.log(dataState);
  }, [data]);

  return (
    <div className="o_action_manager">
      <KanbanView
        handleDragStart={handleDragStart}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
      />
    </div>
  );
};

export default ActionPages;
