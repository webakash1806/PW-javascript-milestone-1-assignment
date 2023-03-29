addEventListener('scroll', function () {
    let scrollSi = document.documentElement.scrollTop
    let scrollView = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let scrollPer = (scrollSi / scrollView) * 100
    document.getElementById("bar").style.width = scrollPer + "%"
})