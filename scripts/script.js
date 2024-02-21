function callAId(name) {
    return parseInt(document.getElementById(name).innerText)
}


let allSitButton = document.getElementsByClassName('seat-key');
for (let sit of allSitButton) {
    
    sit.addEventListener('click', function (event) {
        let totalSeat = callAId('total-seat');
        let totalPrice = callAId('total-price');
        let grandPrice = callAId('grand-total');
        // 1 person 4 ticket
        if (totalSeat <= 3) {
            // Add in list
            let newSeat = document.createElement('tr');
            newSeat.setAttribute('id', event.target.innerText);
            newSeat.classList.add('font-inter', 'text-base', 'text-[#03071299]', 'border-b-0')
            newSeat.innerHTML = `
            <td>${event.target.innerText}</td>
            <td>Economoy</td>
            <td>550</td>
            `
            // sit unbooked
            if (event.target.classList.contains('checked')) {
                //Seat Checked in classlist
                event.target.classList.remove('checked');

                // totalSeat Select
                document.getElementById('total-seat').innerText = totalSeat - 1;
                console.log('Seat Unbook')

                // totalPrice & grandPrice Select
                document.getElementById('total-price').innerText = totalPrice - 550;
                document.getElementById('grand-total').innerText = grandPrice - 550;

                // Seat background change
                event.target.style.backgroundColor = '#F7F8F8';

                // Seat remove from list
                document.getElementById(event.target.innerHTML).remove()
            }
            // sit book
            else {
                //Seat Checked in classlist
                event.target.classList.add('checked');
                
                // totalSeat Select
                document.getElementById('total-seat').innerText = totalSeat + 1;
                console.log('Seat Book')
                
                // totalPrice & grandPrice Select
                document.getElementById('total-price').innerText = totalPrice + 550;
                document.getElementById('grand-total').innerText = grandPrice + 550;
                
                // Seat background change
                event.target.style.backgroundColor = 'yellow';
                
                // Seat added in list
                document.getElementById('tbody').appendChild(newSeat)
            }
        }
        else {
            // sit unbooked 
            if (event.target.classList.contains('checked')) {
                //Seat Checked in classlist
                event.target.classList.remove('checked');
    
                // totalSeat Select
                document.getElementById('total-seat').innerText = totalSeat - 1;
                console.log('Seat Unbook')
    
                // totalPrice & grandPrice Select
                document.getElementById('total-price').innerText = totalPrice - 550;
                document.getElementById('grand-total').innerText = grandPrice - 550;
    
                // Seat background change
                event.target.style.backgroundColor = '#F7F8F8';
    
                // Seat remove from list
                document.getElementById(event.target.innerHTML).remove()
            }
            document.getElementById('warning-4sit').removeAttribute('class', 'hidden')
        }

    })
}


function discount(total) {
    let newSeat = document.createElement('tr');
    // newSeat.setAttribute('id', event.target.innerText);
    newSeat.classList.add('font-inter', 'text-base', 'font-semibold', 'text-[#030712]', 'border-b-0')
    newSeat.innerHTML = `
            <td>Discount</td>
            <td></td>
            <td>BDT <span id="">${parseInt(total)}</span></td>
            `;
    document.getElementById('tbody-discount').appendChild(newSeat);
}

function cuponClick() {
    let x = document.getElementById('cupon-input').value;
    if (x == 'NEW15') {
        document.getElementById('grand-total').innerText = callAId('total-price') - ((callAId('total-price') * 15) / 100);
        let discountPrice = (callAId('total-price') * 15) / 100;
        discount(discountPrice);
        document.getElementById('cupon-button').disabled = true;
    }
    else if (x == 'Couple 20') {
        document.getElementById('grand-total').innerText = callAId('total-price') - ((callAId('total-price') * 20) / 100);
        let discountPrice = (callAId('total-price') * 20) / 100;
        discount(discountPrice);
        document.getElementById('cupon-button').disabled = true;
    }
    else {
        console.log('problem')
    }
    // console.log(document.getElementById('cupon-input').value);
}