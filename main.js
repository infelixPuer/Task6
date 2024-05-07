// Task 1: Quasi-Tagged Templates
function localize(template, ...values) {
    const translation = translations[language];
    return translation[values[0]];
}

const translations = {
    en: {
        greet: "Hello",
        intro: "Welcome to our website"
    },
    fr: {
        greet: "Bonjour",
        intro: "Bienvenue sur notre site web"
    }
};

const language = "en"; // Change to "en" for English
const greeting = "greet";
const introduction = "intro";
const localizedGreeting = localize`${greeting}`;
const localizedIntroduction = localize`${introduction}`;
console.log(localizedGreeting); // Expected: "Bonjour" (for language "fr")
console.log(localizedIntroduction); // Expected: "Bienvenue sur notre site web" (for language "fr")

// Task 2: Advanced Tagged Template
function highlightKeywords(template, keywords) {
    const strings = template.split(" ");

    for (let i = 0; i < strings.length; ++i) {
        let string = strings[i];
        if (string[0] !== "$") continue;

        const index = Number.parseInt(string[2]);

        if (index === undefined || isNaN(index))
            throw new Error(`${string} has non-number expression!`);

        strings[i] = `<span class='highlight'>${keywords[index]}</span>`;
    }

    return strings.join(" ");
}

const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";

const highlighted = highlightKeywords(template, keywords);

console.log(highlighted);

// Task 3: Multiline Tagged Template
function multiline(strings) {
    let string = strings[0];

    if (string[0] === "\n") string = string.slice(1, -1);
    if (string[string.length - 1] === "\n") string = string.slice(-2, 0);

    const lines = string.split("\n");

    for (let i = 0; i < lines.length; ++i) {
        lines[i] = `${i + 1} ` + lines[i];
    }

    return lines.join("\n");
}

const code = multiline`
function add(a, b) {
    return a + b;
}
`;

console.log(code);

// Task 4: Implementing Debounce Function
function debounce(func, delay) {
    let timeoutId;

    return value => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func(value);
        }, delay);
    }
}

function debouncedSearch(query) {
    // Perform search operation with the query
    console.log("Searching for:", query);
}

// const debouncedSearchHandler = debounce(debouncedSearch, 300);
//
// const inputElement = document.getElementById("search-input");
// inputElement.addEventListener("input", event => {
//     debouncedSearchHandler(event.target.value);
// });

// Task 5: Implementing Throttle Function
let lastExecutionTime = 0;
function throttle(func, interval) {
    return value => {
        const currentTime = Date.now();

        if (currentTime - lastExecutionTime >= interval) {
            console.log(`Last execution time: ${lastExecutionTime}\nCurrent time: ${currentTime}\nElapsed time: ${currentTime - lastExecutionTime}`)
            func(value);
            lastExecutionTime = currentTime;
        }
    };
}

function onScroll(event) {
    // Handle scroll event
    console.log("Scroll event:", event);
}

// const throttledScrollHandler = throttle(onScroll, 1000);
//
// window.addEventListener("scroll", throttledScrollHandler);

// Task 6: Curring Function Implementation
function curry(func, arity, ...args) {
    if (args.length >= arity) return func(...args);

    return function(...nextArgs) {
        return curry(func, arity, ...args, ...nextArgs);
    };
}

function multiply(a, b, c) {
    return a * b * c;
}

const curriedMultiply = curry(multiply, 3);

const step1 = curriedMultiply(2); // Returns a curried function
const step2 = step1(3); // Returns a curried function
const result = step2(4); // Returns the final result: 2 * 3 * 4 = 24

console.log("Result:", result); // Expected: 24