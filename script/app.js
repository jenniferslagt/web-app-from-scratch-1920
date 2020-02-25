import {allSections, myRouter, updateUI} from './modules/router.js'
import {location} from './modules/helpers.js'
import {getData} from './modules/api.js'
import {renderData} from './modules/render.js' 

async function app(){
    const data = await getData(await location())
    renderData(data);
}
app()
