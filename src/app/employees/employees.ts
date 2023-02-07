import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcComboComponent, IgcRippleComponent } from 'igniteui-webcomponents';
import '@infragistics/igniteui-webcomponents-grids/grids/combined.js';
import NorthwindService from '../service/northwind-service';

defineComponents(IgcComboComponent, IgcButtonComponent, IgcRippleComponent);

@customElement('app-employees')
export default class Employees extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      padding: 32px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .row-layout {
      display: flex;
    }
    .group_1 {
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .combo {
      width: 280px;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .button {
      margin: 12px;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .button_1 {
      margin: 12px 0;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .tree-grid {
      min-width: 600px;
      flex-grow: 1;
      flex-basis: 0;
    }
  `;

  constructor() {
    super();
    const northwindService: NorthwindService = new NorthwindService();
    this.northwindCategories = northwindService.getData('Categories');
    this.northwindEmployees = northwindService.getData('Employees');
  }

  @property()
  private northwindCategories?: any[];

  @property()
  private northwindEmployees?: any[];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <link rel='stylesheet' href='node_modules/@infragistics/igniteui-webcomponents-grids/grids/themes/dark/material.css'>
      <div class="column-layout group">
        <div class="row-layout group_1">
          <igc-combo ?outlined="${true}" .data="${this.northwindCategories}" value-key="categoryID" display-key="name" ?autoFocusSearch="${true}" class="combo"></igc-combo>
          <div class="row-layout group_2">
            <igc-button variant="outlined" class="button">
              Max SS Income
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-button class="button_1">
              New Hire
              <igc-ripple></igc-ripple>
            </igc-button>
          </div>
        </div>
        <div class="row-layout group_2 ig-scrollbar">
          <igc-tree-grid .data="${this.northwindEmployees}" height="1100px" primary-key="employeeID" foreign-key="managerID" display-density="cosy" allow-filtering="true" filter-mode="excelStyleFilter" class="ig-typography tree-grid">
            <igc-grid-toolbar>
              <igc-grid-toolbar-actions>
                <igc-grid-toolbar-hiding></igc-grid-toolbar-hiding>
              </igc-grid-toolbar-actions>
              <igc-grid-toolbar-title>Org Chart</igc-grid-toolbar-title>
            </igc-grid-toolbar>
            <igc-column field="employeeID" data-type="number" header="employeeID" sortable="true" resizable="true" disable-hiding="true" selectable="false"></igc-column>
            <igc-column field="lastName" data-type="string" header="lastName" sortable="true" resizable="true" selectable="false"></igc-column>
            <igc-column field="firstName" data-type="string" header="firstName" sortable="true" resizable="true" selectable="false"></igc-column>
            <igc-column field="title" data-type="string" header="title" sortable="true" resizable="true" selectable="false"></igc-column>
            <igc-column field="titleOfCourtesy" data-type="string" header="titleOfCourtesy" sortable="true" resizable="true" selectable="false"></igc-column>
            <igc-column field="birthDate" data-type="date" header="birthDate" sortable="true" resizable="true" selectable="false"></igc-column>
            <igc-column field="hireDate" data-type="date" header="hireDate" sortable="true" resizable="true" selectable="false"></igc-column>
            <igc-column field="address.street" data-type="string" header="address street" sortable="true" resizable="true" selectable="false"></igc-column>
            <igc-column field="address.city" data-type="string" header="address city" sortable="true" resizable="true" selectable="false"></igc-column>
            <igc-column field="address.region" data-type="string" header="address region" sortable="true" resizable="true" selectable="false"></igc-column>
            <igc-column field="address.postalCode" data-type="string" header="address postalCode" sortable="true" resizable="true" selectable="false"></igc-column>
            <igc-column field="address.country" data-type="string" header="address country" sortable="true" resizable="true" selectable="false"></igc-column>
            <igc-column field="address.phone" data-type="string" header="address phone" sortable="true" resizable="true" selectable="false"></igc-column>
            <igc-column field="managerID" data-type="number" header="managerID" sortable="true" resizable="true" selectable="false"></igc-column>
            <igc-column field="notes" data-type="string" header="notes" sortable="true" resizable="true" selectable="false"></igc-column>
            <igc-column field="avatarUrl" data-type="string" header="avatarUrl" sortable="true" resizable="true" selectable="false"></igc-column>
          </igc-tree-grid>
        </div>
      </div>
    `;
  }
}
