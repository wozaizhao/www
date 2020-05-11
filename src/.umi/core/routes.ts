import { ApplyPluginsType } from '/Data/Wozaizhao/website/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/index.html",
    "exact": true,
    "component": require('@/pages/index.js').default
  },
  {
    "path": "/",
    "exact": true,
    "component": require('@/pages/index.js').default
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
