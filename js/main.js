// Rachel Cassway
// JS file for ic-08

const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500; 
const MARGINS = {left: 50, right:50, top:50, bottom:50};

// build frame in div for bar chart
const FRAME1 = d3.select("#vis1")
				.append("svg")
					.attr("height", FRAME_HEIGHT + MARGINS.top + MARGINS.bottom)
					.attr("width", FRAME_WIDTH + MARGINS.left + MARGINS.right)
				.append("g")
					.attr("transform", "translate(" + MARGINS.left + "," + MARGINS.top + ")");

// open data file then plot bars
d3.csv("data/data.csv").then((data) => {

	// X axis
	var x = d3.scaleBand()
	  .range([ 0, FRAME_WIDTH ])
	  .domain(data.map(function(d) { return d.Category; }))
	  .padding(0.2);
	svg.append("g")
	  .attr("transform", "translate(0," + FRAME_HEIGHT + ")")
	  .call(d3.axisBottom(x))
	  .selectAll("text")
	    .attr("transform", "translate(-10,0)rotate(-45)")
	    .style("text-anchor", "end");

	// Add Y axis
	var y = d3.scaleLinear()
	  .domain([0, 13000])
	  .range([ FRAME_HEIGHT, 0]);
	svg.append("g")
	  .call(d3.axisLeft(y));


	FRAME1.selectAll("bar")
			.data(data)
			.enter()
			.append("rect")
				.attr("x", (d) => {return d.Category; })
				.attr("y", (d) => {return d.Value; })
				.attr("width", x.bandwidth())
				.attr("height", (d) => {FRAME_HEIGHT - d.y; })
				.attr("fill", "lightblue")
});