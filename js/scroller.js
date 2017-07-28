console.log("scroller loadedss")











document.getElementById("home").onclick = () => {
  $("#First").velocity("scroll", {
    duration: 500,
    easing: "easeInBack"
  })
}

document.getElementById("contact").onclick = () => {
  $("#Second").velocity("scroll", {
    duration: 500,
    easing: "easeInBack"
  })
}
