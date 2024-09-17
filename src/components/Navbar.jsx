import React from "react";
import { Link } from "react-router-dom";

import CrmLogo from "../assets/Img/crm.png";

const Navbar = () => {
  return (
    <nav
      className="o_main_navbar d-print-none"
      data-command-category="disabled"
    >
      <Link
        className="o_menu_toggle hasImage"
        accessKey="h"
        title="Ana Menü"
        aria-label="Ana Menü"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="o_menu_toggle_icon pe-none"
          width="14px"
          height="14px"
          viewBox="0 0 14 14"
        >
          <g fill="currentColor" id="o_menu_toggle_row_0">
            <rect width={3} height={3} x={0} y={0} />
            <rect width={3} height={3} x={5} y={0} />
            <rect width={3} height={3} x={10} y={0} />
          </g>
          <g fill="currentColor" id="o_menu_toggle_row_1">
            <rect width={3} height={3} x={0} y={5} />
            <rect width={3} height={3} x={5} y={5} />
            <rect width={3} height={3} x={10} y={5} />
          </g>
          <g fill="currentColor" id="o_menu_toggle_row_2">
            <rect width={3} height={3} x={0} y={10} />
            <rect width={3} height={3} x={5} y={10} />
            <rect width={3} height={3} x={10} y={10} />
          </g>
        </svg>

        <img
          className="o_menu_brand_icon d-inline position-absolute start-0 h-100 ps-1 ms-2"
          src={CrmLogo}
          alt=""
        />

        <span class="o_menu_brand d-flex ms-3 pe-0">CRM</span>
      </Link>
      <div
        className="o_menu_sections d-flex flex-grow-1 flex-shrink-1 w-0"
        role="menu"
      >
        <button
          className="fw-normal o-dropdown dropdown-toggle dropdown"
          data-hotkey={1}
          aria-expanded="false"
        >
          <span>Satış</span>
        </button>
        <button
          className="fw-normal o-dropdown dropdown-toggle dropdown"
          data-hotkey={2}
          aria-expanded="false"
        >
          <span>Raporlama</span>
        </button>
        <button
          className="fw-normal o-dropdown dropdown-toggle dropdown"
          data-hotkey={3}
          aria-expanded="false"
        >
          <span>Yapılandırma</span>
        </button>
      </div>
      <div className="o_menu_systray d-flex flex-shrink-0 ms-auto" role="menu">
        <div
          className="o_menu_systray_item d-md-flex ms-auto oe_expiration_tag rounded"
          style={{ backgroundColor: "#dc3545", color: "white" }}
        >
          <Link href="#" className="o_nav_entry">
            <label>
              <i className="fa fa-fw fa-bell" style={{ color: "white" }} />
            </label>
            <span className="d-none d-sm-inline" style={{ color: "white" }}>
              {" "}
              Pending Activation
            </span>
          </Link>
        </div>
        <div className="dropdown">
          <button
            aria-expanded="false"
            className="o-dropdown dropdown-toggle dropdown"
          >
            <i
              className="fa fa-lg fa-comments"
              role="img"
              aria-label="Messages"
            />
            <span className="o-mail-MessagingMenu-counter badge rounded-pill">
              3
            </span>
          </button>
        </div>
        <button
          aria-expanded="false"
          className="o-dropdown dropdown-toggle dropdown"
        >
          <i
            className="fa fa-lg fa-clock-o"
            role="img"
            aria-label="Activities"
          />
        </button>
        <div className="o_switch_company_menu d-none d-md-block">
          <button
            data-hotkey="shift+u"
            disabled
            title="nebi"
            aria-expanded="false"
            className="o-dropdown dropdown-toggle dropdown"
          >
            <i className="fa fa-building d-lg-none" />
            <span className="oe_topbar_name d-none d-lg-block text-truncate">
              nebi
            </span>
          </button>
        </div>
        <button
          className="o_mobile_menu_toggle o_nav_entry o-no-caret d-md-none border-0 pe-3"
          title="Menüye Geç"
          aria-label="Toggle menu"
        >
          <i className="oi oi-panel-right" />
        </button>
        <div className="o_user_menu d-none d-md-block pe-0">
          <button
            className="py-1 py-lg-0 o-dropdown dropdown-toggle dropdown"
            aria-expanded="false"
          >
            <small
              className="oe_topbar_name d-none ms-2 text-start smaller lh-1 text-truncate"
              style={{ maxWidth: 200 }}
            >
              Fizzy
              <mark className="d-block font-monospace text-truncate">
                <i className="fa fa-database oi-small me-1" />
                nebi1
              </mark>
            </small>
          </button>
        </div>
        <div className="o_user_menu d-none d-md-block pe-0">
          <button
            className="py-1 py-lg-0 o-dropdown dropdown-toggle dropdown"
            aria-expanded="false"
          >
            <img
              className="o_avatar o_user_avatar rounded"
              alt="Kullanıcı"
              src="https://nebi1.odoo.com/web/image/res.partner/3/avatar_128?unique=1726554724000"
            />
            <small className="oe_topbar_name d-none ms-2 text-start smaller lh-1 text-truncate">
              Fizzy
              <mark className="d-block font-monospace text-truncate">
                <i className="fa fa-database oi-small me-1"></i>nebi1
              </mark>
            </small>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
