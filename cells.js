class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.walls = [true, true, true, true];
        this.visited = false;
        this.traversed = false;
        this.checkNeighbors = function () {
            var neighbors = [];
            var top = grid[index(i, j - 1)];
            var right = grid[index(i + 1, j)];
            var bottom = grid[index(i, j + 1)];
            var left = grid[index(i - 1, j)];
            if (top && !top.visited) {
                neighbors.push(top);
            }
            if (right && !right.visited) {
                neighbors.push(right);
            }
            if (bottom && !bottom.visited) {
                neighbors.push(bottom);
            }
            if (left && !left.visited) {
                neighbors.push(left);
            }
            if (neighbors.length > 0) {
                var r = floor(random(0, neighbors.length));
                return neighbors[r];
            }
            else {
                return undefined;
            }
        };
        this.highlight = function () {
            var x = this.i * w;
            var y = this.j * w;
            noStroke();
            fill(100, 128, 255, 200);
            rect(x, y, w, w);
        };
        this.show = function (r=100, g=0, b=128, a=100) {
            var x = this.i * w;
            var y = this.j * w;
            stroke(255);
            if (this.walls[0]) {
                line(x, y, x + w, y);
            }
            if (this.walls[1]) {
                line(x + w, y, x + w, y + w);
            }
            if (this.walls[2]) {
                line(x + w, y + w, x, y + w);
            }
            if (this.walls[3]) {
                line(x, y + w, x, y);
            }
            if(!this.visited){
                noStroke();
                fill(0, 0, 0, 0);
                rect(x, y, w, w);
            }
            if (this.visited) {
                noStroke();
                fill(r, g, b, a);
                rect(x, y, w, w);
            }
        };
    }
}