import React, { useContext, useEffect, useState } from "react";
import KanbanView from "../components/KanbanView";
import { ContextCrm } from "../context/Context";

const ActionPages = () => {
  const context = useContext(ContextCrm);

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
    event.preventDefault();
    const target = event.target;

    if (target.classList.contains("CardRow") && draggedElement) {
      // Get all child elements of the target
      const children = Array.from(target.children);

      // Find the drop target element
      let dropTarget = null;

      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child === draggedElement) continue;

        const rect = child.getBoundingClientRect();
        const mouseY = event.clientY;

        if (mouseY < rect.top + rect.height / 2) {
          dropTarget = child;
          break;
        }
      }

      if (dropTarget) {
        target.insertBefore(draggedElement, dropTarget);
      } else {
        target.appendChild(draggedElement);
      }

      setDraggedElement(null);
    }
  };

  useEffect(() => {
    context.getData();
  }, []);

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
