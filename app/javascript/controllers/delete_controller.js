import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  confirm(event) {
    event.preventDefault(); // Prevent the form submission
    const confirmation = confirm("Are you sure you want to delete this item?");
    if (confirmation) {
      // Submit the form if the user confirms
      this.element.closest("form").submit();
    }
  }
}
