import { para } from "./Paragraph.jsx";
export default function Result({ ref }) {
  console.log(ref.current.value);
  let accuracy;
  let score;
  let error = 0;
  const realData = ref.current.value;
  console.log(typeof realData);
  console.log(realData);
  let p =
    "He couldn't move. His head throbbed and spun. He couldn't decide if it was the flu or the drinking last night. It was probably a combination of both.";
  console.log(p.length);
  console.log(para.length);
  for (let i = 0; i < para.length; i++) {
    if (i <= realData.length && para.charAt(i) !== realData.charAt(i)) {
      error++;
      console.log(i);
      console.log(realData.charAt(i));
      console.log(para.charAt(i));
    }
  }
  console.log(error);
  const wpm = (realData.length - error) / 5;
  console.log(wpm);
  return (
    <dialog>
      <h2>You </h2>
      <p>
        The target time was <strong> seconds. </strong>
      </p>
      <p>
        You stopped the timer with <strong> seconds left.</strong>
      </p>
      <form method="dialog">
        <button>CLose</button>
      </form>
    </dialog>
  );
}
