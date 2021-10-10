import "./styles.css";
import Photo from "./components/photo/Photo";
import BadgeAvatars from "./components/avator/Avator";
import EditButton from "./components/editbutton/Editbutton";
import Reaction from "./components/reaction/Reation";
import Comment from "./components/comments/Comment";

export default function App() {
  return (
    <div className="App-main">
      <BadgeAvatars alt="Ahmed Mustafa" Date="June 18 2021" />
      <EditButton />
      <Reaction />
      <Comment />
    </div>
  );
}
