import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, FileText, PlusCircle, Layers, CircleDollarSign, Palette, Lock, Hash, ListChecks, Code2, Archive } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import * as Blockly from 'blockly';

interface BlockItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  blockType?: string;
}

const ContractBlocks: React.FC = () => {
  const { toast } = useToast();
  
  const blockItems: BlockItem[] = [
    {
      id: 'erc20',
      title: 'ERC-20 Token',
      description: 'Standard fungible token template',
      icon: <CircleDollarSign size={20} />,
      color: 'bg-blue-100 text-blue-700 border-blue-200',
      blockType: 'erc20_template'
    },
    {
      id: 'erc721',
      title: 'ERC-721 NFT',
      description: 'Non-fungible token template',
      icon: <Palette size={20} />,
      color: 'bg-purple-100 text-purple-700 border-purple-200',
      blockType: 'erc721_template'
    },
    {
      id: 'custom',
      title: 'Custom Contract',
      description: 'Start from scratch',
      icon: <PlusCircle size={20} />,
      color: 'bg-green-100 text-green-700 border-green-200',
      blockType: 'contract'
    },
    {
      id: 'docs',
      title: 'Documentation',
      description: 'Learn more about blocks',
      icon: <BookOpen size={20} />,
      color: 'bg-amber-100 text-amber-700 border-amber-200',
    },
  ];
  
  const componentItems: BlockItem[] = [
    {
      id: 'function',
      title: 'Functions',
      description: 'Define contract functions',
      icon: <Code2 size={20} />,
      color: 'bg-indigo-100 text-indigo-700 border-indigo-200',
      blockType: 'function'
    },
    {
      id: 'modifier',
      title: 'Modifiers',
      description: 'Access control for functions',
      icon: <Lock size={20} />,
      color: 'bg-pink-100 text-pink-700 border-pink-200',
      blockType: 'modifier'
    },
    {
      id: 'event',
      title: 'Events',
      description: 'Event logging for contracts',
      icon: <Hash size={20} />,
      color: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      blockType: 'event'
    },
    {
      id: 'mapping',
      title: 'Mappings',
      description: 'Key-value storage',
      icon: <Archive size={20} />,
      color: 'bg-sky-100 text-sky-700 border-sky-200',
      blockType: 'mapping'
    },
  ];
  
  const handleBlockClick = (blockId: string, blockType?: string) => {
    if (!blockType) {
      toast({
        title: `${blockId} template`,
        description: "This feature is coming soon.",
      });
      return;
    }
    
    const workspaces = Blockly.Workspace.getAll();
    if (workspaces.length === 0) {
      toast({
        variant: "destructive",
        title: "Workspace not found",
        description: "Please make sure the editor is loaded.",
      });
      return;
    }
    
    const workspace = workspaces[0];
    
    try {
      const newBlock = workspace.newBlock(blockType);
      if ('initModel' in newBlock) {
        (newBlock as any).initModel();
      }
      
      // Position the block in the workspace viewport
      if (workspace && 'getCanvas' in workspace) {
        const canvas = (workspace as any).getCanvas();
        if (canvas) {
          const workspaceSize = workspace.getScale ? workspace.getScale() : 1;
          const x = (canvas.clientWidth / 2) / workspaceSize;
          const y = (canvas.clientHeight / 2) / workspaceSize;
          newBlock.moveBy(x, y);
        }
      }
      
      toast({
        title: "Block added",
        description: `Added ${blockId} block to the workspace.`,
      });
    } catch (error) {
      console.error("Error adding block:", error);
      toast({
        variant: "destructive",
        title: "Error adding block",
        description: `Could not add ${blockId} block to the workspace.`,
      });
    }
  };

  const handleDragStart = (e: React.DragEvent<Element>, blockType?: string) => {
    if (!blockType) return;
    e.dataTransfer.setData('blockType', blockType);
    e.dataTransfer.effectAllowed = 'copy';
  };

  return (
    <motion.div
      className="p-4 rounded-lg border border-border bg-card"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <div className="flex items-center mb-4">
        <Code size={18} className="mr-2 text-primary" />
        <h2 className="text-sm font-medium">Quick Start Templates</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-4">
        {blockItems.map((item) => (
          <motion.div
            key={item.id}
            className={`block-card p-3 rounded-lg border ${item.color} cursor-pointer`}
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            onClick={() => handleBlockClick(item.id, item.blockType)}
            draggable={!!item.blockType}
            onDragStart={(e) => handleDragStart(e, item.blockType)}
          >
            <div className="flex items-center mb-2">
              {item.icon}
              <h3 className="ml-2 text-sm font-medium">{item.title}</h3>
            </div>
            <p className="text-xs text-foreground/70">{item.description}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="flex items-center mb-4">
        <ListChecks size={18} className="mr-2 text-primary" />
        <h2 className="text-sm font-medium">Contract Components</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {componentItems.map((item) => (
          <motion.div
            key={item.id}
            className={`block-card p-3 rounded-lg border ${item.color} cursor-pointer`}
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            onClick={() => handleBlockClick(item.id, item.blockType)}
            draggable={!!item.blockType}
            onDragStart={(e) => handleDragStart(e, item.blockType)}
          >
            <div className="flex items-center mb-2">
              {item.icon}
              <h3 className="ml-2 text-sm font-medium">{item.title}</h3>
            </div>
            <p className="text-xs text-foreground/70">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContractBlocks; 