import './InfoAuthor.css';
import Image from 'next/image'

export default function InfoAuthor() {
	return (
        <div className="infoAndPosts">
            <div className='containerInfo'>
            <Image src="/images/authorOneIcon.svg" alt="" width={415} height={429}></Image>
            <div className="rightInfo">
                <div className="authorOneInfo">
                <p className="authorTitle">
                    Юлия Чебушева
                </p>
                <div className="likes">
                    <Image src="/images/LikeEmpty.svg" alt="" width={40} height={40}></Image>
                    <p>500</p>
                </div>
                <p className="descriptionInfo">
                    Автор делится уникальными историями о жизни телеутов, их древних обычаях, ремеслах и отношениях с природой. В публикациях рассматриваются современность и прошлое народа, изменения климата, традиционный образ жизни, обычаи и традиции.
                </p>
                </div>

                <button className="share">Поделиться профилем</button>
            </div>

        </div>
        <h2 className="postsTitle">Публикации</h2>
    </div>
	);
}