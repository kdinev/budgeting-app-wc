import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import {
  defineComponents,
  IgcIconButtonComponent,
  IgcIconComponent,
  IgcNavbarComponent,
  IgcNavDrawerComponent,
  IgcRippleComponent,
} from 'igniteui-webcomponents';
import { routes } from './app-routing.js';

defineComponents(
  IgcNavbarComponent,
  IgcIconButtonComponent,
  IgcIconComponent,
  IgcRippleComponent,
  IgcNavDrawerComponent,
);

@customElement('app-root')
export default class App extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .navbar {
      height: max-content;
      min-width: min-content;
    }
    .nav-drawer {
      min-width: min-content;
      min-height: 0;
      flex-shrink: 0;
    }
    .view-container {
      overflow: auto;
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
      flex-basis: 0;
    }
    .nav-drawer::part(main) {
      width: 320px;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .text {
      margin: 0 0 16px;
      height: max-content;
      min-width: min-content;
    }
    .text_1 {
      height: max-content;
      min-width: min-content;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group_1 {
      background-color: hsla(var(--ig-gray-100));
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 32px;
      width: 20%;
      min-width: 50px;
      min-height: 50px;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-navbar class="navbar">
        <h6>Budgeting App</h6>
        <div slot="start">
          <igc-icon-button variant="flat">
            <span class="material-icons">
              menu
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
        </div>
        <div slot="end">
          <igc-icon-button variant="flat">
            <span class="material-icons">
              search
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
          <igc-icon-button variant="flat">
            <span class="material-icons">
              favorite
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
          <igc-icon-button variant="flat">
            <span class="material-icons">
              more_vert
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
        </div>
      </igc-navbar>
      <div class="row-layout group">
        <igc-nav-drawer position="relative" class="nav-drawer">
          <div slot="mini">
            <igc-nav-drawer-item @click="${() => Router.go('/employees')}">
              <span slot="icon">
                <span class="material-icons icon">
                  account_circle
                </span>
                <igc-ripple></igc-ripple>
              </span>
            </igc-nav-drawer-item>
            <igc-nav-drawer-item @click="${() => Router.go('/statistics')}">
              <span slot="icon">
                <span class="material-icons icon">
                  assignment_turned_in
                </span>
                <igc-ripple></igc-ripple>
              </span>
            </igc-nav-drawer-item>
            <igc-nav-drawer-item>
              <span slot="icon">
                <span class="material-icons icon">
                  assessment
                </span>
                <igc-ripple></igc-ripple>
              </span>
            </igc-nav-drawer-item>
          </div>
          <igc-nav-drawer-item>
            <span slot="icon">
              <span class="material-icons icon">
                account_circle
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Title goes here</div>
          </igc-nav-drawer-item>
        </igc-nav-drawer>
        <div class="column-layout group">
          <router-outlet class="view-container"></router-outlet>
        </div>
        <div class="column-layout group_1">
          <p class="typography__subtitle-2 text">
            ADDITIONAL INFORMATION
          </p>
          <p class="typography__body-2 text_1">
            Quick links and other easy access will be provided here. If nothing suitable is found, the panel will be removed.
          </p>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
