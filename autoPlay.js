stack2 = [];

function autoPlay(){
    a = true;
    check = 2;
    stack3 = [];
    if(!current.walls[0] && !grid[index(current.i, current.j-1)].traversed){//top
        stack3.push(grid[index(current.i, current.j-1)]);
    } 
    if(!current.walls[1] && !grid[index(current.i+1, current.j)].traversed){//right
        stack3.push(grid[index(current.i+1, current.j)]);
    }
    if(!current.walls[2] && !grid[index(current.i, current.j+1)].traversed){//bottom
        stack3.push(grid[index(current.i, current.j+1)]);
    }
    if(!current.walls[3] && !grid[index(current.i-1, current.j)].traversed){//left
        stack3.push(grid[index(current.i-1, current.j)]);
    }

    if(current === grid[0]){
        for(var g=0; g<grid.length; g++){
            grid[g].traversed = false;
        }
    }

    if(stack3.length>0){
        stack2.push(current);
        current.visited = false;
        current.traversed = true;
        current = stack3[floor(random(0, stack3.length-1))];
    }
    else if(stack2.length>0 && stack3.length === 0){
        current.traversed = true;
        current = stack2.pop();
        current.visited = true;
    }
}