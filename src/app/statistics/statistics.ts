import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineComponents, IgcComboComponent } from 'igniteui-webcomponents';
import NorthwindService from '../service/northwind-service';

defineComponents(IgcComboComponent);

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
    .combo {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
  `;

  constructor() {
    super();
    const northwindService: NorthwindService = new NorthwindService();
    this.northwindCategories = northwindService.getData('Categories');
  }

  @property()
  private northwindCategories?: any[];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-combo ?outlined="${true}" .data="${this.northwindCategories}" value-key="categoryID" display-key="categoryID" ?autoFocusSearch="${true}" class="combo"></igc-combo>
    `;
  }
}
