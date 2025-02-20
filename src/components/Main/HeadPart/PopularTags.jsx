"use client";
import "./FeedComponent.css";

function PopularTags() {
  const tags = [
    "телеутская кухня",
    "ительменские танцы",
    "северные народы",
    "украшения эвенков",
    "эскимосский фольклор",
    "история алеутов",
    "статья о ненцах",
    "эвенская музыка",
    "авторский рисунок",
    "авторская статья",
    "конкурсы",
  ];

  return (
    <section className="popularTags">
      <h2 className="popularTagsTitle">Популярные теги</h2>
      <div className="tagContainer">
        {tags.map((tag, index) => (
          <span key={index} className="headerTag">
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}

export default PopularTags;
