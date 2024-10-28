//Task 1 on html page//

// Task 2 - Configure the JavaScript for Drawing Context//
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let drawing = false, tool = 'line', color = '#000' ;

document.querySelectorAll('input[name="tool"]').forEach(input =>
    input.addEventListener('change', () => tool = input.value)
  );
// when a tool is selected, its updated to the radio button
document.getElementById('color').addEventListener('input', () => color = target.value);
document.getElementById('clear').addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));
//updats color and removes content

