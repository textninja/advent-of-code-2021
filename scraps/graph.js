Bar = (() => {
  function foo() {
    return 42;
  }

  return class Bar {
    static foo = foo();
    bar = foo();

    asdf() {
      return self;
    }
  };
})();

new Bar().asdf();

class Graph {
  #_nodes = {};
  #_edgesft = {};
  #_edgestf = {};

  node(idOrNode) {
    if (typeof idOrNode == "string") {
      return this.#_nodes[idOrNode];
    } else {
      return this.#_nodes[idOrNode.id];
    }
  }

  nodes() {
    return Object.values(this.#_nodes);
  }

  addNode(node) {
    if (typeof node === "string") {
      if (!(node in this.#_nodes)) this.#_nodes[node.id] = node;
    }

    if (!"id" in node) throw new ArgumentError("Nodes must have an id");

    if (this.#_nodes[node.id]) {
      return this.nodes[node.id];
    } else {
      return (this.#_nodes[node.id] = node);
    }
  }

  removeNode(idOrObj) {
    if (typeof idOrObj === "string") {
      delete this.#_nodes[node];
    } else {
      delete this.#_nodes[node.id];
    }

    return this;
  }

  addEdge(from, to) {}
}

let g = new Graph();
g.addNode("foo");
g.addNode("bar");

g.node("foo"); //?
