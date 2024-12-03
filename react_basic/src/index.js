// // var val1 = "var変数"
// // console.log(val1);

// // //var変数は上書き可能
// // var val1 = "var変数を上書き"
// // console.log(val1);

// //letは再宣言不可能
// let val2 = "let変数";
// console.log(val2);

// //const変数は上書き不可
// const val3 = "const変数";
// console.log(val3);

// //constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//     name: "じゃけぇ",
//     age: 31
// };
// val4.name = "jak";
// val4.address = "Hiroshima";
// console.log(val4);

// //constで定義した配列はプロパティの変更が可能
// //reactではほとんどconstを用いる
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

//テンプレートの文字列
const name = "じゃけぇ";
const age = 31;
//私の名前はじゃけぇです。年齢は31歳です。と表示する場合
//従来の方法
//テンプレート文字列を用いた方法

//アロー関数
const func2 = () => {
    return str;
};
console.log(func2("func2です"));

const func3 = (num1, num2) => {
    return num1 + num2;
};
console.log(func3(10, 20));

//分割代入
const myProfile = {
    name: "じゃけぇ",
    age: 31
};

const message1 = '名前は${myProfile.name}です。年齢は${myProfile.age}です。';
console.log(message1);

const { name, age } = myProfile;
const message2 = '名前は${name}です。年齢は${age}歳です。';
console.log(message2);