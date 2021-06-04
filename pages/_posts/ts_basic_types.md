---
title: "The Basic Types of TypeScript"
author: "Sander Trollebø Byrkjeland"
date: "2021-02-16"
blurb: "Description of the different types in TypeScript"
tags: "coding", "web development", "TypeScript"
slug: "typescript-basics"
---

# The Basic Types of Typescript

Typescript is a syntactical superset of Javascript, which adds static typing to the language.

Static typing means that the compiler enforces that values of, for example a variable, use the same type. Here's an example:

```typescript
let value = 10;
value = "Now I'm a string"; // error: Type 'string' is not assignable to type 'number'.
```

This makes the code much more easy to read, understand and debug.

Typescript has the same types as Javascript, ie: _boolean, number, string, array, object, null_ and _undefined_, as well asn some extra ones: _tuple, enum, unknown, any, void_ and _never_. We'll tackle the normal javascript types first.

## Boolean

A _boolean_ is the most basic type of true or false value. You would define it like this in TS:

```TypeScript
let pizzaIsGood: boolean = true;
```

## Number

Just like in Javascript, all numbers in TS are either floating point values or BigIntegers. Floating points get the type **number**, while BigIntegers get the type **bigint**.
Typescript supports decimal. hexadecimal, binary and octal literals.

```typescript
let number: number = 42;
let decimal: number = 3.14159;
let hex: number = 9702e6;
let binary: number = 1001010;
let octal: number = 0o744;
let big: bigint = 500n;
```

## String

Typescript supports the use of single quotes ('), double quotes (") as well as template strings, which uses backticks ( ` ).

```typescript
let name: string = "Brendan Eich";
name = "Bill Gates";

let language: string = TypeScript;
let sentence: `I love ${language}`;

// Will output "I love TypeScript"
```

## Array

There are two ways to define arrays in TypeScript:

```typescript
let toDo: string[] = ["do dishes", "Take shower"];

let toDo: Array<string> = ["do dishes", "Take shower"];
```

Both ways are valid. The important part is to define _what_ type of array it is you're making.

## Object

Objects define anything that is not _boolean, number, bigint, string, symbol, null_ or _undefined_.

```ts
let newFood: object = {};

newFood = "taco"; // Type 'string' is not assignable to type 'object'

newFood = {
	name: "sushi",
	isGood: true,
};
```

## Null and Undefined

## Tuple

A tuple allow you to define an array with a fixed number of known elements, but does not necessarily have the same types. For example, maybe you need to define an array containing both a string and a number. You can define it like this:

```typescript
let a: [string, number];
a = ["Hello", 69]; // Ok and correct
a = [69, "Nice"]; // Error
```

The types must be initialized in the order you defined them. If not they will produce and error.

## Enum

## Unknown

## Any

## Void

## Never

## Type assertions
