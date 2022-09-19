import axios from "axios";

export const apiRequest = async (url: string, conf?: any) => {
    try {
        const response = await axios({
            url,
            headers: {
                'Authorization': 'Bearer 988840729a550186ba883f7584b1a1104ec351eb',
                'Content-Type': 'application/json',
            },
            ...conf,
        });
        return response
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error)
        } else {
            console.log(error)
        }
    }
}
