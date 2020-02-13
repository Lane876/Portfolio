const tagsEl = document.querySelectorAll('.tag');
const projectsEl = document.querySelectorAll('.project');
const imgContainer = document.querySelectorAll('.img-container')
const buttons = document.querySelectorAll('.btn')

tagsEl.forEach(tagEl => {
	tagEl.addEventListener('click', () => {
		const tag = tagEl.getAttribute('data-tag');

		clearTagsActiveClass();

		tagEl.classList.add('text-purple-100', 'bg-purple-600');
		tagEl.classList.remove('text-purple-600', 'bg-purple-200');

		projectsEl.forEach(project => {
			const projectTags = project.getAttribute('data-tags').split(',');
			let show = false;

			projectTags.forEach(projectTag => {
				if (tag === projectTag) {
					show = true;
				}
			});

			// filter based on the tag
			if (tag === 'all' || show) {
				project.classList.remove('hidden');
			} else {
				project.classList.add('hidden');
			}
		});
	});
});

function clearTagsActiveClass() {
	tagsEl.forEach(tagEl => {
		tagEl.classList.remove('text-purple-100', 'bg-purple-600');
		tagEl.classList.add('text-purple-600', 'bg-purple-200');
	});
}

imgContainer.addEventListener('mouseenter', function () {
	this.classList.add('btn');
})
imgContainer.addEventListener('mouseleave', function () {
	this.classList.remove('btn');

})



