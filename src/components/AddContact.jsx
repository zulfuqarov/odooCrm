import React, { useContext, useState } from "react";
import { ContextCrm } from "../context/Context";

const AddContact = ({ categoryName }) => {
  const { addNewContact } = useContext(ContextCrm);

  const [inputAddContact, setinputAddContact] = useState({
    category: categoryName,
  });

  const handleChangeInput = (e) => {
    setinputAddContact({
      ...inputAddContact,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="o_kanban_quick_create o_field_highlight shadow">
      <div className="o_form_renderer o_form_nosheet o_form_view o_xxs_form_view o_kanban_quick_create_form p-0 o_form_editable d-block">
        <div className="o_inner_group grid">
          <div className="o_wrap_field d-flex d-sm-contents flex-column mb-3 mb-sm-0">
            <div className="o_cell o_wrap_label flex-grow-1 flex-sm-grow-0 w-100 text-break text-900">
              <label className="o_form_label" htmlFor="partner_id_0">
                Organization / Contact
                <sup
                  className="text-info p-1"
                  data-tooltip-template="web.FieldTooltip"
                  data-tooltip-info='{"field":{"help":"Linked partner (optional). Usually created when converting the lead. You can find a partner by its Name, TIN, Email or Internal Reference."}}'
                  data-tooltip-touch-tap-to-show="true"
                >
                  ?
                </sup>
              </label>
            </div>
            <div
              className="o_cell o_wrap_input flex-grow-1 flex-sm-grow-0 text-break"
              style={{ width: "100%" }}
            >
              <div
                name="partner_id"
                className="o_field_widget o_field_res_partner_many2one o_field_highlight"
              >
                <div className="o_field_many2one_selection">
                  <div className="o_input_dropdown">
                    <div className="o-autocomplete dropdown flex">
                      <input
                        value={inputAddContact.Organization || ""}
                        onChange={handleChangeInput}
                        name="Organization"
                        type="text"
                        className="o-autocomplete--input o_input"
                        autoComplete="off"
                        role="combobox"
                        aria-autocomplete="list"
                        aria-haspopup="listbox"
                        id="partner_id_0"
                        placeholder=""
                        aria-expanded="false"
                      />
                      <button>
                        {" "}
                        <i className="fa-solid fa-angle-down text-[12px] text-green-400"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="o_field_many2one_extra" />
              </div>
            </div>
          </div>
          <div className="o_wrap_field d-flex d-sm-contents flex-column mb-3 mb-sm-0">
            <div className="o_cell o_wrap_label flex-grow-1 flex-sm-grow-0 w-100 text-break text-900">
              <label className="o_form_label" htmlFor="name_0">
                Opportunity
              </label>
            </div>
            <div
              className="o_cell o_wrap_input flex-grow-1 flex-sm-grow-0 text-break"
              style={{ width: "100%" }}
            >
              <div
                name="name"
                className="o_field_widget o_required_modifier o_field_char"
              >
                <input
                  value={inputAddContact.contact || ""}
                  onChange={handleChangeInput}
                  name="contact"
                  className="o_input"
                  id="name_0"
                  type="text"
                  autoComplete="off"
                  placeholder="e.g. Product Pricing"
                />
              </div>
            </div>
          </div>
          <div className="o_wrap_field d-flex d-sm-contents flex-column mb-3 mb-sm-0">
            <div className="o_cell o_wrap_label flex-grow-1 flex-sm-grow-0 w-100 text-break text-900">
              <label className="o_form_label" htmlFor="email_from_0">
                Email
              </label>
            </div>
            <div
              className="o_cell o_wrap_input flex-grow-1 flex-sm-grow-0 text-break"
              style={{ width: "100%" }}
            >
              <div name="email_from" className="o_field_widget o_field_char">
                <input
                  value={inputAddContact.email || ""}
                  onChange={handleChangeInput}
                  name="email"
                  className="o_input"
                  id="email_from_0"
                  type="text"
                  autoComplete="off"
                  placeholder='e.g. "email@address.com"'
                />
              </div>
            </div>
          </div>
          <div className="o_wrap_field d-flex d-sm-contents flex-column mb-3 mb-sm-0">
            <div className="o_cell o_wrap_label flex-grow-1 flex-sm-grow-0 w-100 text-break text-900">
              <label className="o_form_label" htmlFor="phone_0">
                Phone
              </label>
            </div>
            <div
              className="o_cell o_wrap_input flex-grow-1 flex-sm-grow-0 text-break"
              style={{ width: "100%" }}
            >
              <div name="phone" className="o_field_widget o_field_char">
                <input
                  value={inputAddContact.phone || ""}
                  onChange={handleChangeInput}
                  name="phone"
                  className="o_input"
                  id="phone_0"
                  type="text"
                  autoComplete="off"
                  placeholder='e.g. "0123456789"'
                />
              </div>
            </div>
          </div>
          <div className="o_wrap_field d-flex d-sm-contents flex-column mb-3 mb-sm-0">
            <div
              className="o_cell flex-grow-1 flex-sm-grow-0 o_wrap_label w-100 text-break text-900"
              style={{}}
            >
              <label className="o_form_label" htmlFor="expected_revenue_0">
                Expected Revenue
              </label>
            </div>
            <div
              className="o_cell flex-grow-1 flex-sm-grow-0"
              style={{ width: "100%" }}
            >
              <div>
                <div className="o_row">
                  <div
                    name="expected_revenue"
                    className="o_field_widget o_field_monetary oe_inline me-5 o_field_highlight"
                  >
                    <div className="text-nowrap d-inline-flex w-100 align-items-baseline position-relative">
                      <span className="o_input position-absolute pe-none d-flex w-100">
                        <span className="opacity-0 d-inline-block overflow-hidden mw-100 o_monetary_ghost_value">
                          0.00
                        </span>
                      </span>
                      <input
                        value={inputAddContact.price || ""}
                        onChange={handleChangeInput}
                        name="price"
                        className="o_input flex-grow-1 flex-shrink-1"
                        autoComplete="off"
                        id="expected_revenue_0"
                        type="text"
                        placeholder="price"
                      />
                      <span className="opacity-0">&nbsp;m</span>
                    </div>
                  </div>
                  <div
                    name="priority"
                    className="o_field_widget o_field_priority oe_inline"
                  >
                    <div
                      className="o_priority"
                      role="radiogroup"
                      name="priority"
                      aria-label="Priority"
                    >
                      <a
                        href="#"
                        className="o_priority_star fa fa-star-o"
                        role="radio"
                        tabIndex={-1}
                        data-tooltip="Priority: Medium"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-end gap-1">
        <button
          onClick={() => addNewContact(inputAddContact)}
          className="btn btn-primary o_kanban_add me-1"
        >
          {" "}
          Add{" "}
        </button>
        <button className="btn btn-secondary o_kanban_edit me-1"> Edit </button>
        <span className="flex-grow-1" />
        <button className="btn btn-secondary o_kanban_cancel">
          <i className="fa fa-trash" />
        </button>
      </div>
    </div>
  );
};

export default AddContact;
