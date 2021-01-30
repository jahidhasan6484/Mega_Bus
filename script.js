// Increasing first class ticket
document.getElementById('first-class-increase').addEventListener('click', function () {
    handleTicketChange('first-class', true);
});
// Decreasing first class ticket
document.getElementById('first-class-decrease').addEventListener('click', function () {
    handleTicketChange('first-class', false);
});
// Increasing economy ticket
document.getElementById('economy-increase').addEventListener('click', function () {
    handleTicketChange('economy', true);
});
// Decreasing economy ticket
document.getElementById('economy-decrease').addEventListener('click', function () {
    handleTicketChange('economy', false);
});

// Function for ticket control 
function handleTicketChange(ticket, isIncreasing) {
    const ticketCount = getInputValue(ticket);
    let ticketNewCount = ticketCount;
    if (isIncreasing == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncreasing == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticket + '-count').value = ticketNewCount;
    calculateTotal();
}

// calculation of ticket prices
function calculateTotal() {
    const firstClassCount = getInputValue('first-class');
    const economyCount = getInputValue('economy');

    // Calculating subtotal
    const subTotal = firstClassCount * 150 + economyCount * 100;
    document.getElementById('subtotal-amount').innerText = '$' + subTotal;

    // Calculating VAT
    const vat = Math.round(subTotal * 0.1);
    document.getElementById('vat-amount').innerText = '$' + vat;

    // Calculating Total
    const Total = subTotal + vat;
    document.getElementById('total-amount').innerText = '$' + Total;
}

// calculating the ticket amount
function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}
// Book Now button control
const bookNow = document.getElementById('bookNow');
bookNow.addEventListener("click", function () {
    const finalFirstClassTicket = getInputValue('first-class');
    const finalEconomyTicket = getInputValue('economy');

    if (finalFirstClassTicket == 0 && finalEconomyTicket == 0) {
        alert("You don't select any ticket!");
    }
    else {
        const bookingDetails = document.getElementById("booking-details");
        bookingDetails.style.display = "block";
        const bookingForm = document.getElementById("booking-form");
        bookingForm.style.display = "none";

        const journeyFrom = document.getElementById("journeyFrom").value;
        document.getElementById("ticketJourneyFrom").innerText = journeyFrom;


        const journeyTo = document.getElementById("journeyTo").value;
        document.getElementById("ticketJourneyTo").innerText = journeyTo;

        const firstClassCount = document.getElementById("first-class-count").value;
        document.getElementById("ticketFirstClass").innerText = firstClassCount;

        const economyCount = document.getElementById("economy-count").value;
        document.getElementById("ticketEconomyClass").innerText = economyCount;

        const ticketTotalAmount = document.getElementById("total-amount").innerText;
        document.getElementById("ticketTotal").innerText = ticketTotalAmount;
    }
});
// Cancel Button Control
const cancelTicket = document.getElementById("cancelTicket");
cancelTicket.addEventListener("click", function () {
    document.getElementById("booking-details").style.display = "none";
    document.getElementById("booking-form").style.display = "block";
});
// Confirm Button Control
const confirmTicket = document.getElementById("confirmTicket");
confirmTicket.addEventListener("click", function () {
    document.getElementById("booking-details").style.display = "none";
    document.getElementById("confirmTicketAlert").style.display = "block";;
});
// Finish Button Control
const finishButton = document.getElementById("finishButton");
finishButton.addEventListener("click", function () {
    document.getElementById("booking-form").style.display = "block";
    document.getElementById("confirmTicketAlert").style.display = "none";
});