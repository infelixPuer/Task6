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
//