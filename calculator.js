// Variables Declaration
    let result = '';
    let operation = '';
    let operation_new_number = '';

// Action Maker

    const number_button_clicked = e => {
        if(operation == ''){
            result += e.target.dataset.number;
            display(result);        
        }
        else if(operation == '+'){
            operation_new_number += e.target.dataset.number;
            display(operation_new_number);
        }
        else if(operation == '-'){
            operation_new_number += e.target.dataset.number;
            display(operation_new_number);
        }
        else if(operation == '*'){
            operation_new_number += e.target.dataset.number;
            display(operation_new_number);
        }
        else{
            operation_new_number += e.target.dataset.number;
            display(operation_new_number);
        }

        
        
    };

    const add_button_clicked = () => {
        operation = '+';
    };
    const min_button_clicked = () => {
        operation = '-';
    };
    const mult_button_clicked = () => {
        operation = '*';
    };
    const div_button_clicked = () => {
        operation = '/';
    };

    let equals_button_clicked = () => {
        if(operation == '+'){
            result = Number(result) + Number(operation_new_number);
        }
        else if(operation == '-'){
            result = Number(result) - Number(operation_new_number);
        }
        else if(operation == '*'){
            result = Number(result) * Number(operation_new_number);
        }
        else{
            result = Number(result) / Number(operation_new_number);
        }
        display(result);
        operation='';
        operation_new_number='';
    };

    let display = (value) => {
        document.getElementById('display').innerText = value;
    };

// Event Listen
    let add_button = document.getElementById('add_button');
    add_button.addEventListener('click',add_button_clicked);

    let minus_button = document.getElementById('minus_button');
    minus_button.addEventListener('click',min_button_clicked)

    let mult_button = document.getElementById('mult_button');
    mult_button.addEventListener('click',mult_button_clicked);

    let div_button = document.getElementById('div_button');
    div_button.addEventListener('click',div_button_clicked)

    let equals_button = document.getElementById('equals_button');
    equals_button.addEventListener('click',equals_button_clicked);

    let number_buttons = document.querySelectorAll('.number_button');
    number_buttons.forEach(single_number_buttons => {
        single_number_buttons.addEventListener('click',number_button_clicked);
    });