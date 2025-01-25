-   To create a configuration file for typescript, run the command `tsc --init` in the terminal. From here you can comment out and adjust various options to your liking. Here are a few:

    -   rootDir - indicates the directory that contains our source files - where the typescript files are located
    -   'outDir' is the directory that contains our javascript files - where the javascript files are generated on compiling the source files.
    -   the 'target' property indicates the version of the javascript the the typescript compiler is going to generate
    -   noEmitOnError (recommended) - if set to true, it prevents the compiler from generating any javascript files if there are errors in the source files

-   Use 'Pascal Casing' for `interface`, `enum` and `type alias` names
-   Type Aliases can be used with primitives and unions unlike interfaces
    ````
    e.g type Point = number | string
    const p1: Point = 1```
    ````
-   In TypeScript, if you have a large number, you can make it more readable by using snake_case where you would use commas. For example:
    ```
    let sales: number = 123_456_789
    ```
-   If you initialize a variable with a certain data type, you don't need to annotate it. TypeScript will automatically infer the type and expect you to retain that type when reassigning the variable
-   TypeScript offers some awesome intellisense features when performing certain operations due to knowing the type of data to expect:
    ```
    For example:
    let numbers: number[] = [1, 2, 3, 4]
    numbers.forEach(n => n...) - TypeScript will suggest a list of operations that you can perform with a number since it knows n is a number
    ```
-   Under the hood, Tuples in TypeScript are treated as plain javascript arrays. This can cause problems when implementing certain array methods like push
    ```
    const person: [number, string] = [1, 'John'];
    person.push(true)
    console.log(person) // [1, 'John', true]
    ```
-   For `Enums`, if you declare a numeric value to the first member, the following member are given automatic values, incrementing the first member's value by 1 for each consecutive member. If you set the value of any of the members as a string, then you must explicitly set the value of all other members. `What about giving a numeric value to a random member?` The members before the target member will be assigned values automatically starting with 0 for the first member. The members after the assigned member will have values starting from the assigned value + 1
-   You can use `const` when initializing `enums` if you want to generate a more `optimized javascript` code representation
-   Always Enable the following compiler options to enforce best practice when writing TypeScript for functions
    -   noUnusedLocals
    -   noUnusedParameters
    -   noImplicitReturns
-   Avoid as much as you can not declaring types explicitly and leaving it to TypeScript. This is a bad practice as TypeScript may sometimes assign the type `any` especially when declaring variables without initialization which may not be the desired behavior and might cause issues in future.
-   To limit the values you can assign to a variable use literal types, i.e the exact value(s). e.g `let quantity: 50 | 100`
