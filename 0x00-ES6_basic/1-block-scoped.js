export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;

    // Correct the variable name to match the parameter
    if (trueOrFalse) {
        const task = true;  // This shadows the outer task variable
        const task2 = false; // This shadows the outer task2 variable
    }

    return [task, task2]; // Returns the outer task and task2
}
