export const getNewTaskId = (array) => {
    let maxValue = array.reduce(function(a, b) {
        return (a.id > b.id) ? a : b;
    });

    return maxValue.id + 1;
}
