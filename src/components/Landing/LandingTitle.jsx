import LanAdvantages from "./LandingAdvantages";
import "./LandingTitle.css";
import Image from "next/image";

export default function LandingTitle() {
  return (
    <div className="wholeContainer">
        <div className="container">
            <div className="TitleLanding">
                <div className="firstRow">
                <p className="firstLine firstFont">Медиа-гид по</p>
                <p className="secondLine secondFont">культуре</p>
                <p className="thirdLine firstFont">и</p>
                <p className="forthLine secondFont">быту</p>
                </div>
                
                <p className="fifthLine firstFont">малочисленных народов России</p>
            </div>

            <div className="descriptionLanding">
                <p className="itemDecript">Исследуй свои корни</p>
                <p className="itemDecript">Окунись в культуру</p>
                <p className="itemDecript">Пообщайся с народами</p>
            </div>
        </div>

        <div className="infoAbout">
            <div className="AboutNubmers">
                <div className="AboutSeveral">200+</div>
                <div className="AboutText">авторов из народов</div>
            </div>
            <div className="AboutNubmers">
                <div className="AboutSeveral">1000+</div>
                <div className="AboutText">различных постов</div>
            </div>
            <div className="AboutNubmers">
                <div className="AboutSeveral">30+</div>
                <div className="AboutText">интересных разделов</div>
            </div>
        </div>
        
        <Image src="/images/mainImg.svg" width={1440} height={603} alt="" className="mainImg" />

        <div className="container">
            <div className="captionLanding">
                <div className="firstRow">
                    <p className="firstLine firstFont">Кто</p>
                    <p className="secondLine secondFont">мы?</p>
                </div>
                <p className="wholeDescript">
                    Платформа, объединяющая людей, увлеченных изучением традиций, обычаев, языков и образа жизни малочисленных народов России. 
                </p>
            </div>
            
            <div className="advantLine">
                <LanAdvantages icon="/images/book.svg" title="Быстро, удобно, познавательно" text="Мы помогаем заинтересованным найти без проблем нужные факты в различных форматах." />
                <LanAdvantages icon="/images/Pattern.svg" title="Сохраняем наследие" text="Распространяя информацию, мы сохраняем уникальные культуры малочисленных народов." />
                <LanAdvantages icon="/images/people.svg" title="Создание уютного пространства" text="Здесь уникальное комьюнити, состоящее из разных людей, но объединённое любопытством." />
            </div>

        </div>
    </div>
  );
}