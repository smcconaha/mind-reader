//let state = {
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
        }
        {
        pageNum: 1,
        header: "Pick a number from 01 -99",
        nextBtn: 'Next',
        example: '',
        helper: 'when you have your number click next',
        resetBtn: 'Reset',
        goBtn: '',
        symbols: '',            
        }
        {
        pageNum: 2,
        header: "Add both digits together to get a new number",
        nextBtn: 'Next',
        example: '14 is 1 + 4 = 5',
        helper: 'click next to proceed',
        resetBtn: 'Reset',
        goBtn: '',
        symbols: '',            
        }
        {
        pageNum: 3,
        header: "Subtract your new number from the original number",
        nextBtn: 'Next',
        example: 'Ex: 14 - 5 = 9',
        helper: 'click next to proceed',
        resetBtn: 'Reset',
        goBtn: '',
        symbols: '',            
        }
        {
        pageNum: 4,
        header: "Symbols",
        nextBtn: 'Next',
        example: 'Find your new number',
        helper: 'Note the symbol beside the number',
        resetBtn: 'Reset',
        goBtn: '',
        symbols: '',            
        }
        {
        pageNum: 5,
        header: "Symbol",
        nextBtn: '',
        example: 'Your symbol is',
        helper: 'Note the symbol beside the number',
        resetBtn: 'Reset',
        goBtn: '',
        symbols: '',            
        }
    ]
    currentPage:[],
    symbols:'',
    answer:'',
//Tie HTML elements to variables
const nextBtn = document.getElementById('nextBtn');
const resetBtn = document.getElementById('resetBtn');
const goBtn = document.getElementById('goBtn');
const example = document.getElementById('example');
const helper = document.getElementById('helper');
const header = document.getElementById('header');

nextBtn.addEventListener('click', () => {
    alert('you clicked a button');
});

resetBtn.addEventListener('click', () => {
    alert('you clicked a button');
});

goBtn.addEventListener('click', () => {
    alert('you clicked a button');
});

