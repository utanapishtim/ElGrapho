const fitToViewport = require('./utils/fitToViewport');
const buildTreeLevels = require('./utils/buildTreeLevels');

const Tree = function(model) {
  let treeLevels = buildTreeLevels(model);
  let numLevels = treeLevels.length;

  // O(n)
  treeLevels.forEach(function(nodes, level) {
    nodes.forEach(function(node) {
      let n = node.index;
      model.nodes[n].x = node.pos;
      model.nodes[n].y = 1 - (2 * (level / (numLevels - 1)));
    });
  });

  fitToViewport(model.nodes);

  return model;
};

module.exports = Tree;