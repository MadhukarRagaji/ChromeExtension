$(function() {
	chrome.storage.sync.get('IsExtActive', function(project) {
		if (project.IsExtActive && project.IsExtActive == true) {
			chrome.tabs.update({ url: 'https://youtube.com' });
			$('#chkActive').bootstrapToggle('on');
			chrome.storage.sync.get('projectName', function(project) {
				if (project.projectName) {
					$('#ddlProj').val(project.projectName);
				}
			});
		} else {
			$('#chkActive').bootstrapToggle('off');
		}
	});

	$('#ddlProj').on('change', function() {
		var SelectedProject = $('#ddlProj').val();
		chrome.storage.sync.set({ projectName: SelectedProject });

		//Load Project Here
	});

	$('#chkActive').on('change', function() {
		var IsActive = $('#chkActive').is(':checked');
		console.log(IsActive);
		chrome.storage.sync.set({ IsExtActive: IsActive });
	});
});
