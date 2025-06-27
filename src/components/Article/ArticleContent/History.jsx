import { ImageGallery } from "./ImageGallery";
import { ArticleText } from "./ArticleText";
import "./History.css";
import { ArticleSecondText } from "./ArticleSecondTitle";
import Image from "next/image";

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

const secondaryImages = [
  {
    src: "./ArticlePhoto06.svg",
  },
  {
    src: "./ArticlePhoto07.svg",
  },
];

const secondaryImagesClass = [
  {
    className: "galleryImage6",
  },
  {
    className: "galleryImage7",
  },
];


const SecondaryTitle = `Первое упоминание`
const historicalText = `Первые описания телеутской одежды и украшений были сделаны в ХVIII – начале XIX веков и уже тогда внимание исследователей привлекала яркость и самобытность этих элементов культуры. 
`;

const SecondaryTitle2 = `Вот как описывал женскую одежду немецкий естествоиспытатель Иоганн Георг Гмелин в 1751 году:`
const historicalText2 = `«Эта женщина была необыкновенно красива. Одета она была в длинное платье из красного шелка, под ним шерстяная рубаха и льняные штаны. Ворот рубахи обшит китайским жемчугом; рубаха спереди была открыта, а по краям обсажена пуговицами и петлями. На голове  была красивая татарская шапка, отороченная соболем. В ушах было по два серебряных кольца».
`;

const SecondaryTitle3 = `Несколько позже, в 1776 году, Георг Гмелин описывал телеутскую одежду так:`
const historicalText3 = `«Одеяние носят они Татарское: но бедное и при том не наблюдают около себя чистоты. Мужчины языческого закона ходят в распущенных волосах, молодые 
же люди заплетают часть оных на затылке. Мугаметане бреют голову и носят небольшия Татарския скуфейки (тел. Кабац). Все вообще любят жидкие бороды 
и потому много выщипывают из оных волос. Содержащие Христианскую веру Телеуты носят платье, иногда Татарское, а иногда и русское мужичьё. Рубахи 
у всех вообще в употреблении».`;

const SecondaryTitle4 = `Иллюстрации с примерами татарского костюма:`

export default function History() {
  return (
    <div className="articleContent">
      <div className="mainGallery">
        <ImageGallery images={mainImages} {...mainImagesClass} />
      </div>
      <ArticleSecondText text={SecondaryTitle} />
      <ArticleText text={historicalText} />
      <ArticleSecondText text={SecondaryTitle2} />
      <div className="blockText">
        <div className="leftBlockText">
          <ArticleText text={historicalText2} />
          <ArticleSecondText text={SecondaryTitle3} />
          <ArticleText text={historicalText3} />
        </div>
          <Image src="/images/manArticle.png" width={385} height={585} alt="" className="manArticle"></Image>
      </div>
      <div className="secondaryGallery">
        <ImageGallery images={secondaryImages} {...secondaryImagesClass} />
      </div>
      <ArticleSecondText text={SecondaryTitle4} />
      <div className="bottomGallery">
        <ImageGallery images={bottomImages} {...bottomImagesClass} />
      </div>
    </div>
  );
};

