#!/usr/bin/env node
"use strict";

const who = ["My dog", "My grandma", "The mailman", "My bird", "My neighbor"];
const action = ["ate", "spilled", "crashed", "lost", "broke"];
const what = ["my homework", "my phone", "the car", "the key", "the internet", "my laptop charger"];
const when = ["today", "yesterday", "this morning", "last night", "a few minutes ago"];

function getRandomItem(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

const excuse = `${getRandomItem(who)} ${getRandomItem(action)} ${getRandomItem(what)} ${getRandomItem(when)}.`;

console.log(excuse);
