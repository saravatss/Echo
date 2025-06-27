'use client'
import { useState } from 'react';
import ArticleMap from "./ArticleMap";
import MapCaption from "./MapCaption";
import "./Map.css"

export default function MapFeed() {
    const [showCaption, setShowCaption] = useState(false);

    const handleMapClick = () => {
        setShowCaption(!showCaption); 
    };
    return (
        <main className="content">
            <h1 className="MapTitle">Интерактивная карта</h1>
            <div className="blockTextMap">
                <p className="textMap">С помощью карты вы можете изучить расположение различных народов в одном месте.</p>
            </div>
            <img src="./Map.png" className="imgMap" onClick={handleMapClick} style={{ cursor: 'pointer' }}/>
            <ArticleMap />
            {showCaption && <MapCaption />}
        </main>
    );
}
