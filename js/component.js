class Component {
  constructor(object) {
    this.data = object;
    this.component = `<div class='card'>
                            <h1>${object.title}</h1>
                                <ul id='ul-${object.id}'>
                                    <li class='option'>${object.first}</li>
                                    <li class='option'>${object.second}</li>
                                    <li class='option'>${object.third}</li>
                                    <li class='option'>${object.forth}</li>
                                </ul>
                            </div>`;
    this.check = false;
  }

  getComponentData() {
    return this.data;
  }

  getComponent() {
    return this.component;
  }

  checkAnswere(answere, li) {
    if (answere === this.data.answere) {
      li.style.color = "green";
      if (!this.check) {
        document.getElementById("c-score").innerHTML =
          parseInt(document.getElementById("c-score").innerHTML) + 1;
      }
    }

    if (answere !== this.data.answere) {
      li.style.color = "red";
      if (!this.check) {
        document.getElementById("i-score").innerHTML =
          parseInt(document.getElementById("i-score").innerHTML) + 1;
      }
    }

    this.check = true;
  }

  setCorrectTrigger() {
    const liArray = Array.from(
      document.getElementById(`ul-${this.data.id}`).children
    );

    liArray.forEach((e, i) => {
      e.addEventListener("click", this.checkAnswere.bind(this, i + 1, e));
    });
  }

  appendComponentToDOM() {
    const DOM = document.getElementById("card-wrapper");
    DOM.insertAdjacentHTML("beforeend", this.component);
  }
}
