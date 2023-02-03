import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './employees/employees';
import './statistics/statistics';

export const routes: Route[] = [
  { path: '', component: 'app-employees', name: 'Employees' },
  { path: 'employees', component: 'app-employees', name: 'Employees' },
  { path: 'statistics', component: 'app-statistics', name: 'Statistics' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
