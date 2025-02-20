import { ImageGallery } from "./ImageGallery";
import { ArticleText } from "./ArticleText";
import "./History.css";

const mainImages = [
  {
    src: "./ArticlePhoto01.svg",
  },
  {
    src: "./ArticlePhoto02.svg",
  },
];

const mainImagesClass = [
  {
    className: "galleryImage1",
  },
  {
    className: "galleryImage2",
  },
  {
    className: "galleryImage3",
  },
];

const bottomImages = [
  {
    src: "./ArticlePhoto03.svg",
  },
  {
    src: "./ArticlePhoto04.svg",
  },
  {
    src: "./ArticlePhoto05.svg",
  },
];

const bottomImagesClass = [
  {
    className: "galleryImage3",
  },
  {
    className: "galleryImage4",
  },
  {
    className: "galleryImage5",
  },
];

const historicalText = `Первые описания телеутской одежды и украшений были сделаны в ХVIII – начале XIX веков и уже тогда внимание исследователей привлекала яркость и самобытность этих элементов культуры. Вот как, например, описывал женскую одежду Гмелин в 1751 году: 

«Эта женщина была необыкновенно красива. Одета она была в длинное платье из красного шелка, под ним шерстяная рубаха и льняные штаны. Ворот рубахи обшит китайским жемчугом; рубаха спереди была открыта, а по краям обсажена пуговицами и петлями. На голове была красивая татарская шапка, отороченная соболем. В ушах было по два серебряных кольца».
Несколько позже, в 1776 году, Георги так описывал телеутскую одежду:
«Одеяние носят они Татарское: но бедное и при том не наблюдают около себя чистоты. Мужчины языческого закона ходят в распущенных волосах, молодые же люди заплетают часть оных на затылке. Мугаметане бреют голову и носят небольшия Татарския скуфейки (Тел. Кабац). Все вообще любят жидкие бороды и по тому много выщипывают из оных волос. Содержащие Христианскую веру Телеуты носят платье иногда Татарское, а иногда и руское мужичье. Рубахи у всех вообще в употреблении.`;

export default function History() {
  return (
    <div className="articleContent">
      <div className="mainGallery">
        <ImageGallery images={mainImages} className={mainImagesClass} />
      </div>
      <ArticleText text={historicalText} />
      <div className="bottomGallery">
        <ImageGallery images={bottomImages} className={bottomImagesClass} />
      </div>
    </div>
  );
};

