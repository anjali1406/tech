document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form");

  forms.forEach(form => {
    form.addEventListener("submit", event => {
      const quantity = form.querySelector('input[name="quantity"]').value;
      const format = form.querySelector('select[name="format"]').value;
      const shipping = form.querySelector('select[name="shipping"]').value;

      // Validate quantity
      if (quantity < 1) {
        alert("Please enter a valid quantity (at least 1).");
        event.preventDefault();
        return;
      }

      // Confirmation before redirect
      const bookTitle = form.closest(".book").querySelector("h3").innerText;
      const confirmation = confirm(
        `Confirm your purchase:\n\nBook: ${bookTitle}\nFormat: ${format}\nQuantity: ${quantity}\nShipping: ${shipping}`
      );
      if (!confirmation) {
        event.preventDefault();
      }
    });
  });

  // Add hover effect for book containers
  const books = document.querySelectorAll(".book");
  books.forEach(book => {
    book.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    book.addEventListener("mouseover", () => {
      book.style.transform = "scale(1.02)";
      book.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)";
    });
    book.addEventListener("mouseout", () => {
      book.style.transform = "scale(1)";
      book.style.boxShadow = "none";
    });
  });

  // Optional: Highlight selected shipping method
  const shippingSelects = document.querySelectorAll("select[name='shipping']");
  shippingSelects.forEach(select => {
    select.addEventListener("change", () => {
      select.style.borderColor = "#007BFF";
    });
  });
});
