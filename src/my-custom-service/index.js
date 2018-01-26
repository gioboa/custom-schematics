"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
function default_1(options) {
    return schematics_1.chain([
        (_tree, _context) => {
            if (!options.name) {
                throw new Error('Name does not exist');
            }
            options.path = './' + (options.path || '');
            // _context.logger.info('My Custom Generator: ' + JSON.stringify(options));
        },
        schematics_1.mergeWith(schematics_1.apply(schematics_1.url('./files/services'), [
            schematics_1.template({
                INDEX: options.index,
                name: options.name,
                classifyName: core_1.classify(options.name)
            }),
            schematics_1.move('./', options.path)
        ]))
    ]);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map