export async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const apiData = await response.json();
        return apiData;
    }
    catch (error) {
        console.log("the error:", error);
        return [];
    }
}
