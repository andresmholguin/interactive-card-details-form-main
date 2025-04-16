import "./App.css";

import bgMainMobile from "./assets/images/bg-main-mobile.png";
import bgMainDesktop from "./assets/images/bg-main-desktop.png";
import cardLogo from "./assets/images/card-logo.svg";

function App() {
  return (
    <main className="w-[375px] 1xl:[1440px] 1xl:flex font-Space-Grotesk text-lg ">
      <section className="relative ">
        <picture className="w-full h-full 1xl:flex">
          <source media="(max-width: 1439px)" srcSet={bgMainMobile} />
          <source media="(min-width: 1440px)" srcSet={bgMainDesktop} />
          <img src={bgMainMobile} alt="Background Degrade." />
        </picture>
        <div className="absolute w-[288px] h-[160px] top-[126px] left-[18px] z-1 1xl:top-[187px] 1xl:left-[167px] bg-[url('./assets/images/bg-card-front.png')] bg-no-repeat bg-contain p-6 text-white">
          <img className="w-[55px] mb-7 " src={cardLogo} alt="Card logo" />
          <p className=" tracking-[2px] mb-4">0000 0000 0000 0000</p>
          <div className="flex justify-between text-[10px] uppercase">
            <p>Jane Appleseed</p>
            <p>
              <span>00</span>/<span>00</span>
            </p>
          </div>
        </div>
        <div className="absolute w-[288px] h-[160px] top-[30px] left-[75px]  1xl:top-[468px] 1xl:left-[257px] bg-[url('./assets/images/bg-card-back.png')] bg-no-repeat bg-contain text-xs text-white text-right pr-9 pt-17">
          <p>000</p>
        </div>
      </section>
      <section className="mt-22 px-8">
        <form action="">
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
            type="text"
            id="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
            required
          />
          <div className="grid grid-cols-2 gap-x-3 mb-4">
            <div className="">
              <label className="label" htmlFor="expDate">
                Exp. Date (MM/YY)
              </label>
              <div className=" grid grid-cols-2 gap-4">
                <input
                  className="input"
                  type="text"
                  name="expDate"
                  maxLength={2}
                  placeholder="MM"
                  required
                />
                <input
                  className="input"
                  type="text"
                  name="expDate"
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
            className="bg-Very-dark-violet w-[100%] text-Light-grayish-violet py-3 rounded-2xl font-bold"
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
