function filt(list) {
    var newList = [];
    for(var i = 0; i < list.length; i++) {
        if(typeof(list[i]) !== "number")
            newList.push(list[i]);
    }
    return newList;
}

const myFriends = [1, 2, "Nam", "Hùng", 3, 4, "Hòa", 6, "Long"];
var newList = filt(myFriends);
console.log(newList);
