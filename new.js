const input = [
    { "pincode" : 382225, "state" : "Gujarat", "city" : "Bavala" },
    { "pincode" : 600060, "state" : "Tamil Nadu", "city" : "Chennai" },
    { "pincode" : 600062, "state" : "Tamil Nadu", "city" : "Chennai" },
    { "pincode" : 600095, "state" : "Tamil Nadu", "city" : "Chennai" },
    { "pincode" : 523115, "state" : "Andhra Pradesh", "city" : "Gudlluru" },
    { "pincode" : 382240, "state" : "Gujarat", "city" : "Bavala" },
    { "pincode" : 638403, "state" : "Tamil Nadu", "city" : "Palladam" },
    { "pincode" : 370602, "state" : "Gujarat", "city" : "Dayapar" }
]

const output1 = {
    'Tamil Nadu': {
        'Chennai': [600060, 600062, 600095], 
        'Palladam': [638403]
    },
    'Gujarat': { 
        'Bavala': [382225, 382240],
        'Dayapar': [370602]
    },
    'Andhra Pradesh': { 
        'Gudlluru': [523115]
    }
}

let output = {};
input.forEach(item => {
    const { state, city, pincode } = item;
    if (!output[state]) {
        console.log("!output[state]",item);
        output[state] = {};
    }
    if (!output[state][city]) {
        output[state][city] = [];
    }
    output[state][city].push(pincode);
});

console.log("India", output);