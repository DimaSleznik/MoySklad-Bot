import axios from "axios";

export const apiGetRequest = async (url: string) => {
    try {
        const response = await axios.get(url);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error)
        } else {
            console.log(error)
        }
    }
}
