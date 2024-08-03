import { useParams } from "react-router-dom";
import { Header } from "../components/header";
import { Promotions } from "../components/promotions";
import { BreadCrumbsNatura } from "@/components/breadCrumbs";
import { StarRating } from "@/components/starRating";
import { ItensCart } from "@/components/itens-cart";
import { IoBagAddOutline, IoLocationOutline } from "react-icons/io5";

export default function Product() {
  const { id } = useParams();

  return (
    <>
      <Promotions />
      <Header />

      <div className="w-8/12 bg-white px-[20px]" id="product">
        <div>
          <div className="h-[80px] flex justify-start items-center ml-4">
            <BreadCrumbsNatura page="Natura Home" linkFather="products" />
          </div>
          <div className="w-[100%] flex justify-between items-center gap-2">
            <div className="h-[auto] w-[100px] grid grid-rows-5 gap-4 p-4">
              <div className="h-[100%] active">
                <img
                  src="https://raw.githubusercontent.com/jnerydesigner/natura-challenge/main/frontend-natura/public/images/product.jpg"
                  alt=""
                  className="rounded-[8px]"
                />
              </div>
              <div className="h-[100%]">
                <img
                  src="https://raw.githubusercontent.com/jnerydesigner/natura-challenge/main/frontend-natura/public/images/product.jpg"
                  alt=""
                  className="rounded-[8px]"
                />
              </div>
              <div className="h-[100%]">
                <img
                  src="https://raw.githubusercontent.com/jnerydesigner/natura-challenge/main/frontend-natura/public/images/product.jpg"
                  alt=""
                  className="rounded-[8px]"
                />
              </div>
              <div className="h-[100%]">
                <img
                  src="https://raw.githubusercontent.com/jnerydesigner/natura-challenge/main/frontend-natura/public/images/product.jpg"
                  alt=""
                  className="rounded-[8px]"
                />
              </div>
              <div className="h-[100%]">
                <img
                  src="https://raw.githubusercontent.com/jnerydesigner/natura-challenge/main/frontend-natura/public/images/product.jpg"
                  alt=""
                  className="rounded-[8px]"
                />
              </div>
            </div>

            <div className="w-[630px] h-[500px] flex justify-center items-center ">
              <div className="w-[78%]">
                <img
                  src="https://raw.githubusercontent.com/jnerydesigner/natura-challenge/main/frontend-natura/public/images/product.jpg"
                  alt=""
                  className="rounded-[8px] shadow-2xl"
                />
              </div>
            </div>
            <div className="h-[490px] flex-1 border-2 border-gray-600 p-4 rounded-[8px]">
              <h3 className="text-2xl">
                Presente Natura Homem Nós com Desodorante Corporal
              </h3>
              <p className="text-sm">NATURA HOMEM</p>
              <div className="w-full h-14 flex justify-start items-center">
                <StarRating rating={"4.5"} />
              </div>
              <p className="h-4 text-sm line-through text-gray-600">
                R$ 264,00
              </p>
              <p className="text-2xl font-bold text-orange flex justify-start items-center mt-4 mb-2">
                R$ 264,00
                <span className="h-[20px] text-[0.8rem] ml-4 bg-orange text-white px-2 rounded-full flex justify-center items-center">
                  -36%
                </span>
              </p>
              <p className="mb-4">À vista ou em até 5x de R$ 33,98 sem juros</p>
              <div className="w-full h-[100px] flex justify-start items-center pl-4 pt-2 pb-2">
                <ItensCart />
                <button className="h-[42px] w-[180px] bg-orange flex justify-center items-center rounded-3xl">
                  <IoBagAddOutline className="mr-4" />
                  <span>Adicionar</span>
                </button>
              </div>
              <div className="w-full flex justify-between items-center gap-2">
                <div className="w-80 h-[40px] my-4 border border-gray-800 rounded-sm flex justify-center items-center">
                  <IoLocationOutline className="w-[100px]" />
                  <input
                    type="text"
                    placeholder="Insira seu cep"
                    className="h-[40px] w-[200px] flex-1 bg-transparent border-none"
                  />
                </div>
                <button className="w-full h-[40px] flex justify-center items-center bg-orange rounded-sm">
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 my-4"></div>
        <div>
          <div className="p-4">
            <h2 className="text-2xl mb-4 font-bold">Descriçao</h2>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              corrupti fuga saepe enim vel reprehenderit maxime iusto
              praesentium molestiae, libero in reiciendis labore quam nam nobis
              error quae repudiandae, ab laboriosam beatae adipisci! Ipsam
              consectetur accusamus eligendi. Sunt delectus similique voluptas
              nihil fuga maiores, ad temporibus! Optio dolores veritatis
              delectus, praesentium deleniti corrupti consectetur, pariatur
              eveniet obcaecati aperiam minus cum vel architecto eius, aliquid
              aut hic! Harum provident vel eligendi, sint ex sequi ullam.
              Laudantium libero repellendus placeat suscipit enim harum corporis
              nisi, debitis, deserunt voluptates vero consequatur! Expedita
              nemo, magni dicta repellat nesciunt consequuntur tenetur saepe
              veritatis, nobis, consectetur reprehenderit aspernatur praesentium
              explicabo illum perferendis quidem vero asperiores? Recusandae
              consequatur voluptates veniam sit accusantium eum veritatis libero
              illum? Velit?
            </p>
            <p className="leading-relaxed">
              Molestias dolor laboriosam aspernatur obcaecati. Repellat
              cupiditate similique corrupti error deleniti reiciendis dolorum
              quam accusamus praesentium voluptas veniam iure obcaecati ipsum
              magni quidem, temporibus repudiandae expedita voluptatem eius quae
              eaque magnam sunt architecto! Quaerat vitae, nihil debitis nobis
              est cum iste esse minus ratione! Maxime iusto provident facere
              soluta fugit nobis doloribus accusamus temporibus molestiae
              laudantium odit id natus optio delectus cum voluptatibus
              voluptatum, ratione earum aut ducimus blanditiis est nulla
              adipisci praesentium? Voluptatem quae minus, cum debitis
              asperiores est dicta quod eum consequuntur incidunt reiciendis
              aliquid velit voluptate enim sit. Sed obcaecati eaque, deserunt,
              laudantium praesentium cumque ipsum velit ipsa quo fugit, quae
              facere! Atque nostrum laborum, minima modi culpa nihil consequatur
              quae minus, optio neque numquam molestias. Ducimus?
            </p>
            <p className="leading-relaxed">
              Eveniet voluptas quia tempore totam alias commodi beatae quasi,
              cupiditate excepturi ratione ipsum consequatur aspernatur unde qui
              aliquid nulla quod dolore libero eius, quas voluptatibus similique
              neque. Voluptate, eaque magni nesciunt quas cupiditate modi
              similique reprehenderit excepturi sit in, debitis ipsam quis.
              Doloremque quaerat, aspernatur, nostrum id vitae architecto
              aliquid quidem sit suscipit earum ducimus tenetur ad officia!
              Fuga, neque quos tenetur debitis expedita iusto recusandae amet
              repudiandae rem unde nobis esse tempora ut dolorum saepe, ad ipsum
              laborum consectetur quisquam mollitia soluta cupiditate
              reiciendis. Hic veniam quaerat possimus molestiae odit in
              recusandae est eligendi explicabo quasi dicta minus, quidem saepe
              accusamus amet obcaecati quia cupiditate eos odio nisi distinctio
              voluptas vero corporis neque. Incidunt odit commodi quis possimus
              hic!
            </p>
            <p className="leading-relaxed">
              Dolorum sunt magni explicabo quas, ipsam perspiciatis debitis at
              quibusdam eveniet facilis expedita alias accusantium, sint
              voluptate, quasi fugiat culpa quo velit impedit maiores? Nihil
              nemo, maiores minus et sed qui placeat repellendus magnam ullam
              officia distinctio repudiandae, eum neque pariatur quod
              dignissimos quia ut vitae tenetur. Officia qui excepturi facere
              rerum, voluptates sed assumenda iste dolorum ut, ad iure
              accusantium molestiae quia nam adipisci earum? Vitae nostrum
              asperiores aspernatur modi sit cum repudiandae vero hic at
              ratione, amet perspiciatis esse numquam sapiente aliquam officiis
              eum nisi in qui tenetur labore! Quos maiores praesentium quaerat.
              Ipsa, quae beatae repellat quia tenetur quos, animi nesciunt
              incidunt ab nostrum veniam alias suscipit? Fugiat laudantium in,
              possimus harum quas quos ratione. Minus, possimus?
            </p>
            <p className="leading-relaxed">
              Amet commodi, veritatis expedita ad minus voluptate. Inventore
              perspiciatis alias reprehenderit a, soluta suscipit, repellendus
              labore molestias neque veritatis explicabo cum ab aut nulla
              dignissimos repudiandae non magni maxime autem esse? Maiores,
              dignissimos quae! Tempora delectus, ab earum sit aut possimus
              beatae asperiores inventore, consequatur culpa expedita.
              Repellendus enim cum blanditiis sit nisi praesentium voluptate
              perspiciatis pariatur, vitae incidunt est ut nihil nobis doloribus
              amet. Facilis temporibus reiciendis blanditiis qui, illum
              cupiditate inventore assumenda laboriosam? Ea labore molestiae
              esse dolor illum. Dolores laborum fugiat deleniti dolor, quasi
              facilis labore quos similique. Libero dignissimos facere quia eum
              ullam minima est repellendus quidem beatae veniam recusandae
              accusamus saepe, ducimus soluta dolor unde atque deleniti ad!
              Ducimus fugit voluptatem, vero nisi perspiciatis nobis!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
