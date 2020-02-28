var a = false;

function setup() {
    createCanvas(1200, 600);
    cols = floor(width/w);
    rows = floor(height/w);
    
    for (var   j = 0; j < rows; j++) {
      for (var i = 0; i < cols; i++) {
        var cell = new Cell(i, j);
        grid.push(cell);
      }
    }
  
    current = grid[floor(random(0, grid.length))];
  }
  
  function draw() {
    background(51);
    for (var i = 0; i < grid.length; i++) {
      grid[i].show();
    }

    grid[0].show(255, 0, 0, 200);
    grid[grid.length-1].show(0, 255, 0, 200);
  
    current.highlight();
    if(check!=2){
      current.visited = true;
      current.highlight();
      var next = current.checkNeighbors();
      if (next) {
        next.visited = true;
    
        stack.push(current);

        removeWalls(current, next);

        current = next;
      } else if (stack.length > 0) {
        current = stack.pop();
      }
    }
    
    if(stack.length === 0 && !a){
        if(current != grid[0] && check != 1){
          current = grid[0];
          check = 1;
        }
        playGame();
    }

    if(a && stack.length === 0 && current != grid[grid.length-1]){
      autoPlay();
    }
  
  }