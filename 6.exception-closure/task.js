function parseCount(i) {
    if (!Number.parseInt(i)) {
        throw new Error('Невалидное значение');
    } else {
        return Number.parseInt(i)
    }
}

function validateCount(i) {
    try {
        return parseCount(i)
    } catch (error) {
        return error
    }
}

class Triangle {
    constructor(a, b, c) {
        if ((b + c) < a || (a + c) < b || (a + c) < b || (a + b) < c) {
            throw new Error('Треугольник с такими сторонами не существует')
        }
        
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c
    }

    getArea() {
        let pTriangle = this.getPerimeter() / 2
        let sTriangle = Math.sqrt(pTriangle * (pTriangle - this.a) * (pTriangle - this.b) * (pTriangle - this.c))
        return Number(sTriangle.toFixed(3))
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c)
    } catch (error) {
        return {
            getArea: function() {
                return ('Ошибка! Треугольник не существует')
            },
            getPerimeter: function() {
                return ('Ошибка! Треугольник не существует')
            }
        }
    }
    
    
}