

function getTitles(titles){
  var tt = titles.ul.li.map(s => ({"text" : s["_text"]}));
  return tt;
}

module.exports = getTitles;
