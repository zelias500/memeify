var element;
// chrome.runtime.onMessage.addListener(function(request){
// 	element = request
// })

// onclicked callback function
function openEditor(info, tab){
	var toAdd;
	if (info.srcUrl) toAdd = info.srcUrl;
	
	// THIS PART DOESN'T WORK
	// else {
	// 	toAdd = element
	// }
	
	chrome.tabs.create({url: "editorPage.html#"+toAdd})
}

chrome.contextMenus.create({
	"title": "Grab Image",
	"contexts": ["all"],
	"onclick": openEditor
});