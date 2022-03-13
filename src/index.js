import "./styles.css";

const onclikadd = () => {
  const input_text = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div
  const div = document.createElement("div");
  div.className = "list-row";

  //li
  const li = document.createElement("li");
  li.innerText = input_text;

  const combutonn = document.createElement("button");
  combutonn.innerText = "完了";
  combutonn.addEventListener("click", () => {
    const addtarget = combutonn.parentNode;
    const text = addtarget.firstElementChild.innerHTML;

    del_list(delbutonn.parentNode);
  });

  const delbutonn = document.createElement("button");
  delbutonn.innerText = "削除";
  delbutonn.addEventListener("click", () => {
    del_list(delbutonn.parentNode);
  });

  div.appendChild(li);
  div.appendChild(combutonn);
  div.appendChild(delbutonn);

  document.getElementById("imcomplete-list").appendChild(div);
};

const del_list = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onclikadd());

/**
 * react覚えるべきこと
 * ①JSX
 * ②props
 * ③useState
 * ④useEffect
 */

/**
 * HTMLのメモ
 * id属性とclass属性の違い
 * class属性は主にcssのクラスを適用するために使用します。
 * classに設定した文字列は同じhtml内で何回も指定することが可能。
 * しかしidの場合は同じhtml内に複数同じ値を設定することができません。
 */
