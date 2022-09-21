# INIT: Object definitions
pages: {
    header: ''
    nextBtn: boolean
    example: ''
    helper: ''
    resetBtn: boolean
    goBtn: boolean
    symbols (array of 9): []
    pages: {
        headerText: "I can read your mind"
        exampleText: ""
        helperText: ""
        pageNum: 0
        footBtnText: "GO"
    }
    currentPage
    symbols
    answers   
}
---
# What are the states?
---

## Page 0
header: TRUE
nextBtn: invisible
example: invisible
helper: invisible
resetBtn: invisible
goBtn: TRUE
symbols (array of 9): invisible
pages
    headerText: "I can read your mind"
    exampleText: ""
    helperText: ""
    pageNum: 0
    footBtnText: "GO"

---

## Page 1
header: TRUE
nextBtn: TRUE
example: invisible
helper: TRUE
resetBtn: TRUE
goBtn: invisible
symbols (array of 9): invisible
pages
    headerText: "Pick a number from 01 - 99"
    exampleText: ""
    helperText: "when you have your number click next"
    pageNum: 1
    footBtnText: "ICON"
    
---

## Page 2
header: TRUE
nextBtn: TRUE
example: TRUE
helper: TRUE
resetBtn: TRUE
goBtn: invisible
symbols (array of 9): invisible
pages
    headerText: "Add both digits together to get a new number"
    exampleText: "14 is 1 + 4 = 5"
    helperText: "click next to proceed"
    pageNum: 2
    footBtnText: "ICON"
    
---

## Page 3
header: TRUE
nextBtn: TRUE
example: TRUE
helper: TRUE
resetBtn: TRUE
goBtn: invisible
symbols (array of 9): invisible
pages
    headerText: "Subtract your new number from the original number"
    exampleText: "Ex: 14 - 5 = 9"
    helperText: "click next to proceed"
    pageNum: 3
    footBtnText: "ICON"
    
---

## Page 4
header: TRUE
nextBtn: TRUE (reveal)
example: TRUE
helper: TRUE
resetBtn: TRUE
goBtn: invisible
symbols (array of 9): TRUE
pages
    headerText: "Symbols"
    exampleText: "Find your new number"
    helperText: "Note the symbol beside the number"
    pageNum: 4
    footBtnText: "ICON"
    
---

## Page 5
header: TRUE
nextBtn: invisible
example: TRUE
helper: TRUE
resetBtn: TRUE
goBtn: invisible
symbols (array of 9): invisible
pages
    headerText: "Symbol"
    exampleText: "Your symbol is"
    helperText: "SYMBOL FN"
    pageNum: 5
    footBtnText: "ICON"

---

## Init
nextPage()
reset()
randomizeHelper?
updatePage()
    IF headerText
        set header to new text
    IF buttonText
        set button to text
        show the button
    ELSE
        change button to hidden
        ...if there is helper text
randomizeSymbols()
    randomize list of 9
    consider looping thru each one and then modulo (%)comes in
    or randomizeSymbols ()
        randomize list of 9
        loop to 100
            create element in js for this(for the number to left then whatever symbol or modulo on) = create element...i can be the number %9 on the random
nextPage()
reset()

---
# FUNCTIONALITY
---
INIT

START on currentPage 0

IF CLICK on the goBtn or nextBtn
    THEN increment currentPage by one
ENDIF

IF CLICK on resetBtn
    THEN currentPage is reset to 0
END IF

FUNCTION
    IF html element does not contain content
    THEN set to hidden
ENDFUNCTION

IF page 0 
    then header and goBtn are visible
ELSE IF page 1
    then header, nextBtn, helper, and resetBtn are visible
ELSE IF page 2
    then header, nextBtn, example, helper, and resetBtn are visble
ELSE IF page 3
    then header, nextBtn, example, helper, and resetBtn are visible
ELSE IF Page 4
    the header with symbols array, nextBtn(reveal), example, helper, and resetBtn are visible
ELSE IF Page 5
    the header with One symbol, example, helper, and resetBtn are visible
ENDIF

