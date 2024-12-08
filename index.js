//inputFieldValueById functionality
function inputFieldValueById(id) {
    const inputValue = Number(document.getElementById(id).value);
    return inputValue;
}

// textFieldValuById functionality
function textFieldValuById(id) {
    const cardAmount = Number(document.getElementById(id).innerText);
    return cardAmount;
}

// showModal function to show the modal window when the donation button is clicked.
function showModal(modal) {
    modal.showModal();
}

// Section hidden/unhidden
function showSection(sectionId) {
    document.getElementById('blogs-container').classList.add("hidden");
    document.getElementById('history-container').classList.add("hidden");
    document.getElementById(sectionId).classList.remove("hidden");
}

// blogs section show
document.getElementById('blogs-btn').addEventListener("click", function () {
    showSection('blogs-container');
})

// history section show
document.getElementById('history-btn').addEventListener("click", function () {
    showSection('history-container');
})

// blogs button and history button bg-[#B4F461] state change
const blogsButton = document.getElementById('blogs-btn');
const historyButton = document.getElementById('history-btn');
document.getElementById('blogs-btn').addEventListener('click', function () {
    blogsButton.classList.add('bg-[#B4F461]', 'hover:bg-[#B4F461]');
    historyButton.classList.remove('bg-[#B4F461]');
});

document.getElementById('history-btn').addEventListener('click', function () {
    historyButton.classList.add('bg-[#B4F461]');
    blogsButton.classList.remove('bg-[#B4F461]', 'bg-white');
});

// calculateDonation function
function calculateDonation(btnId, inputId, cardAmountId, balanceId, cardTitleId, modalId) {
    document.getElementById(btnId).addEventListener('click', function (e) {
        e.preventDefault();

        const inputAmount = inputFieldValueById(inputId);
        const cardAmount = textFieldValuById(cardAmountId);
        const balance = document.getElementById(balanceId).innerText;
        const cardTitle = document.getElementById(cardTitleId).innerText;
        const date = new Date();

        if (isNaN(inputAmount) || inputAmount <= 0) {
            return alert("Please enter a valid number!");
        } else if (balance < inputAmount) {
            return alert("Insufficient balance!");
        } else {
            const presentAmount = inputAmount + cardAmount;
            document.getElementById(cardAmountId).innerText = presentAmount;
            document.getElementById(balanceId).innerText = balance - inputAmount;
            document.getElementById(inputId).value = '';
            document.getElementById('history-container').innerHTML += `
            <div id="history-available" class="border rounded-xl p-4 lg:p-8 space-y-2 lg:space-y-4">
                <h1 class="text-xl font-bold">${inputAmount} Taka ${cardTitle}</h1>
                <p>Date: ${date}</p>
            </div>
            `;
            if (document.getElementById('history-available')) {
                document.getElementById('history-not-available').classList.add('hidden');
            } else {
                document.getElementById('history-not-available').classList.remove('hidden');
            }
            const modal = document.getElementById(modalId);
            document.getElementById(modalId).innerHTML = `
            <div class="modal-box text-center w-80 lg:w-96 mx-auto flex flex-col justify-center items-center">
            <h3 class="lg:text-4xl text-2xl font-bold lg:font-extrabold pb-5">Congrates!</h3>
            <h4 class="font-bold text-2xl"><i class="fa-solid fa-bangladeshi-taka-sign"></i> ${inputAmount}</h4>
            <div>
                <p class="py-4 text-lg font-semibold">You Have Donated for Humankind</p>
                <p>Successfully donated!</p>
            </div>
            <div class="modal-action">
                <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                    <button class="btn px-6 lg:px-8 bg-[#B4F461] hover:bg-red-500 hover:text-white transition-all duration-500 ease-in-out">Close</button>
                </form>
            </div>
            </div>`;
            return modal.showModal();
        }
    });
}

// Initialize-1
calculateDonation(
    'donation-btn-card-1',
    'input-card-1',
    'amount-card-1',
    'balance-id',
    'title-card-1',
    'my_modal_1'
);

// Initialize-2
calculateDonation(
    'donation-btn-card-2',
    'input-card-2',
    'amount-card-2',
    'balance-id',
    'title-card-2',
    'my_modal_2'
);

// Initialize-3
calculateDonation(
    'donation-btn-card-3',
    'input-card-3',
    'amount-card-3',
    'balance-id',
    'title-card-3',
    'my_modal_3'
);

// Initialize-4
calculateDonation(
    'donation-btn-card-4',
    'input-card-4',
    'amount-card-4',
    'balance-id',
    'title-card-4',
    'my_modal_4'
);

// Initialize-5
calculateDonation(
    'donation-btn-card-5',
    'input-card-5',
    'amount-card-5',
    'balance-id',
    'title-card-5',
    'my_modal_5'
);

// Initialize-6
calculateDonation(
    'donation-btn-card-6',
    'input-card-6',
    'amount-card-6',
    'balance-id',
    'title-card-6',
    'my_modal_6'
);