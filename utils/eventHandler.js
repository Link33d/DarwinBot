
const { readdirSync } = require("fs")
/*module.exports = (client) => {
        const load = dirs => {
            const events = readdirSync(`./events/${dirs}/`).filter(d => d.endsWith(".js"))
        for(let file of events) {
            const evt = require(`../events/${dirs}/${file}`)
            let name = file.split(".")[0]
            client.on(name, evt.bind(null, client))
        }
    }
    ["client", "guild"].forEach(x => load(x))
}
*/

module.exports = (client) => {

    const events = readdirSync(`./events/`).filter(d => d.endsWith(".js"))
    for(let file of events) {
        const evt = require(`../events/${file}`)
        let name = file.split(".")[0]
        client.on(name, evt.bind(null, client))
    }

}