Package.describe({
  name: 'tomwasd:flow-router-autoscroll',
  version: '0.0.2',
  summary: 'Fixes page position after changing pages using Flow Router',
  git: 'https://github.com/tomwasd/flow-router-autoscroll',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('kadira:flow-router@2.0.0');
  api.addFiles('client/autoscroll.js', 'client');
  api.export('FlowRouterAutoscroll', 'client');
});
