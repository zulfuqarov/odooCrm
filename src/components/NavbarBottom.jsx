import React, { useState } from "react";
import FilteringSearch from "./FilteringSearch";

const NavbarBottom = () => {
  const [showDownIcon, setshowDownIcon] = useState(false);

  const handleToggleDropdown = () => {
    setshowDownIcon(!showDownIcon);
  };

  return (
    <div className="o_control_panel d-flex flex-column gap-3 px-3 pt-2 pb-3">
      <div className="o_control_panel_main d-flex flex-wrap flex-lg-nowrap justify-content-between align-items-lg-start gap-3 flex-grow-1">
        <div className="o_control_panel_breadcrumbs d-flex align-items-center gap-1 order-0 h-lg-100">
          <div className="o_control_panel_main_buttons d-flex gap-1 d-empty-none d-print-none">
            <div className="d-inline-flex gap-1">
              <button
                type="button"
                className="btn btn-primary o-kanban-button-new"
                accessKey="c"
              >
                Yeni
              </button>
              <button
                className="btn o_button_generate_leads btn-secondary"
                name="action_generate_leads"
              >
                <span>Generate Leads</span>
              </button>
            </div>
          </div>
          <div className="o_breadcrumb d-flex gap-1 text-truncate">
            <div className="o_last_breadcrumb_item active d-flex fs-4 min-w-0 align-items-center">
              <span className="min-w-0 text-truncate">Fırsat Havuzu</span>
            </div>
          </div>
          <div className="me-auto" />
        </div>
        <div className="o_control_panel_actions d-empty-none d-flex align-items-center justify-content-start justify-content-lg-around order-2 order-lg-1 w-100 w-lg-auto">
          <div className="o_cp_searchview d-flex input-group" role="search">
            <div
              className="o_searchview form-control d-print-contents d-flex align-items-center py-1 border-end-0"
              role="search"
              aria-autocomplete="list"
            >
              <button
                className="d-print-none btn border-0 p-0"
                aria-label="Search..."
                title="Ara..."
              >
                <i className="fa-solid fa-magnifying-glass me-2"></i>{" "}
              </button>
              <input
                type="text"
                className="o_searchview_input o_input d-print-none flex-grow-1 w-auto border-0"
                accessKey="Q"
                placeholder="Ara..."
                role="searchbox"
              />
            </div>
            <button
              className={`o_searchview_dropdown_toggler d-print-none btn btn-outline-secondary o-dropdown-caret rounded-start-0 o-dropdown dropdown-toggle dropdown ${
                showDownIcon ? "show" : ""
              }`}
              data-hotkey="shift+q"
              title="Toggle Search Panel"
              aria-expanded={`${showDownIcon ? "true" : "false"}`}
              onClick={handleToggleDropdown}
            ></button>
          </div>
        </div>
        <div className="o_control_panel_navigation d-flex flex-wrap flex-md-nowrap justify-content-end gap-1 gap-xl-3 order-1 order-lg-2 flex-grow-1">
          <nav className="o_cp_switch_buttons d-print-none d-inline-flex btn-group">
            <button
              className="btn btn-secondary o_switch_view o_kanban active"
              data-tooltip="Kanban"
            >
              <i className="oi oi-view-kanban" />
            </button>
            <button
              className="btn btn-secondary o_switch_view o_list"
              data-tooltip="Liste"
            >
              <i className="oi oi-view-list" />
            </button>
            <button
              className="btn btn-secondary o_switch_view o_calendar"
              data-tooltip="Takvim"
            >
              <i className="fa fa-calendar" />
            </button>
            <button
              className="btn btn-secondary o_switch_view o_pivot"
              data-tooltip="Pivot"
            >
              <i className="oi oi-view-pivot" />
            </button>
            <button
              className="btn btn-secondary o_switch_view o_graph"
              data-tooltip="Grafik"
            >
              <i className="fa fa-area-chart" />
            </button>
            <button
              className="btn btn-secondary o_switch_view o_map"
              data-tooltip="Harita"
            >
              <i className="fa fa-map-marker" />
            </button>
          </nav>
        </div>
      </div>
      {showDownIcon ? <FilteringSearch /> : ""}
    </div>
  );
};

export default NavbarBottom;
