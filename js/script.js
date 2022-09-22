let state = {
    pages: [
        {
        pageNum: 0,
        header: "I can read your mind",
        nextBtn: '',
        example: '',
        helper: '',
        resetBtn: '',
        goBtn: 'GO',
        symbols: '',
        },
        {
        pageNum: 1,
        header: "Pick a number from 01 -99",
        nextBtn: 'Next',
        example: '',
        helper: 'when you have your number click next',
        resetBtn: 'Reset',
        goBtn: '',
        symbols: '',            
        },
        {
        pageNum: 2,
        header: "Add both digits together to get a new number",
        nextBtn: 'Next',
        example: '14 is 1 + 4 = 5',
        helper: 'click next to proceed',
        resetBtn: 'Reset',
        goBtn: '',
        symbols: '',            
        },
        {
        pageNum: 3,
        header: "Subtract your new number from the original number",
        nextBtn: 'Next',
        example: 'Ex: 14 - 5 = 9',
        helper: 'click next to proceed',
        resetBtn: 'Reset',
        goBtn: '',
        symbols: '',            
        },
        {
        pageNum: 4,
        header: "Symbols",
        nextBtn: 'Reveal',
        example: 'Find your new number',
        helper: 'Note the symbol beside the number',
        resetBtn: 'Reset',
        goBtn: '',
        symbols: '',            
        },
        {
        pageNum: 5,
        header: "Symbol",
        nextBtn: '',
        example: 'Your symbol is',
        helper: 'Note the symbol beside the number',
        resetBtn: 'Reset',
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
    nextBtn.textContent = state.pages[state.currentPage].nextBtn;
    goBtn.textContent = state.pages[state.currentPage].goBtn;
    resetBtn.textContent = state.pages[state.currentPage].resetBtn;
    example.textContent = state.pages[state.currentPage].example;
}; 

//Helper function to clear buttons
function clearBtns () {
    if (goBtn.textContent === '') {
        goBtn.hidden = true;
    } else {
        goBtn.hidden = false;
    }
    if (resetBtn.textContent === '') {
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

const symbols = ["!", "@", "#", "$", "%", "&", "*",];

function symbolFun () {
    let symbolArray = [];
    const answerIndex = symbols.length % 9 === 0;
    for (i = symbolArray.length; i < 100; i++) {
        let random = Math.floor(Math.random()*symbols.length);
        symbolArray.push(`${i} - ${symbols[random]}`);
        if (answerIndex) {
            symbolArray[i].replace(symbolArray[i],symbolArray[0]);
        }
    };
    return symbolArray;
};

/*;
if (answerIndex === 0) {
    answerIndex == "Answer Symbol";
} else {

}

Symbols Function
function symbolDisplay () {
    
    for (i = symbols.length; i < 100; i++) {
        symbols.push(symbols);
    }
    return symbols;
};*/
