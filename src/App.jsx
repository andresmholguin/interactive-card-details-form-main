import "./App.css";

import bgMainMobile from "./assets/images/bg-main-mobile.png";
import bgMainDesktop from "./assets/images/bg-main-desktop.png";
import cardLogo from "./assets/images/card-logo.svg";
import cardFront from "./assets/images/bg-card-front.png";
import { useState } from "react";

function App() {
  const [dataCard, setDataCard] = useState({
    cardName: "Jane Appleseed",
    cardNumber: "0000 0000 0000 0000",
    mmExpDate: "00",
    yyExpDate: "00",
    cvc: "000",
  });

  const handleNumberCard = (e) => {
    console.log(e.target.id);
    const { value } = e.target;
    const formattedValue = value
      .replace(/\s+/g, "")
      .slice(0, 16)
      .replace(/(\d{4})(?=\d)/g, "$1 ")
      .trim();
    setDataCard((prev) => ({
      ...prev,
      cardNumber: formattedValue,
    }));
  };

  return (
    <main className="w-[375px] h-[704px] rw:w-[1440px] rw:h-[900px] rw:flex font-Space-Grotesk text-lg  bg-white">
      <section className="relative rw:h-[900px] rw:ml-0">
        <picture className="w-full h-full rw:flex">
          <source media="(max-width: 1439px)" srcSet={bgMainMobile} />
          <source media="(min-width: 1440px)" srcSet={bgMainDesktop} />
          <img src={bgMainMobile} alt="Background Degrade." />
        </picture>
        <div className="absolute w-[288px] h-[160px] top-[126px] left-[18px] z-1 rw:w-[447px] rw:top-[187px] rw:left-[167px] p-6 text-white rw:text-3xl bg-no-repeat bg-contain">
          {/* bg-[url('./assets/images/bg-card-front.png')] bg-no-repeat bg-contain */}
          <img
            className="absolute -z-1 top-0 left-0"
            src={cardFront}
            alt="card front"
          />
          <img
            className="w-[55px] mb-7 rw:w-[84px]"
            src={cardLogo}
            alt="Card logo"
          />
          <p className="tracking-[2px] rw:tracking-[3px] mb-4">
            {dataCard.cardNumber}
          </p>
          <div className="flex justify-between text-[10px] rw:mt-[60px] rw:text-sm uppercase">
            <p>{dataCard.nombre}</p>
            <p>
              <span>{dataCard.mmExpDate}</span>/
              <span>{dataCard.yyExpDate}</span>
            </p>
          </div>
        </div>
        <div className="absolute w-[288px] h-[160px] top-[30px] left-[75px] rw:w-[447px] rw:h-[246px] rw:top-[468px] rw:left-[257px] bg-[url('./assets/images/bg-card-back.png')] bg-no-repeat bg-contain text-xs text-white text-right pr-9 pt-17 rw:pt-[110px] rw:pr-[60px] rw:mt-[60px] rw:text-sm">
          <p>{dataCard.cvc}</p>
        </div>
      </section>
      <section className="rw:flex rw:justify-center rw:items-center rw:pl-[150px] px-8 rw:w-[957px]">
        <form className="rw:w-[381px] mt-[80px]" action="">
          <label className="label" htmlFor="cardholder">
            Carlholder Name
          </label>
          <input
            className="input"
            type="text"
            id="cardholder"
            placeholder="e.g. Jane Appleseed"
            required
          />
          <label className="label" htmlFor="cardNumber">
            Card Number
          </label>
          <input
            className="input"
            onChange={handleNumberCard}
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength={16}
            name="cardNumber"
            required
          />
          <div className="grid grid-cols-2 gap-x-5 mb-4">
            <div className="">
              <label className="label" htmlFor="expDate">
                Exp. Date (MM/YY)
              </label>
              <div className="grid grid-cols-2 gap-1">
                <input
                  className="input"
                  type="text"
                  name="mmExpDate"
                  maxLength={2}
                  placeholder="MM"
                  required
                />
                <input
                  className="input"
                  type="text"
                  name="yyExpDate"
                  maxLength={2}
                  placeholder="YY"
                  required
                />
              </div>
            </div>
            <div>
              <label className="label" htmlFor="cvc">
                CVC
              </label>
              <input
                className="input"
                type="text"
                name="cvc"
                placeholder="e.g. 123"
                maxLength={3}
                required
              />
            </div>
          </div>
          <button
            className="bg-Very-dark-violet w-[100%] text-Light-grayish-violet py-3 rounded-[10px] font-bold"
            type="submit"
          >
            Confirm
          </button>
        </form>
      </section>
    </main>
  );
}

//   Thank you!
//   We've added your card details
//   Continue

export default App;
