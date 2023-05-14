// Test Plugin, feel free to make your own plugin using this code!
const pluginName = "Test Plugin"
console.log(pluginName)
console.log("Checking for Blookware...")
if (typeof bWarePChecker == "function") {
    console.log("Found Blookware. Injecting the plugin via Blookware now...")
    bWarePChecker(pluginName)
    function pluginScript() {
        // Put your Blookware functions here
    }
    pluginScript()
}else{
    console.error("Failed to find Blookware.\nMake sure Blookware is loaded and try again.")
}