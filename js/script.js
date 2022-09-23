const symbols = ["!", "@", "#", "$","?","%", "&", "*",];
const answerArr =  symbols[Math.floor(Math.random()*symbols.length)];
let state = {
    pages: [
        {
        pageNum: 0,
        header: "I can read your mind",
        nextBtn: '',
        example: '',
        helper: '',
        resetBtn: '',
        goBtn: 'GO <i class="bi bi-forward"></i>',
        symbols: '',
        },
        {
        pageNum: 1,
        header: "Pick a number from 01 -99",
        nextBtn: 'Next <i class="bi bi-forward"></i>',
        example: '',
        helper: 'when you have your number click next',
        resetBtn: 'Reset <i class="bi bi-recycle"></i>',
        goBtn: '',
        symbols: '',            
        },
        {
        pageNum: 2,
        header: "Add both digits together to get a new number",
        nextBtn: 'Next <i class="bi bi-forward"></i>',
        example: '14 is 1 + 4 = 5',
        helper: 'click next to proceed',
        resetBtn: 'Reset <i class="bi bi-recycle"></i>',
        goBtn: '',
        symbols: '',            
        },
        {
        pageNum: 3,
        header: "Subtract your new number from the original number",
        nextBtn: 'Next <i class="bi bi-forward"></i>',
        example: 'Ex: 14 - 5 = 9',
        helper: 'click next to proceed',
        resetBtn: 'Reset <i class="bi bi-recycle"></i>',
        goBtn: '',
        symbols: '',            
        },
        {
        pageNum: 4,
        header: symbolFun (),
        nextBtn: 'Reveal <i class="bi bi-question-circle"></i>',
        example: 'Find your new number',
        helper: 'Note the symbol beside the number',
        resetBtn: 'Reset <i class="bi bi-recycle"></i>',
        goBtn: '',
        symbols: '',            
        },
        {
        pageNum: 5,
        header: `Your symbol is ${answerArr}`,
        nextBtn: '',
        example: '',
        helper: 'Note the symbol beside the number',
        resetBtn: 'Reset <i class="bi bi-recycle"></i>',
        goBtn: '',
        symbols: '',            
        },
    ],
    currentPage: 0,
    symbols: [],
    answer: '',
};
//Tie HTML elements to variables
const nextBtn = document.getElementById('nextBtn');
const resetBtn = document.getElementById('resetBtn');
const goBtn = document.getElementById('goBtn');
const example = document.getElementById('example');
const helper = document.getElementById('helper');
const header = document.getElementById('header');

//Helper function to update HTML element values
function updatePage () {
    header.textContent = state.pages[state.currentPage].header;
    helper.textContent = state.pages[state.currentPage].helper;
    nextBtn.innerHTML = state.pages[state.currentPage].nextBtn;
    goBtn.innerHTML = state.pages[state.currentPage].goBtn;
    resetBtn.innerHTML = state.pages[state.currentPage].resetBtn;
    example.textContent = state.pages[state.currentPage].example;
}; 

//Helper function to clear buttons
function clearBtns () {
    if (goBtn.innerHTML === '') {
        goBtn.hidden = true;
    } else {
        goBtn.hidden = false;
    }
    if (resetBtn.innerHTML === '') {
        resetBtn.hidden = true;
    } else {
        resetBtn.hidden = false;
    }
    if (nextBtn.textContent === '') {
        nextBtn.hidden = true;
    } else {
        nextBtn.hidden = false;
    }
};

//
document.addEventListener('DOMContentLoaded', () => {
    state.currentPage = 0;
    updatePage ();
    clearBtns ();
});

//Page increment and reset function
resetBtn.addEventListener('click', () => {
    state.currentPage = 0;
    updatePage ();
    clearBtns ();
});

nextBtn.addEventListener('click', () => {
    state.currentPage ++;
    updatePage ();
    clearBtns ();
});

goBtn.addEventListener('click', () => {
    state.currentPage ++;
    updatePage ();
    clearBtns ();
});

//Random array generator
function symbolFun () {
    let symbolArray = [];
    for (i = 0; i < 100; i++) {
        let random = Math.floor(Math.random()*symbols.length);
        if (i % 9 === 0) {
            symbolArray.push(`${i} - ${answerArr}`);
        } else {
            symbolArray.push(`${i} - ${symbols[random]}`);
        }
    };
    return symbolArray;
};