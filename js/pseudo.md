## What are my objects?
header: ""
next/reveal: ""
helper: ""
example: ""
reset/go: ""
symbols: [] 9
pages
    exampleText: ""
    helperText: ""
    pageNum: int
    btnText: ""
    headerText: ""
    
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

