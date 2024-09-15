import React, { useContext } from "react";
import KanbanGroup from "./KanbanGroup";
import { ContextCrm } from "../context/Context";

const KanbanView = ({ handleDragStart, handleDragOver, handleDrop }) => {
  const context = useContext(ContextCrm);
  const data = context.dataState;
  return (
    <div className="o_kanban_view o_crm_kanban_view o_kanban_small_column o_opportunity_kanban o_view_controller o_action ">
      <div className="o_content">
        <div className="o_kanban_renderer o_renderer d-flex o_kanban_grouped align-content-stretch">
          {data &&
            Object.keys(data).map((category) => (
              <KanbanGroup
                category={category}
                items={data[category]}
                handleDragStart={handleDragStart}
                handleDragOver={handleDragOver}
                handleDrop={handleDrop}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default KanbanView;
