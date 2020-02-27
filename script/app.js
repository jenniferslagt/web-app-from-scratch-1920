// Importing the functions / variables from the modules
import {
    allSections,
    myRouter,
    updateUI
} from './modules/router.js'
import {
    location
} from './modules/location.js'
import {
    getData
} from './modules/api.js'
import {
    renderData
} from './modules/render.js'

// Making my app to work and adding a loading state before rendering the data
async function app() {
    document.getElementById("loading").style.display = "block";
    const data = await getData(await location())
    renderData(data);
}
app()
