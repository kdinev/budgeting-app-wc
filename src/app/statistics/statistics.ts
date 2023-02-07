import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IgcCategoryChartModule } from '@infragistics/igniteui-webcomponents-charts';
import { ModuleManager } from '@infragistics/igniteui-webcomponents-core';
import FinancialService from '../service/financial-service.js';

ModuleManager.register(IgcCategoryChartModule);

@customElement('app-statistics')
export default class Statistics extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .category-chart {
      margin: 12px;
      min-width: 400px;
      min-height: 300px;
      flex-grow: 1;
      flex-basis: 0;
    }
  `;

  constructor() {
    super();
    const financialService: FinancialService = new FinancialService();
    this.financialBoxOfficeRevenue = financialService.getData('BoxOfficeRevenue');
  }

  @property()
  private financialBoxOfficeRevenue?: any[];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-category-chart .dataSource="${this.financialBoxOfficeRevenue}" computed-plot-area-margin-mode="series" class="category-chart"></igc-category-chart>
    `;
  }
}
