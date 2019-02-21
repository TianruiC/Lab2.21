var s=document.createElement("script");
s.src="https://d3js.org/d3.v5.js"
var body=document.getElementsByTagName("body")[0]
body.after(s);
//d3 now works
var main= d3.select("#main")
var ul=main.select("ul")
ul.selectAll("li").nodes().forEach(function(e)
{
  console.log(e.innerText);
})
