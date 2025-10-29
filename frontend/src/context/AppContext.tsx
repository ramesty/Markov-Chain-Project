import { useState, createContext } from "react";
import type { ReactNode } from "react";
import { emptyApiResponseItem, type ApiResponseItem, type DataContextType } from "../types/apiTypes";
import { fetchDataFromApi } from "../api/fetchStockData";

const DataContext = createContext<DataContextType | undefined>(undefined);

type DataProviderProps = { children: ReactNode };

export const DataProvider = ({ children }: DataProviderProps) => {
  
    const [data, setData] = useState<ApiResponseItem>(emptyApiResponseItem);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showError, setShowError] = useState(true);
    const [inputTicker, setInputTicker] = useState<string | null>(null);
    const [inputPeriod, setInputPeriod] = useState<string | null>(null);
    const [inputWalk, setInputWalk] = useState<string | null>(null);

    const updateInputTicker = (tkr: string) => {
        setInputTicker(tkr)
    }

    const updateInputPeriod = (prd : string) => {
        setInputPeriod(prd)
    }

    const updateInputWalk = (wlk : string) => {
        setInputWalk(wlk)
    }

    const updateModal = (bool : boolean) => {
        setShowError(bool)
    }

    const fetchData = async () => {
        const url = `http://localhost:8000/stocks/${inputTicker}/${inputPeriod}`;
        setLoading(true);
        setError(null);
        try {
            const result = await fetchDataFromApi(url);
            setData(result);
        } catch (err) {
            setError((err as Error).message);
            updateModal(true)
        } finally {
            setLoading(false);
        }
    };

  return (
    <DataContext.Provider value={{ data, loading, error, showError, fetchData, updateInputPeriod, updateInputTicker, updateInputWalk, updateModal }}>
        {children}
    </DataContext.Provider>
  );
};

export default DataContext;
