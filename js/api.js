const apiurl = 'http://10.14.0.130:8000';

const result = document.getElementById('odometer');

const getApi = async (path) => {
    try {
        const data = await $.ajax({
            url: `${apiurl}/${path}`,
            type: "GET",
        });
        if (data) {
            return data;
        }
        else {
            throw 'No data';
        }
    }
    catch (error) {
        console.error(error);
    }
    
}

addEventListener('load', (event) => {
    setTimeout( async () => {
        let data = await getApi('yearly');
        let string = `{ "years": [${String(data)}]}`;
        let json = JSON.parse(string);
        odometer.innerHTML = json.years[0].statcount;
    }, 1000);
});