import React, { useContext, useState } from "react";
import { ContextCrm } from "../context/Context";

const AddStageCategory = () => {
  const { addStageCategory } = useContext(ContextCrm);
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  const [stageNameInput, setstageNameInput] = useState("");
  const handleChangeInput = (e) => {
    setstageNameInput(e.target.value);
  };

  return show ? (
    <div className="o_column_quick_create d-print-none flex-shrink-0 flex-grow-1 flex-md-grow-0">
      <div className="o_quick_create_folded position-sticky z-1 my-3 text-nowrap">
        <input
          value={stageNameInput}
          onChange={handleChangeInput}
          type="text"
          className="form-control bg-view"
          placeholder="Stage..."
        />
        <button
          onClick={() => {
            addStageCategory(stageNameInput);
            setstageNameInput("");
          }}
          className="btn btn-primary o_kanban_add"
          type="button"
        >
          {" "}
          Add{" "}
        </button>
      </div>
    </div>
  ) : (
    <div className="o_column_quick_create d-print-none flex-shrink-0 flex-grow-1 flex-md-grow-0">
      <div className="o_quick_create_folded position-sticky z-1 my-3 text-nowrap">
        <button
          onClick={handleToggle}
          className="o_kanban_add_column btn btn-light w-100"
          aria-label="Add column"
          data-tooltip="Add column"
        >
          <i className="fa fa-plus me-2" role="img" />
          Stage
        </button>
      </div>
    </div>
  );
};

export default AddStageCategory;
