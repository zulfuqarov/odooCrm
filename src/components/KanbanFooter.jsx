import React from "react";

const KanbanFooter = () => {
  return (
    <div className="oe_kanban_footer">
      <div className="o_kanban_record_bottom">
        <div className="oe_kanban_bottom_left">
          <div name="priority" className="o_field_widget o_field_priority">
            <div
              className="o_priority"
              role="radiogroup"
              name="priority"
              aria-label="Priority"
            >
              <a
                href="#"
                className="o_priority_star fa fa-star"
                role="radio"
                tabIndex={-1}
                data-tooltip="Priority: Medium"
                aria-checked=""
                aria-label="Medium"
              />
              <a
                href="#"
                className="o_priority_star fa fa-star-o"
                role="radio"
                tabIndex={-1}
                data-tooltip="Priority: High"
                aria-label="High"
              />
              <a
                href="#"
                className="o_priority_star fa fa-star-o"
                role="radio"
                tabIndex={-1}
                data-tooltip="Priority: Very High"
                aria-label="Very High"
              />
            </div>
          </div>
          <div
            name="activity_ids"
            className="o_field_widget o_field_kanban_activity"
          >
            <a
              className="o-mail-ActivityButton"
              role="button"
              aria-label="Show activities"
              title="Show activities"
            >
              <i
                className="fa fa-fw fa-lg text-muted fa-clock-o btn-link text-dark"
                role="img"
              />
            </a>
          </div>
        </div>
        <div className="oe_kanban_bottom_right">
          <div
            name="user_id"
            className="o_field_widget o_field_many2one_avatar_user o_field_many2one_avatar_kanban o_field_many2one_avatar"
          >
            <div
              className="d-flex align-items-center gap-1"
              data-tooltip="Mitchell Admin"
            >
              <span className="o_avatar o_m2o_avatar d-flex">
                <img
                  className="rounded"
                  src="/web/image/res.users/2/avatar_128"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanFooter;
