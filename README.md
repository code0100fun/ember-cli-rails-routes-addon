# Ember CLI Rails Routes Addon

This is the Ember CLI addon portion of the ember-cli-rails routes layer.

This addon has two jobs:

  * prepend asset URLs with the path Rails needs to find the Ember app
  * set the rootURL of the Ember application based on the Rails mount point

Goals:

  * should not have to configure where Rails has mounted the app
  * should not have to configure relative path to Rails app
  * should be able to run `ember serve` like normal
  * should be able to `ember test` sucessfully
  * should be able to visit `/app/tests` to run tests
