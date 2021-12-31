import pandas as pd
import yfinance as yf


def read_tickers() -> None:

    tick = [
        "ADBE",
        "AMD",
        "GOOG",
        "GOOGL",
        "AMZN",
        "AAPL",
        "ASML",
        "AVGO",
        "CSCO",
        "CMCSA",
        "EBAY",
        "HSIC",
        "INTC",
        "MSFT",
        "VRSK",
        "PYPL",
    ]

    df = yf.download(tick, start="2017-12-31", end="2021-12-30", interval="1mo")
    nan_value = float("NaN")

    df.replace("", nan_value, inplace=True)

    df = df.dropna(how="any")

    df.to_excel("file.xlsx")


def main() -> None:
    read_tickers()


main()
