//Simple knapsack problem algorithm

var cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
];

var capacity = 20;



function maxDuffelBagValue(types, capacity) {
    // write the body of your function here
	
    var maxValueAtCapacity = [];
    for(var i = 0; i <= capacity; i++) {
        maxValueAtCapacity[i] = 0;
    }
    for (var currentCapacity = 0; currentCapacity <= capacity; currentCapacity++) {
        var currentMax = 0;
        types.forEach(function(cakeType) {
            if(cakeType.weight <= currentCapacity) {
                var maxValueThisCake = cakeType.value + maxValueAtCapacity[currentCapacity - cakeType.weight];
                currentMax = Math.max(maxValueThisCake, currentMax);
            }
        });
        maxValueAtCapacity[currentCapacity] = currentMax;
    }
	return maxValueAtCapacity[capacity];
}
