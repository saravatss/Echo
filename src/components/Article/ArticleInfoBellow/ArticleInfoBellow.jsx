import "./ArticleInfoBellow.css";

export default function ArticleInfoBellow() {
  return (
    <div className="articleInfoContainer">

      <div className="authorSection">
        <div className="authorInfo">
          <img src="./ArticleProfile.svg" className="authorAvatar" />
          <div className="authorName">
            <p>Юлия Чебушева</p>
            <img src="./arrowSpan.svg" className="verificationIcon" />
          </div>
        </div>

        <div className="readingStats">
          <img src="./Like.svg" className="readingIcon" />
          <span>150</span>
        </div>
      </div>
    </div>
  );
}
