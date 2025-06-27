import Tag from "@/components/UI/Tag.jsx";
import TypeRow from "@/components/UI/TypeTag.jsx";
import "./PostsArticle.css";
import PlaceRow from "@/components/UI/PlaceTag";

export default function PostsArticle() {
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
        <img src="./vishivka.png" className="imgPost" />
        <div className="tags">
          <Tag text="долганская вышивка" />
          <Tag text="долганский орнамент" />
          <Tag text="долганские промыслы" />
        </div>
      </figure>
    </div>
  )};