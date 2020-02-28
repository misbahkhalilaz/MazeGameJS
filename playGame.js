function playGame(){
    if(current === grid[grid.length-1]){
       return 1;
    }
    else{
        document.onkeydown = function(event) {
            switch (event.keyCode) {
               case 37://left
                    if(current.walls[3] === false){
                        current = grid[index(current.i-1, current.j)];
                        current.highlight();    
                    }
                  break;
               case 38://top
                    if(current.walls[0] === false){
                        current = grid[index(current.i, current.j-1)];
                        current.highlight();
                    }
                  break;
               case 39://right
                    if(current.walls[1] === false){
                        current = grid[index(current.i+1, current.j)];
                        current.highlight();
                    }
                  break;
               case 40://bottom
                    if(current.walls[2] === false){
                        current = grid[index(current.i, current.j+1)];
                        current.highlight();
                    }
                  break;
            }
        };
    }
}