export default function taskBlock(trueOrFalse) {
    let task = false;
    let task2 = true;

    // Correct the variable name to match the parameter
    if (trueOrFalse) {
        let task = true;  // This shadows the outer task variable
        let task2 = false; // This shadows the outer task2 variable
    }

    return [task, task2]; // Returns the outer task and task2
}
