import { useState, useEffect, createContext } from "react";
import type { ReactNode } from "react";
import type { ApiResponse, DataContextType } from "../types/api";
import { fetchDataFromApi } from "../api/fetchStockData";

const DataContext = createContext<DataContextType | undefined>(undefined);

type DataProviderProps = { children: ReactNode };

export const DataProvider = ({ children }: DataProviderProps) => {
  
    const [data, setData] = useState<ApiResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [inputTicker, setInputTicker] = useState<string | null>(null);
    const [inputPeriod, setInputPeriod] = useState<string | null>(null);

    const updateInputTicker = (tkr: string) => {
        console.log(inputTicker)
        setInputTicker(tkr)
    }

    const updateInputPeriod = (prd : string) => {
        console.log(inputPeriod)
        setInputPeriod(prd)
    }

    const fetchData = async (url: string) => {
        setLoading(true);
        setError(null);
        try {
            const result = await fetchDataFromApi(url);
            setData(result);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (inputTicker && inputPeriod) {
            const url = `http://localhost:8000/stocks/${inputTicker}/${inputPeriod}`;
            fetchData(url);
        }
    }, [inputTicker, inputPeriod]);

  return (
    <DataContext.Provider value={{ data, loading, error, fetchData, updateInputPeriod, updateInputTicker }}>
        {children}
    </DataContext.Provider>
  );
};

export default DataContext;
