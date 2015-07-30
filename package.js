Package.describe({
  name: 'tomwasd:flow-router-autoscroll',
  version: '0.0.1',
  summary: 'Fixes page position after changing pages using Flow Router',
  git: 'https://github.com/tomwasd/flow-router-autoscroll',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('kadira:flow-router', {weak: true});
  api.addFiles('client/autoscroll.js', 'client');
});
