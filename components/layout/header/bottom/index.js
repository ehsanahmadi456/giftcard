import Left from "./left";
import Right from "./Right";

function Bottom() {
  return (
    <div className="items-center justify-between hidden mt-8 md:flex">
      <Right />
      <Left />
    </div>
  );
}

export default Bottom;
