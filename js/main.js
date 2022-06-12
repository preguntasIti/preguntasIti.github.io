Object.defineProperty(Array.prototype, "shuffle", {
  value: function () {
    for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this[i], this[j]] = [this[j], this[i]];
    }
  },
});

Object.defineProperty(Document.prototype, "play", {
  value: function () {
    const stack = Object.entries(data);
    stack.shuffle();
    for (const [key, value] of stack) {
      let component = new Component(value);
      component.appendComponentToDOM();
      component.setCorrectTrigger();
    }
  },
});

document.addEventListener("DOMContentLoaded", function () {
  this.play();
});
