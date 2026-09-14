chrome.action.onClicked.addListener(async (tab) => {
try {
await chrome.tabs.sendMessage(tab.id, {action: "toggle"})
}
catch (error){
    console.log("error :(" + error.message)
}



});