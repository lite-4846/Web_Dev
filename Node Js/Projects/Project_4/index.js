import {franc} from 'franc';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const langs = require('langs');
const sample = process.argv[2];

// console.log(sample);
// console.log(franc(sample));
// console.log(langs.all());

const code = franc(sample);
if(code === 'und'){
    console.log('Sorry Cant find what you are looking for');
} else {
    const guessedLang = langs.where('3', code);
    console.log(guessedLang.name);
}

