import "./App.css";
import { Alert } from "./component/Alert/Alert";
import { BellRing } from "lucide-react";

function App() {
  return (
    <div className="main">
      <Alert
        title={"Alert Title"}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atque
        laudantium distinctio voluptates hic odio corrupti veniam repudiandae
        sapiente perspiciatis!"
        icon={<BellRing />}
        type={"alert-danger"}
      />
    </div>
  );
}

export default App;
