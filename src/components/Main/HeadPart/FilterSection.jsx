"use client";
import "./FeedComponent.css";
import FilterDropdown from "./FilterDropdown";
import FilterButton from "./FilterButton";

function FilterSection() {
  const filterOptions = [
    {
      label: "Фильтровать по",
      options: ["Популярное"],
      defaultOption: "Популярное",
    },
    { label: "Тип публикации", options: ["Все"], defaultOption: "Все" },
    { label: "Народы", options: ["Все"], defaultOption: "Все" },
  ];

  return (
    <section className="filterSection">
      <div className="filterContainer">
        {filterOptions.map((filter, index) => (
          <FilterDropdown key={index} {...filter} />
        ))}
        <FilterButton label="Все фильтры" iconSrc="./all-filters.png" />
      </div>
      <button className="clearFilters">Очистить фильтры</button>
    </section>
  );
}

export default FilterSection;
