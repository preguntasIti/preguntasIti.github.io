class Component {
  constructor(object) {
    this.check = false;
    this.title = object.title;
    this.id = object.id;
    this.first = object.first;
    this.second = object.second;
    this.third = object.third;
    this.fourth = object.fourth;
    this.answer = object.answer;
  }

  getComponentData() {
    return this.data;
  }

  getComponent() {
    return `<div class='card'>
                            <h1>${this.title}</h1>
                                <ul id='ul-${this.id}'>
                                    <li class='option'>${this.first}</li>
                                    <li class='option'>${this.second}</li>
                                    <li class='option'>${this.third}</li>
                                    <li class='option'>${this.fourth}</li>
                                </ul>
                            </div>`;
  }

  #checkAnswere(answer, li) {
    if (answer === this.answer) {
      li.style.color = "green";
      if (!this.check) {
        document.getElementById("c-score").innerHTML =
          parseInt(document.getElementById("c-score").innerHTML) + 1;
      }
    }

    if (answer !== this.answer) {
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
      document.getElementById(`ul-${this.id}`).children
    );

    liArray.forEach((e, i) => {
      e.addEventListener("click", this.#checkAnswere.bind(this, i + 1, e));
    });
  }
}
