function getQuotes(){
  let textElement = document.getElementById("quotes");
  textElement.style.display = "none";

  fetch("https://quotes-api-self.vercel.app/quote")
  .then(res => res.json())
  .then(data => {
      textElement.style.display ="block";
      textElement.innerHTML = data.quote;
  })
}