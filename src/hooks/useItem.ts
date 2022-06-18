import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { fetchItem } from "../services/api";

const useItem = (): any => {
    const { status, data } = useQuery<any, AxiosError>(
        ["item"],
        () => fetchItem()
    );

    return { status, data };
};

export default useItem;
