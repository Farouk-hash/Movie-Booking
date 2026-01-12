import { Plug, ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Newspaper } from 'lucide-react';
import {  useRef } from 'react';
import {sampleNews} from '../assets/newdummydata.js'
import {newsStyle} from '../styles/components/news.js'


export const News = () => {
  const mainNews = sampleNews[0];
  const otherNews = sampleNews.slice(1, 6);
  const remainingNews = sampleNews.slice(5, sampleNews.length);
  const scrollRef = useRef(null);
  const verticalScrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const scrollUp = () => {
    if (verticalScrollRef.current) {
      verticalScrollRef.current.scrollBy({ top: -200, behavior: 'smooth' });
    }
  };

  const scrollDown = () => {
    if (verticalScrollRef.current) {
      verticalScrollRef.current.scrollBy({ top: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className={newsStyle.container}>
        {/* Main header */}
        <div className={newsStyle.header.base}>
            <div className={newsStyle.header.leftSide.base}>
                <Newspaper className={newsStyle.header.leftSide.icon} />
                <div>
                    <h3 style={{fontFamily:'Dance'}} className={newsStyle.header.leftSide.title}>Cinema News</h3>
                    <p className={newsStyle.header.leftSide.subtitle}>Latest...Cinema...Fans</p>
                </div>
            </div>
          <div className={newsStyle.header.rightSide.base}>
            <button className={newsStyle.header.rightSide.button}>Latest News</button>
          </div>
        </div>

        {/* Breadcrumb section */}
        <div className={newsStyle.brumbcumber.base}>
          <h2 className={newsStyle.brumbcumber.leftSide} style={{fontFamily:'Dance'}}>Featured</h2>
          <p className={newsStyle.brumbcumber.middleSide}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, quos! Labore, quo autem optio dolores, sapiente odit laborum beatae distinctio aliquam, voluptatibus accusantium explicabo nesciunt cumque ratione placeat est voluptatem!
          </p>
          <div className={newsStyle.brumbcumber.rightSide.base}>
            <Plug className={newsStyle.brumbcumber.rightSide.btn} />
          </div>
        </div>

        {/* News content */}
        <div className={newsStyle.news.container}>
          {/* Left side */}
          <div className={newsStyle.news.leftSide.base}>
            {/* Main news card */}
            <div className={newsStyle.news.leftSide.mainNewCard.card}>
              <div className={newsStyle.news.leftSide.mainNewCard.layout}>
                <span className={newsStyle.news.leftSide.mainNewCard.category}>
                  {mainNews.category}
                </span>
                <img 
                  src={mainNews.image} 
                  alt={mainNews.title}
                  className={newsStyle.news.leftSide.mainNewCard.image}
                />
              </div>
              <h3 className={newsStyle.news.leftSide.mainNewCard.title}>
                {mainNews.title}
              </h3>
              <p className={newsStyle.news.leftSide.mainNewCard.excerpt}>
                {mainNews.excerpt}
              </p>
              <div className={newsStyle.news.leftSide.mainNewCard.meta}>
                <span>{mainNews.time}</span>
                <span>•</span>
                <span>{mainNews.date}</span>
              </div>
            </div>

            {/* Other news cards - horizontal scroll */}
            <div className={newsStyle.news.leftSide.otherNewCards.base}>
              <div className={newsStyle.news.leftSide.arrows.base}>
                <button 
                  onClick={scrollLeft}
                  className={newsStyle.news.leftSide.arrows.button}
                >
                  <ChevronLeft className={newsStyle.news.leftSide.arrows.icon} />
                </button>
                <button 
                  onClick={scrollRight}
                  className={newsStyle.news.leftSide.arrows.button}
                >
                  <ChevronRight className={newsStyle.news.leftSide.arrows.icon} />
                </button>
              </div>
              
              <div ref={scrollRef} className={newsStyle.news.leftSide.otherNewCards.container}>
                {otherNews.map((news) => (
                  <div key={news.id} className={newsStyle.news.leftSide.otherNewCards.card}>
                    <div className={newsStyle.news.leftSide.otherNewCards.layout}>
                      <span className={newsStyle.news.leftSide.otherNewCards.category}>
                        {news.category}
                      </span>
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className={newsStyle.news.leftSide.otherNewCards.image}
                      />
                    </div>
                    <div className={newsStyle.news.leftSide.otherNewCards.content}>
                      <h4 className={newsStyle.news.leftSide.otherNewCards.title}>
                        {news.title}
                      </h4>
                      <p className={newsStyle.news.leftSide.otherNewCards.excerpt}>
                        {news.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className={newsStyle.news.rightSide.base}>
            {/* Vertical scroll arrows */}
            <div className={newsStyle.news.rightSide.verticalArrows.base}>
              <button 
                onClick={scrollUp}
                className={newsStyle.news.rightSide.verticalArrows.button}
              >
                <ChevronUp className={newsStyle.news.rightSide.verticalArrows.icon} />
              </button>
              <button 
                onClick={scrollDown}
                className={newsStyle.news.rightSide.verticalArrows.button}
              >
                <ChevronDown className={newsStyle.news.rightSide.verticalArrows.icon} />
              </button>
            </div>

            {/* Remaining news cards */}
            <div ref={verticalScrollRef} className={newsStyle.news.rightSide.cards.base}>
              {remainingNews.map((news) => (
                <div key={news.id} className={newsStyle.news.rightSide.cards.card.base}>
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className={newsStyle.news.rightSide.cards.card.image}
                  />
                  <div className={newsStyle.news.rightSide.cards.card.info}>
                    <span className={newsStyle.news.rightSide.cards.card.category}>
                      {news.category}
                    </span>
                    <h4 className={newsStyle.news.rightSide.cards.card.title}>
                      {news.title}
                    </h4>
                    <p className={newsStyle.news.rightSide.cards.card.excerpt}>
                      {news.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Join us section */}
            <div className={newsStyle.news.rightSide.joinUs.base}>
              <div className={newsStyle.news.rightSide.joinUs.informations}>
                <h3 className={newsStyle.news.rightSide.joinUs.title}>Join Us</h3>
                <p className={newsStyle.news.rightSide.joinUs.description}>
                  Join Us To Get All Updated News
                </p>
                <div className={newsStyle.news.rightSide.joinUs.subscribtion}>
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className={newsStyle.news.rightSide.joinUs.input}
                  />
                  <button className={newsStyle.news.rightSide.joinUs.button}>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;