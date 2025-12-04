function calculateArea(widht, height = widht)  {
    return widht * height;
}
console.log(calculateArea(5)); // 25
console.log(calculateArea(5, 10)); // 50