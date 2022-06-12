Object.defineProperty(Array.prototype, "shuffle", {
  value: function () {
    for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this[i], this[j]] = [this[j], this[i]];
    }
  },
});

Object.defineProperty(Document.prototype, "appendComponentToDOM", {
  value: function (component) {
    const wrapper = this.getElementById("card-wrapper");
    wrapper.insertAdjacentHTML("beforeend", component);
  },
});

Object.defineProperty(Document.prototype, "play", {
  value: function () {
    const cardStack = Object.entries(data);
    cardStack.shuffle();
    for (const card of cardStack) {
      let component = new Component(card[1]);
      this.appendComponentToDOM(component.getComponent());
      component.setCorrectTrigger();
    }
  },
});

document.addEventListener("DOMContentLoaded", function () {
  this.play();
});
