'use client'
import "./PostGrid.css";
import Link from "next/link";

export default function PostGrid() {
  return (
    <div className="container">
      <figure>
        <img src="./evenskayaVishivka.jpg" className="imgPost" />
        <figcaption>
          <p>Эвенская вышивка</p>
        </figcaption>
      </figure>
      <figure>
        <figcaption>
          <p>
            Как живут коренные якуты: духи огня, праздник лета и никакого
            вегетарианства
          </p>
        </figcaption>
      </figure>
      <figure>
        <img src="./evenskayaVishivka2.jpg" className="imgPost" />
        <figcaption>
          <p>Эвенская вышивка</p>
        </figcaption>
      </figure>
      <figure>
        <img src="./costumes.jpg" className="imgPost" />
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
        <img src="./vishivka.jpg" className="imgPost" />
      </figure>
      <figure>
        <figcaption>
          <p>История и культура ненецкого народа</p>
        </figcaption>
      </figure>
      <figure>
        <img src="./vishivka2.jpg" className="imgPost" />
      </figure>
      <Link href={`/article`}>
        <figure>
          <img src="./MainArticlePhoto.jpg" className="imgPost" />
          <figcaption>
            <p>Материальная культура телеутов</p>
          </figcaption>
        </figure>
      </Link>
      <figure>
        <img src="./jewerly.jpg" className="imgPost" />
        <figcaption>
          <p>Чукотские украшения</p>
        </figcaption>
      </figure>
      <figure>
        <img src="./ornament.jpg" className="imgPost" />
        <figcaption>
          <p>Удмуртский народный орнамент</p>
        </figcaption>
      </figure>
      <figure>
        <img src="./triangle.jpg" className="imgPost" />
      </figure>
      <figure>
        <img src="./music.jpg" className="imgPost" />
        <figcaption>
          <p>OTYKEN – STORM</p>
        </figcaption>
      </figure>
    </div>
  );
}

