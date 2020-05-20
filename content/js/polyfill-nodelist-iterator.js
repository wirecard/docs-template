if (NodeList.prototype[Symbol.iterator] === undefined) {
  NodeList.prototype[Symbol.iterator] = function () {
      var i = 0;
      return {
          next: () => {
              return { done: i >= this.length, value: this.item(i++) };
          }
      }
  };
}
