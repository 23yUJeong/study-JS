const div = document.getElementById("div");
const input = document.getElementById("input");
const list = [];

const Plus = () => {
  div.innerHTML = null;

  list.push(input.value);

  for (let i = 0; i < list.length; i++) {
    div.innerHTML += `<div id="cover-ToDo" class="cover-ToDo">
    <div class="ToDo">
      <div
        style="
          width: 38%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <p>${list[i]}</p>
        <button class="X" onclick="Remove(${i})">
          <img src="./img/X.png" />
        </button>
      </div>
    </div>
  </div>`;
  }
};

const Remove = (i) => {
  list.splice(i, 1);
  div.innerHTML = null;

  for (let i = 0; i < list.length; i++) {
    div.innerHTML += `<div id="cover-ToDo" class="cover-ToDo">
    <div class="ToDo">
      <div
        style="
          width: 38%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <p>${list[i]}</p>
        <button class="X" onclick="Remove()">
          <img src="./img/X.png" />
        </button>
      </div>
    </div>
  </div>`;
  }
};
