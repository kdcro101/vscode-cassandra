"use strict";

// tslint:disable-next-line:no-var-requires
const Jasmine = require("jasmine");
const j = new Jasmine();

j.loadConfigFile("spec/support/jasmine.json");
j.configureDefaultReporter({
    showColors: true,
});
j.execute();
