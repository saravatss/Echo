"use client";
import "./FeedComponent.css";

function FilterButton({ label, iconSrc }) {
  return (
    <button className="filterButton">
      <span>{label}</span>
      <img src={iconSrc} alt="" className="buttonIcon" />
    </button>
  );
}

export default FilterButton;
