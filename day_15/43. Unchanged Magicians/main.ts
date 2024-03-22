// 43. Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians : string[] = ['Harry Houdini', 'David Copperfield', 'Penn & Teller']

function show_magicians(magicians : string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    })};
function make_great(magicians: string[]): string[] {
    let greatMagicians : string[]= [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}

let greatMagicians = make_great(magicians.slice()); 
console.log("Original magicians:");
show_magicians(magicians); 
console.log("Great magicians:");
show_magicians(greatMagicians); 
