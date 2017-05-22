// Print the lyrics to "99 bottles of beer on the wall"

for (i = 99; i > 0; i--) {
	minusBeer = i - 1;
	if (i != 1) {
		totalBeers = "bottles";
	} else {
		totalBeers = "bottle";
	}
}
console.log(i + " " + totalBeers + " of beer on the wall,");
console.log(i + " " + totalBeers + " of beer,");
console.log("Take 1 down, pass it around,");