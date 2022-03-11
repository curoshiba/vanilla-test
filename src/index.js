import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

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
