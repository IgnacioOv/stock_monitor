import pandas as pd
import pandas_datareader as web
from yahoo_fin import stock_info as si
import datetime as dt


def read_tickers() -> None:
    tickers = pd.read_csv("tickers.csv")
    print(tickers)
    msft = si.get_data(
        "msft", start_date="30/11/2017", end_date="30/11/2021", interval="1mo"
    )
    print(msft["close"])


def get_price() -> None:
    pass


def main() -> None:
    read_tickers()


main()
