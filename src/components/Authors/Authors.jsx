'use client'
import Image from 'next/image'
import './Authors.css'

const AuthorsContent = () => {
  const authors = [
    {
      name: 'Юлия Чебушева',
      description: 'Автор делится уникальными историями о жизни твердого, их древних обычаях, ремеслах и отношениях с природой. В публикациях рассматриваются обычаи и традиции.',
      followers: 500,
      avatar: '/AuthorImg.png'
    },
    {
      name: 'Анастасия Тунгусова',
      description: 'Автор исследует богатую культуру и традиции назначения, рассказывая о их уникальных охотничьих практиках, взаимодействии с природой и духовных верованиях.',
      followers: 500,
      avatar: '/AuthorImg-1.png'
    },
    {
      name: 'Хон Джулустан',
      description: 'Профиль посвящен жизни чучеей, их удивительным традициям и обычаям. Автор делится историями о кочевом образе жизни, опеневодстве и искусстве чучеей.',
      followers: 500,
      avatar: '/AuthorImg-2.png'
    },
    {
      name: 'Мария Скворцова',
      description: 'В постах рассматриваются вопросы сохранения туринского языка, влияние современных технологий на традиционный образ жизни и экологические проблемы региона.',
      followers: 500,
      avatar: '/AuthorImg-3.png'
    },
    {
      name: 'Ноургун Кычкин',
      description: 'Профиль посвящен кегам, их жизни на берегах Енисея и традиционному рыболовству. Автор делится уникальными историями о древних обычаях, мифологии.',
      followers: 500,
      avatar: '/AuthorImg-4.png'
    },
    {
      name: 'Сартылана Кузьмина',
      description: 'Автор исследует жизнь звенков, их традиционный образ жизни, основанный на опеневодстве и охоте. В постах рассматриваются уникальные обычаи.',
      followers: 500,
      avatar: '/AuthorImg-5.png'
    },
    {
      name: 'Екатерина Дашцэрэн',
      description: 'Калимки — единственный буддийский народ в Европе, пронизающий в основном в Калимкии. Их культура включает уникальные традиции, связанные с буддизмом.',
      followers: 500,
      avatar: '/AuthorImg-6.png'
    }
  ]

  return (
    <div className="authorsContainer">;
      
      <div className="authorsGrid">
        {authors.map((authors, index) => (
          <div key={index} className="authorCard">
            <div className="authorHeader">
              <div className="avatarPlaceholder">
                <Image 
                  src={authors.avatar}
                  alt=''
                  width={80}
                  height={80}
                  className="avatar"
                />
              </div>
              <div className="authorInfo">
                <h2 className="authorName">{authors.name}</h2>
              </div>
            </div>
            <p className="authorDescription">{authors.description}</p>
            <p className="followers">{authors.followers}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AuthorsContent;