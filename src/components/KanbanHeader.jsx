import React from "react";

const KanbanHeader = ({category}) => {
  return (
    <div className="o_kanban_header position-sticky top-0 z-1 py-2 pt-print-0">
      <div className="o_kanban_header_title position-relative d-flex lh-lg">
        <div className="o_column_title flex-grow-1 min-w-0 mw-100 gap-1 d-flex fs-4 fw-bold align-top text-900">
          <span className="text-truncate">{category}</span>
        </div>
        <div className="o_kanban_config d-print-none">
          <button
            className="btn px-2 o-dropdown dropdown-toggle dropdown"
            aria-expanded="false"
          >
            <i
              className="fa fa-gear opacity-50 opacity-100-hover"
              role="img"
              aria-label="Settings"
              title="Settings"
            />
          </button>
        </div>
        <button className="o_kanban_quick_add d-print-none btn pe-2 me-n2">
          <i
            className="fa fa-plus opacity-75 opacity-100-hover"
            role="img"
            aria-label="Quick add"
            title="Quick add"
          />
        </button>
      </div>
      <div className="o_kanban_counter position-relative d-flex align-items-center justify-content-between">
        <div className="o_column_progress progress bg-300 w-50">
          <div
            role="progressbar"
            className="progress-bar o_bar_has_records cursor-pointer bg-success"
            aria-valuemin={0}
            aria-label="Progress bar"
            data-tooltip-delay={0}
            style={{ width: "50%" }}
            aria-valuemax={2}
            aria-valuenow={1}
            data-tooltip="1 Planned"
          />
          <div
            role="progressbar"
            className="progress-bar o_bar_has_records cursor-pointer bg-200"
            aria-valuemin={0}
            aria-label="Progress bar"
            data-tooltip-delay={0}
            style={{ width: "50%" }}
            aria-valuemax={2}
            aria-valuenow={1}
            data-tooltip="1 Other"
            title=""
          />
        </div>
        <div
          className="o_animated_number ms-2 text-900 text-nowrap cursor-default false"
          title="Expected Revenue"
        >
          <b>80,000</b>
        </div>
      </div>
    </div>
  );
};

export default KanbanHeader;
