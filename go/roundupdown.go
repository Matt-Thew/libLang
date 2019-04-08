package main

import (
	"fmt"
	"math"
)

var myNumber = 2.33

func main() {
	roundUp := math.Ceil(myNumber)
	roundDown := math.Floor(myNumber)
	fmt.Println(roundDown, roundUp)
}
