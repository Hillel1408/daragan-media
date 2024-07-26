const baseUrl = "https://api.telegram.org/bot7315834795:AAEh8Wox2y_VvIznsSQ52_ALMkPmNjlLsfQ/";

export const sendMessage = async (message: string) => {
    const url = `${baseUrl}sendMessage?chat_id=-4211211760&text=${message}`;
    const response = await fetch(url);
    if (!response.ok) {
        const error = await response.json();
        await Promise.reject(error.description || "Что-то пошло не так");
    }
};
