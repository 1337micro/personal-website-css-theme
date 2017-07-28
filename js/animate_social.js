document.getElementById("github_div").onmouseover = () => {
  $("#github_div").addClass('animated shake')
  $("#github_div").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', (e) => {$("#github_div").removeClass('animated shake')})
}
document.getElementById("linkedin_div").onmouseover = () => {
  $("#home").addClass('animated shake')
  $("#linkedin_div").addClass('animated shake')
  $("#linkedin_div").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', (e) => {$("#linkedin_div").removeClass('animated shake')})
}
