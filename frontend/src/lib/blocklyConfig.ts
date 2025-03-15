import * as Blockly from 'blockly';

// Initialize custom blocks
export function initializeBlocks() {
  // Contract block
  Blockly.Blocks['contract'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Contract")
          .appendField(new Blockly.FieldTextInput("MyContract"), "NAME");
      this.appendStatementInput("CONTENT")
          .setCheck(null);
      this.setColour('#3B82F6');
      this.setTooltip("Create a new smart contract");
      this.setHelpUrl("");
    }
  };

  // Function block
  Blockly.Blocks['function'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Function")
          .appendField(new Blockly.FieldTextInput("myFunction"), "NAME")
          .appendField("returns")
          .appendField(new Blockly.FieldDropdown([
            ["void", "void"],
            ["uint", "uint"],
            ["string", "string"],
            ["bool", "bool"],
            ["address", "address"]
          ]), "RETURN_TYPE");
      this.appendStatementInput("PARAMS")
          .setCheck(null)
          .appendField("parameters");
      this.appendStatementInput("CONTENT")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#8B5CF6');
      this.setTooltip("Create a new function");
      this.setHelpUrl("");
    }
  };

  // Event block
  Blockly.Blocks['event'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Event")
          .appendField(new Blockly.FieldTextInput("MyEvent"), "NAME");
      this.appendStatementInput("PARAMS")
          .setCheck(null)
          .appendField("parameters");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F59E0B');
      this.setTooltip("Create a new event");
      this.setHelpUrl("");
    }
  };

  // Modifier block
  Blockly.Blocks['modifier'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Modifier")
          .appendField(new Blockly.FieldTextInput("onlyOwner"), "NAME");
      this.appendStatementInput("PARAMS")
          .setCheck(null)
          .appendField("parameters");
      this.appendStatementInput("CONTENT")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#EC4899');
      this.setTooltip("Create a new modifier");
      this.setHelpUrl("");
    }
  };

  // Mapping block
  Blockly.Blocks['mapping'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Mapping")
          .appendField(new Blockly.FieldTextInput("myMapping"), "NAME")
          .appendField("key type")
          .appendField(new Blockly.FieldDropdown([
            ["address", "address"],
            ["uint", "uint"],
            ["string", "string"],
            ["bytes32", "bytes32"]
          ]), "KEY_TYPE")
          .appendField("value type")
          .appendField(new Blockly.FieldDropdown([
            ["uint", "uint"],
            ["bool", "bool"],
            ["address", "address"],
            ["string", "string"]
          ]), "VALUE_TYPE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#10B981');
      this.setTooltip("Create a new mapping");
      this.setHelpUrl("");
    }
  };

  // ERC20 Template block
  Blockly.Blocks['erc20_template'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("ERC20 Token")
          .appendField(new Blockly.FieldTextInput("MyToken"), "NAME")
          .appendField("Symbol")
          .appendField(new Blockly.FieldTextInput("MTK"), "SYMBOL");
      this.appendDummyInput()
          .appendField("Initial Supply")
          .appendField(new Blockly.FieldNumber(1000000), "SUPPLY");
      this.setColour('#3B82F6');
      this.setTooltip("Create an ERC20 token contract");
      this.setHelpUrl("");
    }
  };

  // ERC721 Template block
  Blockly.Blocks['erc721_template'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("ERC721 NFT")
          .appendField(new Blockly.FieldTextInput("MyNFT"), "NAME")
          .appendField("Symbol")
          .appendField(new Blockly.FieldTextInput("MNFT"), "SYMBOL");
      this.appendDummyInput()
          .appendField("Base URI")
          .appendField(new Blockly.FieldTextInput("https://api.mynft.com/token/"), "BASE_URI");
      this.setColour('#8B5CF6');
      this.setTooltip("Create an ERC721 NFT contract");
      this.setHelpUrl("");
    }
  };
}

// Define the toolbox
export const toolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Templates",
      colour: "#3B82F6",
      contents: [
        {
          kind: "block",
          type: "contract"
        },
        {
          kind: "block",
          type: "erc20_template"
        },
        {
          kind: "block",
          type: "erc721_template"
        }
      ]
    },
    {
      kind: "category",
      name: "Functions",
      colour: "#8B5CF6",
      contents: [
        {
          kind: "block",
          type: "function"
        }
      ]
    },
    {
      kind: "category",
      name: "Events",
      colour: "#F59E0B",
      contents: [
        {
          kind: "block",
          type: "event"
        }
      ]
    },
    {
      kind: "category",
      name: "Modifiers",
      colour: "#EC4899",
      contents: [
        {
          kind: "block",
          type: "modifier"
        }
      ]
    },
    {
      kind: "category",
      name: "Storage",
      colour: "#10B981",
      contents: [
        {
          kind: "block",
          type: "mapping"
        }
      ]
    }
  ]
}; 