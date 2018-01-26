import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  chain,
  mergeWith,
  template,
  url,
  move
} from '@angular-devkit/schematics';
import { classify } from '@angular-devkit/core';

export default function(options: any): Rule {
  return chain([
    (_tree: Tree, _context: SchematicContext) => {
      if (!options.name) {
        throw new Error('Name does not exist');
      }
      options.path = './' + (options.path || '');
      // _context.logger.info('My Custom Generator: ' + JSON.stringify(options));
    },
    mergeWith(
      apply(url('./files/services'), [
        template({
          INDEX: options.index,
          name: options.name,
          classifyName: classify(options.name)
        }),
        move('./', options.path)
      ])
    )
  ]);
}
