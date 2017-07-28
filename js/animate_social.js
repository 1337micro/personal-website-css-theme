document.getElementById("github").onmouseover = () => {
  $("#github").addClass('animated shake')
  $("#github").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', (e) => {$("#github").removeClass('animated shake')})
}
