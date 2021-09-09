const $addNav = $('.addNav')
const $search = $('.search')
const $navList = $('.navList')
const $lastLi = $navList.find('li.last')

// search
$($search).on('click', (e) => {
	const $inputValue = $('input').val()
	if ($inputValue === '') {
		e.preventDefault()
		alert("请输入您要跳转的网址！");
	}
})


// addNav
