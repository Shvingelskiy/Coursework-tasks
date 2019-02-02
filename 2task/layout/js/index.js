
window.onload = function () {

  document.getElementById('first-btn').onclick = function () {
    location.href = 'https://github.com/Shvingelskiy'
  }

  document.getElementById('second-btn').onclick = function () {
    document.body.style.background = '#C5E6ED'
  }

  document.getElementById('third-btn').onclick = function () {
    document.body.innerHTML = '';
    document.body.innerHTML = '<header>\n' +
      '<p class="text-center">Header</p>\n' +
      '</header>\n' +
      '<main>\n' +
      '<article>\n' +
      '<h3 class="text-center">Second task!</h3>\n' +
      '</article>\n' +
      '</main>\n' +
      '<footer>\n' +
      '<p class="text-center">Footer</p>\n' +
      '</footer>'
  }

}

