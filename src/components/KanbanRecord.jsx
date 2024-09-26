import React from "react";
import KanbanFooter from "./KanbanFooter";
import { Link } from "react-router-dom";
const KanbanRecord = ({ items, handleDragStart }) => {
  return (
    <Link
      to={`/${items.id}`}
    >
      <article
        onDragStart={handleDragStart}
        className="o_kanban_record d-flex o_draggable cursor-pointer oe_kanban_card_undefined o_legacy_kanban_record CardDrop my-3"
        data-id="datapoint_4"
        tabIndex={0}
        draggable="true"
      >
        <div className="oe_kanban_color_0 oe_kanban_global_click oe_kanban_card d-flex flex-column">
          <div className="oe_kanban_content flex-grow-1">
            <div className="oe_kanban_details">
              <strong className="o_kanban_record_title">
                <span>{items.fullName}</span>
              </strong>
            </div>
            <div className="o_kanban_record_subtitle">
              <div
                name="expected_revenue"
                className="o_field_widget o_field_monetary"
              >
                <span>$&nbsp;40,000.00</span>
              </div>
            </div>
            <div>
              <span className="o_text_overflow">OpenWood</span>
            </div>
            <div>
              <div
                name="tag_ids"
                className="o_field_widget o_field_many2many_tags"
              >
                <div className="d-flex flex-wrap gap-1">
                  <span
                    className="o_tag position-relative d-inline-flex align-items-center user-select-none mw-100 o_badge badge rounded-pill lh-1 o_tag_color_1"
                    tabIndex={-1}
                    data-color={1}
                    title="Product"
                  >
                    <div className="o_tag_badge_text text-truncate">
                      Product
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div
                name="lead_properties"
                className="o_field_widget o_field_properties"
              >
                <div className="w-100 fw-normal text-muted" />
              </div>
            </div>
          </div>
          <KanbanFooter />
          <div className="clearfix" />
        </div>
        <div className="o_dropdown_kanban bg-transparent position-absolute end-0 top-0 w-auto">
          <button
            className="btn o-no-caret rounded-0 o-dropdown dropdown-toggle dropdown"
            title="Dropdown menu"
            aria-expanded="false"
          >
            <span className="fa fa-ellipsis-v" />
          </button>
        </div>
      </article>
    </Link>
  );
};

export default KanbanRecord;
