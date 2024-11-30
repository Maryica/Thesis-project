import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import ProductItem from "./ProductItem";
import top_brand_img from "../img/top_brand_img.jpeg";



import { ReactComponent as FeatureDelivery_icon } from "../img/feature_icon1.svg";
import { ReactComponent as FeatureDiscount_icon } from "../img/feature_icon2.svg";
import { ReactComponent as FeatureQuality_icon } from "../img/feature_icon3.svg";

import products from "./productsData"; // Импорт массива продуктов

import "../style.scss";

function MainPage() {
  return (
    <div className="box-content">
      <Header />
      <content className="content">
        <div className="top_brand"><div className="top_brand_title">
          <div className="top_brand_text">
            <h1 className="tb_large">
              Сухие полнорационные корма
              «Премиум» и «Супер Премиум» класса</h1>
            <h3 className="tb_small">Официальный дилер А-Велес-Хан по Северо-Западному Федеральному
              округу</h3>
          </div>
        </div>
          <div className="top_brand_img">
            <img className="top_brand_pic" src={top_brand_img} alt="dog" width="70%" />
          </div>

        </div>
        <div className="offers center gallery-wrapper">
          <div className="small_offers">
            <div className="offer offer__protein">
              <h4 className="offer_subtitle">Энергия и наращивание мышц, костей,
                суставов</h4>
            </div>
            <div className="offer offer__fat">
              <h4 className="offer_subtitle">Источник энергии</h4>
            </div>
            <div className="offer offer__fiber">
              <h4 className="offer_subtitle">Нормализует работу кишечника</h4>

            </div>

            <div className="offer offer__ash">
              <h4 className="offer_subtitle">Источник минеральных веществ</h4>

            </div>
            <div className="offer offer__calcium">
              <h4 className="offer_subtitle">Улучшает формирование зубов и костной ткани</h4>

            </div>
            <div className="offer offer__phosphorus">
              <h4 className="offer_subtitle">Cпособствует мышечной активности и свертыванию крови</h4>

            </div>
            <div className="offer offer__iron">
              <h4 className="offer_subtitle">Cтроительный материал для клеток организма, профилактика
                анемии</h4>

            </div>
            <div className="offer offer__copper">
              <h4 className="offer_subtitle">Поддерживает целостность костей и кровеносных сосудов</h4>

            </div>
          </div>
        </div>
        <div className="products center">
          <p className="products_title">Наши корма</p>

          <div className="product_items">
            {products.slice(6).map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
          <div className="products_button">
            <Link className="browse_button" to="/catalog">
              Все продукты
            </Link>
          </div>
        </div>
        <section>
          <div className="features center">
            <figure>
              <div className="feature">
                <FeatureDelivery_icon className="feature_icon" />
                <h4 className="feature_title">Быстрая доставка</h4>
                <p className="feature_description">
                  Наша команда профессионалов гарантирует своевременную и аккуратную доставку прямо к вашему порогу.
                </p>
              </div>
            </figure>
            <figure>
              <div className="feature">
                <FeatureDiscount_icon className="feature_icon" />
                <h4 className="feature_title">Гибкая система скидок</h4>
                <p className="feature_description">
                  Скидки на определённые товары и индивидуальные предложения для владельцев породистых кошек и собак, а также для постоянных клиентов.
                </p>
              </div>
            </figure>
            <figure>
              <div className="feature">
                <FeatureQuality_icon className="feature_icon" />
                <h4 className="feature_title">Гарантия качества</h4>
                <p className="feature_description">
                  Гарантируем высокое качество наших кормов для домашних животных. Мы тщательно проверяем каждый ингредиент и следим за соблюдением всех стандартов производства
                </p>
              </div>
            </figure>
          </div>
          <section>
            <div className="subscride_info center">

              <div className="card-container">
                <div className="card"><a href="/#">
                  <div className="card--display"><i className="material-icons">Составы</i>

                  </div>
                  <div className="card--hover">
                    <p><span className="card-span">сухой белок мяса (30%), рис, свёкла, морковь, жир индейки, растительная
                      клетчатка, рыбная мука, сушёный белок яйца, рыбий
                      жир, минеральные вещества, витаминный комплекс,
                      экстракт бархатцев, экстракт
                      Юкки Шидигера, экстракт расторопши, глюкозамин и хондроитин,
                      топинамбур, морские водоросли, растительное масло, экстракт розмарина,
                      пробиотик</span>
                    </p>
                  </div></a>
                  <div className="card--border"></div>
                </div>
              </div>
              <div className="card-container">
                <div className="card"><a href="/#">
                  <div className="card--display"><i className="material-icons">Витамины и микроэлементы</i>

                  </div>
                  <div className="card--hover">

                    <p>
                      витамин А – 28000 МЕ/кг, витамин D3 – 1000 МЕ/кг, витамин Е
                      – 380 мг/кг, витамин С – 140 мг/кг, витамины группы В,
                      железо – 175 мг/кг, йод – 1,4 мг/кг, медь – 25 мг/кг,
                      марганец – 42,5 мг/кг, цинк – 250 мг/кг, селен – 0,24 мг/кг.
                    </p>

                  </div></a>
                  <div className="card--border"></div>
                </div>
              </div>
              <div className="card-container">
                <div className="card"><a href="/#">
                  <div className="card--display"><i className="material-icons">Питательный состав</i>

                  </div>
                  <div className="card--hover">

                    <p>
                      сырой белок 27%, сырой жир 15%, сырая клетчатка 2,7%, сырая
                      зола 7,2%, влажность 10%, кальций 1,5%, фосфор 0,9%, омега-6
                      жирные кислоты 3,4%, омега-3 жирные кислоты 0,3%, метионин и
                      цистин.
                    </p>

                  </div></a>
                  <div className="card--border"></div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </content>
      <Footer />
    </div>
  );
}

export default MainPage;
