const $addNav = $('.addNav')
const $search = $('.search')
const $navList = $('.navList')
const $lastLi = $navList.find('li.last')
const x = localStorage.getItem('x')
const xObject = JSON.parse(x)
const hashMap = xObject || [
  {logo: 'A', url: 'https://www.acfun.cn'},
  {logo: 'B', url: 'https://www.bilibili.com'}
]
const simplifyUrl = (url) => {
  return url.replace('https://', '')
    .replace('http://', '')
    .replace('www.', '')
    .replace(/\/.*/, '') // 删除 / 开头的内容
}

// search
$($search).on('click', (e) => {
	const $inputValue = $('input').val()
	if ($inputValue === '') {
		e.preventDefault()
		alert("请输入您要跳转的网址！");
	}
})

const render = () => {
  $navList.find('li:not(.last)').remove()
  hashMap.forEach((node, index) => {
    const $li = $(`<li>
      <div class="nav">
        <div class="logo">${node.logo}</div>
        <div class="link">${simplifyUrl(node.url)}</div>
      </div>
    </li>`).insertBefore($lastLi)
    $li.on('click', () => {
      window.open(node.url)
    })
  })
}

render()

$('.addNav').on('click', () => {
  let url = window.prompt('请问你要添加的网址是啥？')
  if (url.indexOf('http') !== 0) {
    url = 'https://' + url
  }
  console.log(url)
  hashMap.push({
    logo: simplifyUrl(url)[0].toUpperCase(),
    url: url
  })
  render()
})

// window.onbeforeunload = () => {
//   const string = JSON.stringify(hashMap)
//   localStorage.setItem('x', string)
// }

$(document).on('keypress', (e) => {
  const {key} = e
  for (let i = 0; i < hashMap.length; i++) {
    if (hashMap[i].logo.toLowerCase() === key) {
      window.open(hashMap[i].url)
    }
  }
})