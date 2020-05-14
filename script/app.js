// Importing the functions / variables from the modules
import {
    allSections,
    myRouter,
    updateUI
} from './modules/router.js'
import {
    getData
} from './modules/api.js'
import {
    renderOverviewPage,
    renderDetailPage
} from './modules/render.js'


// Making my app to work and adding a loading state before rendering the data
async function app() {
    document.getElementById("loading").style.display = "block";
    // const data = await getData(await location())
    // renderData(data);
    renderOverviewPage();
    renderDetailPage();
}
app()

console.log("het werkt yayayay!")