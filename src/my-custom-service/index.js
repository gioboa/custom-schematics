"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
function myCustomService(_options) {
    return (tree, _context) => {
        if (!_options.name) {
            throw new Error('Name does not exist');
        }
        _options.path = `./${_options.path || ''}`;
        const sourceTree = schematics_1.url('./files');
        const sourceParamTemplate = schematics_1.apply(sourceTree, [
            schematics_1.template(Object.assign({}, _options, core_1.strings)),
            schematics_1.move('./', _options.path)
        ]);
        return schematics_1.mergeWith(sourceParamTemplate)(tree, _context);
    };
}
exports.myCustomService = myCustomService;
//# sourceMappingURL=index.js.map