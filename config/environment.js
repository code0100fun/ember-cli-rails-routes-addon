'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    'ember-cli-rails-routes': {
      prepend: process.env.RAILS_PREPEND
    }
  };
};
