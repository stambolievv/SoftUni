function pointDistance() {
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        static distance(a, b) {
            return (Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2));
        }
    }
    let p1 = new Point(5, 5);
    let p2 = new Point(9, 8);
    console.log(Point.distance(p1, p2));
}
pointDistance();