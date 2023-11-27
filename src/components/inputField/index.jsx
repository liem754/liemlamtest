import { memo } from "react";
import stytes from "./inputField.module.scss";
function InputField({ type, IcAfter, text }) {
  return (
    <div className={stytes.container}>
      <input type={type} placeholder={text} />
      <div className={stytes.icon}>{IcAfter && <IcAfter />}</div>
    </div>
  );
}

export default memo(InputField);
