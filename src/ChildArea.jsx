import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

// memo()で(props){}を囲うとpropsが変更されない限り再レンダリングしない　③の対策
// 親がレンダリングされたときに子のコンポーネントを再レンダリングさせないようにするためのにmemoで囲う
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("子コンポーネントです！！");

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子供コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
