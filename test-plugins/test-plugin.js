// Runs the Blookware Help Command
const pluginName = "WareHelp"
console.log("Test Plugin")
console.log("Checking for Blookware...")
if (bWarePChecker) {
    console.log("Found Blookware. Injecting the plugin via Blookware now...")
    bWarePChecker(pluginName)
    function pluginScript() {
        blookware_help()
    }
    pluginScript()
}else{
    console.error("Failed to find Blookware.\nMake sure Blookware is loaded and try again.")
}