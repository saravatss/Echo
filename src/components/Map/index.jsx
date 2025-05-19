'use client'
import ArticleMap from "./ArticleMap";
import "./Map.css"

export default function MapFeed() {
    return (
        <main className="content">
            <h1 className="MapTitle">Интерактивная карта</h1>
            <div className="blockTextMap">
                <p className="textMap">С помощью карты вы можете изучить расположение различных народов в одном месте.</p>
            </div>
            <img src="./Map.png" className="imgMap"/>
            <ArticleMap />
        </main>
    );
}
