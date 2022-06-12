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
                                    <li class='option'><p>${this.first}</p></li>
                                    <li class='option'><p>${this.second}</p></li>
                                    <li class='option'><p>${this.third}</p></li>
                                    <li class='option'><p>${this.fourth}</p></li>
                                </ul>
                            </div>`;
  }

  #checkAnswere(answer, li) {
    if (answer === this.answer) {
      li.style.textDecoration = "underline";
      li.style.backgroundColor = "#3dfc89";
      if (!this.check) {
        document.getElementById("c-score").innerHTML =
          parseInt(document.getElementById("c-score").innerHTML) + 1;
      }
    }

    if (answer !== this.answer) {
      li.style.textDecoration = "line-through";
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
