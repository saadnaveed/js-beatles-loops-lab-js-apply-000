function theBeatlesPlay(musicians, instruments) {
  var plays = [];
  
  for (var i = 0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i];
    
    plays.push(string)
  }
}