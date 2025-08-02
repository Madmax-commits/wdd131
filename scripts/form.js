const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

const selectElement = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  selectElement.appendChild(option);
});

const ratingInputs = document.querySelectorAll('input[name="rating"]');
const ratingLabels = document.querySelectorAll('.rating-stars label');

ratingInputs.forEach((input, index) => {
  input.addEventListener('change', () => {
    // Reset all label colors
    ratingLabels.forEach(label => {
      label.style.color = '#ccc';
    });

    // Highlight selected stars up to the chosen one
    for (let i = 0; i <= index; i++) {
      ratingLabels[i].style.color = 'gold';
    }

    // Update rating display
    document.getElementById('ratingValue').textContent = `Selected Rating: ${input.value} star${input.value > 1 ? 's' : ''}`;
  });
});
document.querySelectorAll('body *').forEach(element => {
  if (element.childNodes.length > 0) {
    element.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.includes('(Optional)')) {
        const parts = node.textContent.split('(Optional)');
        const span = document.createElement('span');
        span.style.color = 'blue';
        span.textContent = '(Optional)';

        const fragment = document.createDocumentFragment();
        fragment.appendChild(document.createTextNode(parts[0]));
        fragment.appendChild(span);
        if (parts[1]) {
          fragment.appendChild(document.createTextNode(parts[1]));
        }

        element.replaceChild(fragment, node);
      }
    });
  }
});


