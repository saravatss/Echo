import PlaceRow from "../UI/PlaceTag";
import Tag from "../UI/Tag";
import TypeRow from "../UI/TypeTag";
import "./PostGrid.css";
import Link from "next/link";

export default function PostGrid() {
  return (
    <div className="container">
      <figure>
        <img src="./evenskayaVishivka.png" className="imgPost" />
          <PlaceRow icon="/images/location.svg" text="Охотский округ, народ Эвены" />
        <figcaption>
          <p>Эвенская вышивка</p>
        </figcaption>
        <div className="tags">
          <Tag text="эвены" />
          <Tag text="декоративно-прикладное искусство" />
        </div>
      </figure>
      <figure>
        <TypeRow icon="/images/article.svg" text="Статья" />
        <PlaceRow icon="/images/location.svg" text="Республика Саха (Якутия)" />
        <figcaption>
          <p>
            Как живут коренные якуты: духи огня, праздник лета и никакого
            вегетарианства
          </p>
        </figcaption>
        <div className="tags">
          <Tag text="статья саха" />
          <Tag text="культура саха" />
          <Tag text="быт саха" />
        </div>
      </figure>
      <figure>
        <img src="./evenskayaVishivka2.png" className="imgPost" />
        <PlaceRow icon="/images/location.svg" text="Охотский округ, народ Эвены" />
        <figcaption>
          <p>Эвенская вышивка</p>
        </figcaption>
        <div className="tags">
          <Tag text="эвены" />
          <Tag text="декоративно-прикладное искусство" />
        </div>
      </figure>
      <figure>
        <img src="./costumes.png" className="imgPost" />
        <PlaceRow icon="/images/location.svg" text="Охотский округ, народ Эвены" />
        <figcaption>
          <p>
            Костюмы с конкурса высокой моды национального костюма «Этно-Эрато»
            от Л. Б. Хатхил
          </p>
        </figcaption>
        <div className="tags">
          <Tag text="конкурсы" />
          <Tag text="национальный костюм" />
        </div>
      </figure>
      <figure>
        <TypeRow icon="/images/article.svg" text="Статья" />
        <PlaceRow icon="/images/location.svg" text="Чукотский автономный округ, народ Кереки" />
        <figcaption>
          <p>Исчезающие народы России: Кереки</p>
        </figcaption>
        <div className="tags">
          <Tag text="статья о кереках" />
          <Tag text="культура кереков" />
          <Tag text="история кереков" />
        </div>
      </figure>
      <figure>
        <img src="./vishivka.png" className="imgPost" />
        <div className="tags">
          <Tag text="долганская вышивка" />
          <Tag text="долганский орнамент" />
          <Tag text="долганские промыслы" />
        </div>
      </figure>
      <figure>
        <TypeRow icon="/images/article.svg" text="Статья" />
        <PlaceRow icon="/images/location.svg" text="Ямало-Ненецкий автономный округ, народ Ненцы" />
        <figcaption>
          <p>История и культура ненецкого народа</p>
        </figcaption>
        <div className="tags">
          <Tag text="статья о ненцах" />
          <Tag text="культура ненцев" />
          <Tag text="история ненцев" />
        </div>
      </figure>
      <figure>
        <img src="./vishivka2.png" className="imgPost" />
        <div className="tags">
          <Tag text="эвенский рисунок" />
          <Tag text="эвенский орнамент" />
          <Tag text="авторский рисунок" />
        </div>
      </figure>
      <Link href={`/article`}>
        <figure>
          <img src="./MainArticlePhoto.png" className="imgPost" />
          <PlaceRow icon="/images/location.svg" text="Кемеровская область, народ телеуты" />
          <figcaption>
            <p>Материальная культура телеутов</p>
          </figcaption>
          <div className="tags">
          <Tag text="костюмы телеутов" />
          <Tag text="телеутская вышивка" />
        </div>
        </figure>
      </Link>
      <figure>
        <img src="./jewerly.png" className="imgPost" />
        <PlaceRow icon="/images/location.svg" text="Чукотский автономный округ, народ Чукчи" />
        <figcaption>
          <p>Чукотские украшения</p>
        </figcaption>
        <div className="tags">
          <Tag text="чукотские украшения" />
          <Tag text="чукотские промыслы" />
        </div>
      </figure>
      <figure>
        <img src="./ornament.png" className="imgPost" />
        <TypeRow icon="/images/book.svg" text="Книга" />
        <PlaceRow icon="/images/location.svg" text="Удмуртская Республика" />
        <figcaption>
          <p>Удмуртский народный орнамент</p>
        </figcaption>
        <div className="tags">
          <Tag text="удмуртская книга" />
          <Tag text="удмуртский орнамент" />
        </div>
      </figure>
      <figure>
        <img src="./triangle.png" className="imgPost" />
        <div className="tags">
          <Tag text="эвенский ковёр" />
          <Tag text="эвенский орнамент" />
          <Tag text="эвенские промыслы" />
        </div>
      </figure>
      <figure>
        <img src="./music.png" className="imgPost" />
        <TypeRow icon="/images/music.svg" text="Музыка" />
        <PlaceRow icon="/images/location.svg" text="Красноярский край" />
        <figcaption>
          <p>OTYKEN – STORM</p>
        </figcaption>
        <div className="tags">
          <Tag text="этническая музыкальная группа" />
          <Tag text="фолк-поп" />
        </div>
      </figure>
    </div>
  );
}

