const directions = [[-2,-1], [-2,1], [-1,2], [1,2], [2,1], [2,-1], [1,-2], [-1,-2]];

class Node {
    constructor(row, col, distanceFromStart) {
        this.row = row;
        this.col = col;
        this.distanceFromStart = distanceFromStart;
    }
    getPositionString() {
        return `${this.row}, ${this.col}`;
    }
}

const getNeighbors (row, col) => {
    const neighbors = [];

    for (const direction of directions) {
        const [rowChange, colChange] = direction;

        const neighborRow = row + rowChange;
        const neighborCol = col + colChange;

        neighbors.pusj([neighborRow, neighborCol]);
    }
    return neighbors;

}


function getShortestPath(newRow, newCol) {
    const queue = [];
    const startNode = new Node(0, 0, 0);
    queue.push(startNode);

    const visited = new Set();

    while (queue.length > 0) {
        const node = queue.shift();
        const { row, col, distanceFromStart} = node;

        if (row == newRow && col == newCol) return distanceFromStart;
        visited.add(node.getPositionString());

        for (const neighbor of getNeighbors(row, col)) {
            const [neighborRow, neighborCol] = neighbor;
            const neighborNode = new Node(neighborRow, neighborCol, distanceFromStart + 1);
            


            if (visited.has(neighborNode.getPositionString())) continue;

            queue.push(neighborNode);

        }
    }
}