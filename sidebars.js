module.exports = {
  mySidebar: [
    // Normal syntax:

    // Shorthand syntax:
    'intro', // document ID
    'getting-started/getting_started', // document ID
        {
          type: 'category',
          label: 'Configuring',
          items: ['configuring/backups', 'configuring/docker-compose', 'configuring/billing'],
        },
        {
          type: 'category',
          label: 'Using',
          items: ['using/cli_app', 'using/api_app', 'using/backups_cli'],
        },
    'uninstall/README', // document ID
  ],
};
