'use strict';

/**
 * testtype service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testtype.testtype');
