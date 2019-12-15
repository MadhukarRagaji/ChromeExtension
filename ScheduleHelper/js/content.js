var isExtActive = false;
var pathname = window.location.pathname;

chrome.storage.sync.get('IsExtActive', function(project) {
	if (project.isExtActive) {
		isExtActive = project.isExtActive;
	}
});

// chrome.runtime.sendMessage({ todo: 'loadPoject' });
// chrome.tabs.update({ url: 'https://youtube.com' });
// document.getElementById('btnLogin').click();

// For Login Page
if (pathname.includes('login')) {
	$('#txtUser').val('test');
} else if (pathname.includes('dashboard')) {
	// For DashBoard
} else if (pathname.includes('tasklist')) {
	// To Set Project
	loadProjectTask();
}

function loadProjectTask() {
	chrome.storage.sync.get('projectName', function(project) {
		if (project.projectName) {
			console.log(project.projectName);
		}
	});
}
