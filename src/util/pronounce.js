/** Choose good ending according to number
* 32 ['час', 'часа', 'часов'] → 32 часа
*/
export default function pronunciation (number, endings) {
	var sEnding, i
	number = number % 100
	if (number >= 11 && number <= 19) {
		sEnding = endings[2]
	} else {
		i = number % 10
		switch (i) {
			case (1): sEnding = endings[0]; break
			case (2):
			case (3):
			case (4): sEnding = endings[1]; break
			default: sEnding = endings[2]
		}
	}
	return sEnding
}
