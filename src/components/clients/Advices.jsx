import money from "../img/money.svg";
import { useState, useEffect } from "react";


function Advices() {
  const [currencyData, setCurrencyData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrency = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=5f26016109b842a3a1cddc43b5d49af7&symbols=EUR,MAD,USD&base=USD"
        );
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const fetchedData = await response.json();
        setCurrencyData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCurrency();
  }, []);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!currencyData) {
    return <p>No data available.</p>;
  }

  return (
    <section id="advices">
      <div className="container">
        <div className="row">
          <div className="currency-img">
            <img src={money} alt="" />
          </div>
          <div className="currency">
            <div>
              <h4>Moroccan Dirham</h4>
              <p>
                The Moroccan Dirham (MAD) is the official currency of Morocco.
                It's not widely traded internationally, so you'll likely
                exchange your dollars or euros for dirhams before you travel
              </p>

              <ul>
                <li>
                  <strong>1 USD</strong> is equal to around{" "}
                  <strong>
                    {(currencyData.rates.MAD * 1).toFixed(2)} Dirham
                  </strong>{" "}
                  (MAD).
                </li>
                <li>
                  <strong>1 EUR</strong> is equal to around{" "}
                  <strong>
                    {(
                      (currencyData.rates.USD / currencyData.rates.EUR) *
                      currencyData.rates.MAD
                    ).toFixed(2)}{" "}
                    Moroccan Dirham
                  </strong>{" "}
                  (MAD).
                </li>
              </ul>
              <p>
                Here's a quick rundown on the Moroccan Dirham:
                <br />
                {/* exchange api */}
                <strong>Exchange Rate:</strong> As of today, <CurrentDate/> <br />
                here's the approximate exchange rate: You can exchange your
                currency for dirhams at banks, currency exchange offices, or
                even some hotels in Morocco. Be sure to compare rates before you
                exchange your money to get the best deal.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

function CurrentDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000); // Update every second (adjust as needed)

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    
      <strong>{date.toLocaleDateString()}</strong>
    
  );
}
export default Advices;
