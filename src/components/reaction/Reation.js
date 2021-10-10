import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import "./reaction.css";

export default function Reaction() {
  return (
    <div>
      <div className="like-comment">
        <div>
          <h4>225 Like</h4>
        </div>
        <div>
          <h4>30 Comments</h4>
        </div>
      </div>

      <div className="reaction-top">
        <div>
          <ThumbUpIcon />
          <span className="like-comment-share">Like</span>{" "}
        </div>
        <div>
          <CommentIcon />
          <span className="like-comment-share">Comments</span>
        </div>
        <div>
          <ScreenShareIcon />
          <span className="like-comment-share">Share</span>
        </div>
      </div>
    </div>
  );
}
