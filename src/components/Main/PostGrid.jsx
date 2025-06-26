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
        <figcaption>
          <p>
            Костюмы с конкурса высокой моды национального костюма «Этно-Эрато»
            от Л. Б. Хатхил
          </p>
        </figcaption>
      </figure>
      <figure>
        <figcaption>
          <p>Исчезающие народы России: Кереки</p>
        </figcaption>
      </figure>
      <figure>
        <img src="./vishivka.png" className="imgPost" />
      </figure>
      <figure>
        <figcaption>
          <p>История и культура ненецкого народа</p>
        </figcaption>
      </figure>
      <figure>
        <img src="./vishivka2.png" className="imgPost" />
      </figure>
      <Link href={`/article`}>
        <figure>
          <img src="./MainArticlePhoto.png" className="imgPost" />
          <figcaption>
            <p>Материальная культура телеутов</p>
          </figcaption>
        </figure>
      </Link>
      <figure>
        <img src="./jewerly.png" className="imgPost" />
        <figcaption>
          <p>Чукотские украшения</p>
        </figcaption>
      </figure>
      <figure>
        <img src="./ornament.png" className="imgPost" />
        <figcaption>
          <p>Удмуртский народный орнамент</p>
        </figcaption>
      </figure>
      <figure>
        <img src="./triangle.png" className="imgPost" />
      </figure>
      <figure>
        <img src="./music.png" className="imgPost" />
        <figcaption>
          <p>OTYKEN – STORM</p>
        </figcaption>
      </figure>
    </div>
  );
}

