import "./App.css";

import bgMainMobile from "./assets/images/bg-main-mobile.png";
import bgMainDesktop from "./assets/images/bg-main-desktop.png";
import cardLogo from "./assets/images/card-logo.svg";

function App() {
  return (
    <main className="w-[375px] 1xl:[1440px] 1xl:flex font-Space-Grotesk text-[18px]">
      <section className="relative ">
        <picture className="w-full h-full 1xl:flex">
          <source media="(max-width: 1439px)" srcSet={bgMainMobile} />
          <source media="(min-width: 1440px)" srcSet={bgMainDesktop} />
          <img src={bgMainMobile} alt="Background Degrade." loading="lazy" />
        </picture>
        <div className="absolute w-[287px] h-[158px] top-[126px] left-[18px] z-1 1xl:top-[187px] 1xl:left-[167px] bg-[url('./assets/images/bg-card-front.png')] bg-no-repeat bg-cover p-6 text-white">
          <img className="h-[32px] mb-6 " src={cardLogo} alt="Card logo" />
          <p className=" tracking-[2px] pb-4">0000 0000 0000 0000</p>
          <div className="flex justify-between text-[10px] uppercase">
            <p>Jane Appleseed</p>
            <p>
              <span>00</span>/<span>00</span>
            </p>
          </div>
        </div>
        <div className="absolute w-[287px] h-[158] top-[30px] left-[75px] 1xl:top-[468px] 1xl:left-[257px] bg-url('./assets/images/bg-card-back.png') bg-no-repeat bg-cover p-6 text-white">
          <p>000</p>
        </div>
      </section>
      <section className="mt-22">
        <form action="">
          <label htmlFor="cardholder">Carlholder Name</label>
          <input
            type="text"
            id="cardholder"
            placeholder="e.g. Jane Appleseed"
            required
          />
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
            required
          />
          <div className="flex gap-2">
            <div>
              <label htmlFor="expDate">Exp. Date (MM/YY)</label>
              <div>
                <input type="text" id="expDate" placeholder="MM" required />
                <input type="text" id="expDate" placeholder="YY" required />
              </div>
            </div>
            <div>
              <label htmlFor="cvc">CVC</label>
              <input type="text" id="cvc" placeholder="e.g. 123" required />
            </div>
          </div>
          <button type="submit">Confirm</button>
        </form>
      </section>
    </main>
  );
}

//   Thank you!
//   We've added your card details
//   Continue

export default App;
