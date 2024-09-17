import React, { useState } from "react";

const FilteringSearch = () => {
  const [createData, setcreateData] = useState(false);
  const handleToggleShowData = () => {
    setcreateData(!createData);
  };

  const [waitingClose, setwaitingClose] = useState(false);
  const handleToogleShowwaitingClose = () => {
    setwaitingClose(!waitingClose);
  };

  const [closeData, setcloseData] = useState(false);
  const handleToogleShowcloseData = () => {
    setcloseData(!closeData);
  };

  const [property, setproperty] = useState(false);
  const handleToogleShowproperty = () => {
    setproperty(!property);
  };

  return (
    <div
      className="o_popover popover   mw-100 o-dropdown--menu dropdown-menu mx-0 o_search_bar_menu d-flex flex-wrap flex-lg-nowrap w-100 w-md-auto mx-md-auto mt-2 py-3"
      role="menu"
      style={{ position: "fixed", top: 87, left: "308.312px" }}
    >
      <div className="o_dropdown_container o_filter_menu w-100 w-lg-auto h-100 px-3 mb-4 mb-lg-0 border-end">
        <div className="px-3 fs-5 mb-2">
          <i className="me-2 text-primary fa fa-filter" />
          <h5 className="o_dropdown_title d-inline">Filtreler</h5>
        </div>
        <span
          className="o-dropdown-item dropdown-item o-navigable o_menu_item text-truncate"
          role="menuitemcheckbox"
          tabIndex={0}
          title=""
          aria-checked="false"
        >
          Fırsat Havuzum
        </span>
        <span
          className="o-dropdown-item dropdown-item o-navigable o_menu_item text-truncate"
          role="menuitemcheckbox"
          tabIndex={0}
          title=""
          aria-checked="false"
        >
          Atanmamış
        </span>
        <span
          className="o-dropdown-item dropdown-item o-navigable o_menu_item text-truncate"
          role="menuitemcheckbox"
          tabIndex={0}
          title=""
          aria-checked="false"
        >
          Açık Fırsatlar
        </span>
        <div className="dropdown-divider" role="separator" />
        <div className="o_accordion position-relative">
          <button
            className="o_menu_item o_accordion_toggle dropdown-item o-navigable text-truncate"
            tabIndex={0}
            aria-expanded="false"
          >
            Oluşturulma Tarihi
          </button>
        </div>
        <div className="o_accordion position-relative">
          <button
            className="o_menu_item o_accordion_toggle dropdown-item o-navigable text-truncate"
            tabIndex={0}
            aria-expanded="false"
          >
            Kapatma Tarihi
          </button>
        </div>
        <div className="dropdown-divider" role="separator" />
        <span
          className="o-dropdown-item dropdown-item o-navigable o_menu_item text-truncate"
          role="menuitemcheckbox"
          tabIndex={0}
          title=""
          aria-checked="false"
        >
          Kazanıldı
        </span>
        <span
          className="o-dropdown-item dropdown-item o-navigable o_menu_item text-truncate"
          role="menuitemcheckbox"
          tabIndex={0}
          title=""
          aria-checked="false"
        >
          Devam eden
        </span>
        <span
          className="o-dropdown-item dropdown-item o-navigable o_menu_item text-truncate"
          role="menuitemcheckbox"
          tabIndex={0}
          title=""
          aria-checked="false"
        >
          Kayıp
        </span>
        <div role="separator" className="dropdown-divider" />
        <span
          className="o-dropdown-item dropdown-item o-navigable o_menu_item o_add_custom_filter"
          role="menuitem"
          tabIndex={0}
        >
          Özel Filtre Ekle
        </span>
      </div>
      <div className="o_dropdown_container o_group_by_menu w-100 w-lg-auto h-100 px-3 mb-4 mb-lg-0 border-end">
        <div className="px-3 fs-5 mb-2">
          <i className="me-2 text-action oi oi-group" />
          <h5 className="o_dropdown_title d-inline">Grupla</h5>
        </div>
        <span
          className="o-dropdown-item dropdown-item o-navigable o_menu_item text-truncate"
          role="menuitemcheckbox"
          tabIndex={0}
          title="Satış Temsilcisi"
          aria-checked="false"
        >
          Satış Temsilcisi
        </span>
        <span
          className="o-dropdown-item dropdown-item o-navigable o_menu_item text-truncate"
          role="menuitemcheckbox"
          tabIndex={0}
          title=""
          aria-checked="false"
        >
          Satış Ekibi
        </span>
        <span
          className="o-dropdown-item dropdown-item o-navigable o_menu_item text-truncate"
          role="menuitemcheckbox"
          tabIndex={0}
          title=""
          aria-checked="false"
        >
          Aşama
        </span>
        <span
          className="o-dropdown-item dropdown-item o-navigable o_menu_item text-truncate"
          role="menuitemcheckbox"
          tabIndex={0}
          title=""
          aria-checked="false"
        >
          Semt/İlçe
        </span>
        <span
          className="o-dropdown-item dropdown-item o-navigable o_menu_item text-truncate"
          role="menuitemcheckbox"
          tabIndex={0}
          title=""
          aria-checked="false"
        >
          Ülke
        </span>
        <span
          className="o-dropdown-item dropdown-item o-navigable o_menu_item text-truncate"
          role="menuitemcheckbox"
          tabIndex={0}
          title=""
          aria-checked="false"
        >
          Kayıp Nedeni
        </span>
        <span
          className="o-dropdown-item dropdown-item o-navigable o_menu_item text-truncate"
          role="menuitemcheckbox"
          tabIndex={0}
          title=""
          aria-checked="false"
        >
          Kampanya
        </span>
        <span
          className="o-dropdown-item dropdown-item o-navigable o_menu_item text-truncate"
          role="menuitemcheckbox"
          tabIndex={0}
          title=""
          aria-checked="false"
        >
          Aracı:
        </span>
        <span
          className="o-dropdown-item dropdown-item o-navigable o_menu_item text-truncate"
          role="menuitemcheckbox"
          tabIndex={0}
          title=""
          aria-checked="false"
        >
          Kaynak
        </span>
        <div className="dropdown-divider" role="separator" />

        <div className="o_accordion position-relative">
          <button
            onClick={handleToggleShowData}
            className="o_menu_item o_accordion_toggle dropdown-item o-navigable text-truncate"
            tabIndex={0}
            aria-expanded="false"
          >
            Oluşturulma Tarihi
          </button>
          {createData ? (
            <div className="o_accordion_values ms-4 border-start">
              <span
                className="o-dropdown-item dropdown-item o-navigable o_item_option focus"
                role="menuitemcheckbox"
                tabIndex={0}
                title=""
                aria-checked="false"
              >
                Yıl
              </span>
              <span
                className="o-dropdown-item dropdown-item o-navigable o_item_option"
                role="menuitemcheckbox"
                tabIndex={0}
                title=""
                aria-checked="false"
              >
                Çeyrek
              </span>
              <span
                className="o-dropdown-item dropdown-item o-navigable o_item_option"
                role="menuitemcheckbox"
                tabIndex={0}
                title=""
                aria-checked="false"
              >
                Ay
              </span>
              <span
                className="o-dropdown-item dropdown-item o-navigable o_item_option"
                role="menuitemcheckbox"
                tabIndex={0}
                title=""
                aria-checked="false"
              >
                Hafta
              </span>
              <span
                className="o-dropdown-item dropdown-item o-navigable o_item_option"
                role="menuitemcheckbox"
                tabIndex={0}
                title=""
                aria-checked="false"
              >
                Gün
              </span>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="o_accordion position-relative">
          <button
            onClick={handleToogleShowwaitingClose}
            className="o_menu_item o_accordion_toggle dropdown-item o-navigable text-truncate"
            tabIndex={0}
            aria-expanded="false"
          >
            Beklenen Kapanış
          </button>

          {waitingClose ? (
            <div className="o_accordion_values ms-4 border-start">
              <span
                className="o-dropdown-item dropdown-item o-navigable o_item_option"
                role="menuitemcheckbox"
                tabIndex={0}
                title=""
                aria-checked="false"
              >
                Yıl
              </span>
              <span
                className="o-dropdown-item dropdown-item o-navigable o_item_option"
                role="menuitemcheckbox"
                tabIndex={0}
                title=""
                aria-checked="false"
              >
                Çeyrek
              </span>
              <span
                className="o-dropdown-item dropdown-item o-navigable o_item_option"
                role="menuitemcheckbox"
                tabIndex={0}
                title=""
                aria-checked="false"
              >
                Ay
              </span>
              <span
                className="o-dropdown-item dropdown-item o-navigable o_item_option"
                role="menuitemcheckbox"
                tabIndex={0}
                title=""
                aria-checked="false"
              >
                Hafta
              </span>
              <span
                className="o-dropdown-item dropdown-item o-navigable o_item_option"
                role="menuitemcheckbox"
                tabIndex={0}
                title=""
                aria-checked="false"
              >
                Gün
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="o_accordion position-relative">
          <button
            onClick={handleToogleShowcloseData}
            className="o_menu_item o_accordion_toggle dropdown-item o-navigable text-truncate"
            tabIndex={0}
            aria-expanded="false"
          >
            Kapatma Tarihi
          </button>

          {closeData ? (
            <div className="o_accordion_values ms-4 border-start">
              <span
                className="o-dropdown-item dropdown-item o-navigable o_item_option focus"
                role="menuitemcheckbox"
                tabIndex={0}
                title=""
                aria-checked="false"
              >
                Yıl
              </span>
              <span
                className="o-dropdown-item dropdown-item o-navigable o_item_option"
                role="menuitemcheckbox"
                tabIndex={0}
                title=""
                aria-checked="false"
              >
                Çeyrek
              </span>
              <span
                className="o-dropdown-item dropdown-item o-navigable o_item_option"
                role="menuitemcheckbox"
                tabIndex={0}
                title=""
                aria-checked="false"
              >
                Ay
              </span>
              <span
                className="o-dropdown-item dropdown-item o-navigable o_item_option"
                role="menuitemcheckbox"
                tabIndex={0}
                title=""
                aria-checked="false"
              >
                Hafta
              </span>
              <span
                className="o-dropdown-item dropdown-item o-navigable o_item_option"
                role="menuitemcheckbox"
                tabIndex={0}
                title=""
                aria-checked="false"
              >
                Gün
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="dropdown-divider" role="separator" />
        <div className="o_accordion position-relative">
          <button
            onClick={handleToogleShowproperty}
            className="o_menu_item o_accordion_toggle dropdown-item o-navigable o_add_custom_group_menu text-truncate"
            tabIndex={0}
            aria-expanded="false"
          >
            Özellikler
          </button>

          {property ? (
            <div className="o_accordion_values ms-4 border-start">
              <span
                className="o-dropdown-item dropdown-item o-navigable fst-italic focus"
                role="menuitem"
                tabIndex={0}
              >
                No Properties
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div role="separator" className="dropdown-divider" />
        <select className="o_add_custom_group_menu o_menu_item dropdown-item">
          <option value="" disabled="true" selected="true" hidden="true">
            Özel Grup Ekle
          </option>
          <option value="lead_mining_request_id">
            Aday Madenciliği Talebi
          </option>
          <option value="street2">Adres2</option>
          <option value="activity_state">Aktivite Durumu</option>
          <option value="medium_id">Aracı:</option>
          <option value="date_open">Atama Tarihi</option>
          <option value="stage_id">Aşama</option>
          <option value="title">Başlık</option>
          <option value="date_deadline">Beklenen Kapanış</option>
          <option value="lang_id">Dil</option>
          <option value="date_conversion">Dönüştürme Tarihi</option>
          <option value="email_from">E-Posta</option>
          <option value="email_state">E-Posta Kalitesi</option>
          <option value="email_domain_criterion">
            E-posta Etki Alanı Kriteri
          </option>
          <option value="email_cc">E-posta cc</option>
          <option value="tag_ids">Etiketler</option>
          <option value="active">Etkin</option>
          <option value="name">Fırsat</option>
          <option value="campaign_id">Kampanya</option>
          <option value="date_closed">Kapatma Tarihi</option>
          <option value="source_id">Kaynak</option>
          <option value="lost_reason_id">Kayıp Nedeni</option>
          <option value="won_status">Kazanıldı</option>
          <option value="contact_name">Kontak Adı</option>
          <option value="mobile">Mobil</option>
          <option value="partner_id">Müşteri</option>
          <option value="email_normalized">Normalleştirilmiş E-Posta</option>
          <option value="create_date">Oluşturulma Tarihi</option>
          <option value="zip">PK</option>
          <option value="color">Renk</option>
          <option value="reveal_id">Reveal ID</option>
          <option value="team_id">Satış Ekibi</option>
          <option value="user_id">Satış Temsilcisi</option>
          <option value="city">Semt/İlçe</option>
          <option value="street">Sokak/Cadde</option>
          <option value="date_last_stage_update">Son Aşama Güncelleme</option>
          <option value="write_date">Son Güncelleme Tarihi</option>
          <option value="date_automation_last">Son İşlem</option>
          <option value="create_uid">Tarafından Oluşturulan</option>
          <option value="write_uid">Tarafından Son Güncellendi</option>
          <option value="phone">Telefon</option>
          <option value="phone_state">Telefon Kalitesi</option>
          <option value="phone_sanitized">Temizlenmiş Numara</option>
          <option value="type">Tür</option>
          <option value="website">Websitesi</option>
          <option value="lang_code">Yerel Kodu</option>
          <option value="recurring_plan">Yinelenen Plan</option>
          <option value="referred">Yönlendiren</option>
          <option value="iap_enrich_done">Zenginleştirme yapıldı</option>
          <option value="priority">Öncelik</option>
          <option value="country_id">Ülke</option>
          <option value="state_id">İl/Eyalet</option>
          <option value="message_bounce">İletilmeyen E-Posta</option>
          <option value="function">İş Pozisyonu</option>
          <option value="company_id">Şirket</option>
          <option value="partner_name">Şirket Adı</option>
        </select>
      </div>
      <div className="o_dropdown_container o_favorite_menu w-100 w-lg-auto h-100 px-3">
        <div className="px-3 fs-5 mb-2">
          <i className="me-2 text-favourite fa fa-star" />
          <h5 className="o_dropdown_title d-inline">Yıldızlı</h5>
        </div>
        <div className="o_accordion position-relative">
          <button
            className="o_menu_item o_accordion_toggle dropdown-item o-navigable o_add_favorite text-truncate focus"
            tabIndex={0}
            aria-expanded="false"
          >
            Şimdiki Filtreyi Kaydet
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilteringSearch;
