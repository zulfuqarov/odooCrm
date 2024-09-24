import React from "react";
import KanbanHeader from "./KanbanHeader";
import KanbanRecord from "./KanbanRecord";

const KanbanGroup = ({
  category,
  items,
  index,

  handleDragStart,
  handleDragOver,
  handleDrop,
}) => {
  return (
    <div
      onDragOver={handleDragOver}
      onDrop={(event) => handleDrop(event, index)}
      className="o_kanban_group relative h-[100vh] flex-shrink-0 flex-grow-1 flex-md-grow-0 o_group_draggable CardRow"
      data-id="datapoint_2"
      onDragStart={(event) => handleDragStart(event, index)}
      draggable="true"
    >
      <KanbanHeader category={category} />

      {items &&
        items.map((oneMap, index) => (
          <KanbanRecord
            key={index}
            items={oneMap}
            handleDragStart={handleDragStart}
          />
        ))}
    </div>
  );
};

export default KanbanGroup;
