const findCatImage = async () => {
    const request = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await request.json();

    return await data[0].url
};

export default findCatImage;