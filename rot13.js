function rot13(str) {
    return str.replace(/([A-M])|([N-Z])/gi, function(match, x, y) {
      switch(match) {
        case x:
        return String.fromCharCode(match.charCodeAt(0) + 13);
  
        case y:
        return String.fromCharCode(match.charCodeAt(0) - 13);
      }
        
    })
  }
  
  rot13("SERR PBQR PNZC");