import Blockly from 'blockly';

export function generateMoveCode(workspace: any): string {
  let code = '';
  const blocks = workspace.getTopBlocks(true);

  blocks.forEach((block: any) => {
    switch (block.type) {
      case 'move_module':
        code += generateModuleCode(block);
        break;
      case 'move_struct':
        code += generateStructCode(block);
        break;
      case 'move_function':
        code += generateFunctionCode(block);
        break;
      case 'move_resource':
        code += generateResourceCode(block);
        break;
    }
  });

  return code || '// Start by dragging blocks from the toolbox';
}

function generateModuleCode(block: any): string {
  const moduleName = block.getFieldValue('MODULE_NAME');
  const content = Blockly.JavaScript.statementToCode(block, 'CONTENT');
  
  return `module ${moduleName} {
    ${content}
}\n`;
}

function generateStructCode(block: any): string {
  const structName = block.getFieldValue('STRUCT_NAME');
  const fields = Blockly.JavaScript.statementToCode(block, 'FIELDS');
  
  return `struct ${structName} {
    ${fields}
}\n`;
}

function generateFunctionCode(block: any): string {
  const functionName = block.getFieldValue('FUNCTION_NAME');
  const parameters = Blockly.JavaScript.statementToCode(block, 'PARAMETERS');
  const body = Blockly.JavaScript.statementToCode(block, 'BODY');
  
  return `public fun ${functionName}(${parameters}) {
    ${body}
}\n`;
}

function generateResourceCode(block: any): string {
  const resourceName = block.getFieldValue('RESOURCE_NAME');
  const fields = Blockly.JavaScript.statementToCode(block, 'FIELDS');
  
  return `resource struct ${resourceName} {
    ${fields}
}\n`;
} 