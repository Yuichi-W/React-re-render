import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

// 再レンダリングされる条件
// ①stateが更新されたとコンポーネント
// ②propsが変更されたコンポーネント
// ③再レンダリングされたコンポーネントは以下の子要素
export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  console.log("11111");

  const onChangeText = (e) => setText(e.target.value);

  // ②propsが変更
  const onClickOpen = () => setOpen(!open);

  // アロー関数で記載すると毎回関数を生成しているとみなされmemoで囲っても再レンダリングする
  // 渡しているpropsが変わっている判定されるため
  // これを防ぐにはuseCallbakでアロー関数()=>を囲う必要がある→第２引数に見張る値を記載できる
  // 最初に生成されたものを使用する場合は第２引数は空配列でいい今回も空でよいがわかりやすく記載
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  // 変数自体のメモ化
  // 変数に使用するロジックが複雑なときとかに使用するイメージ（再レンダリングのたびに計算等しなくて済む）
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      {/* ③再レンダリングされたコンポーネントは以下の子要素 */}
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
