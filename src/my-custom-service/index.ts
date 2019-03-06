import { strings } from '@angular-devkit/core';
import { apply, mergeWith, move, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';

export function myCustomService(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    if (!_options.name) {
      throw new Error('Name does not exist');
    }
    _options.path = `./${_options.path || ''}`;

    const sourceTree = url('./files');
    const sourceParamTemplate = apply(sourceTree, [
      template({
        ..._options,
        ...strings
      }),
      move('./', _options.path)
    ]);
    return mergeWith(sourceParamTemplate)(tree, _context) as Tree;
  };
}
