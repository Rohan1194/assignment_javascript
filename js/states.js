$(document).ready(function () {
        drawStackChart();
    });
   //Draw Stack Chart
    var marginStackChart = { top: 20, right: 20, bottom: 30, left: 40 },
            widthStackChart = 1300 - marginStackChart.left - marginStackChart.right,
            heightStackChart = 700 - marginStackChart.top - marginStackChart.bottom;
   var xStackChart = d3.scaleBand()
            .range([0, widthStackChart])
            .padding(0.1);
    var yStackChart = d3.scaleLinear()
                .range([heightStackChart, 0]);
   var colorStackChart = d3.scaleOrdinal(["#98abc5 ", "#8a89a6 ", "#7b6888 ", "#6b486b ", "#a05d56 ", "#d0743c ", "#ff8c00 "])
   var canvasStackChart = d3.select("#Dash").append("svg")
        .attr("width", widthStackChart + marginStackChart.left + marginStackChart.right)
        .attr("height", heightStackChart + marginStackChart.top + marginStackChart.bottom)
        .append("g")
        .attr("transform", "translate(" + marginStackChart.left + "," + marginStackChart.top + ")");
   function drawStackChart() {
       var data = [
  {
    "2005": 2.98,
    "2006": 3.09,
    "2007": 3.98,
    "2008": 3.98,
    "2009": 3.98,
    "2010": 4.39,
    "2011": 3.441,
    "2012": 4.751,
    "2013": 4.1,
    "2014": 3.49,
    "State": "Agricultural Production Foodgrains Rice Area Andhra Pradesh"
  },
  {
    "2005": 1.15,
    "2006": 1.31,
    "2007": 1.49,
    "2008": 1.4,
    "2009": 1.42,
    "2010": 1.51,
    "2011": 1.487,
    "2012": 1.54,
    "2013": 1.42,
    "2014": 1.27,
    "State": "Agricultural Production Foodgrains Rice Area Karnataka"
  },
  {
    "2005": 0.29,
    "2006": 0.29,
    "2007": 0.28,
    "2008": 0.26,
    "2009": 0.23,
    "2010": 0.23,
    "2011": 0.234,
    "2012": 0.213,
    "2013": 0.21,
    "2014": 0.2,
    "State": "Agricultural Production Foodgrains Rice Area Kerala"
  },
  {
    "2005": 1.4,
    "2006": 1.87,
    "2007": 2.05,
    "2008": 1.93,
    "2009": 1.79,
    "2010": 1.93,
    "2011": 1.8455,
    "2012": 1.906,
    "2013": 1.9,
    "2014": 1.58,
    "State": "Agricultural Production Foodgrains Rice Area Tamil Nadu"
  }
];
           colorStackChart.domain(d3.keys(data[0]).filter(function (key) { return key !== "State"; }));
           data.forEach(function (d) {
                var y0 = 0;
                d.ages = colorStackChart.domain().map(function (name) { return { name: name, y0: y0, y1: y0 += +d[name] }; });
                d.total = d.ages[d.ages.length - 1].y1;
            });
           data.sort(function (a, b) { return b.total - a.total; });
           xStackChart.domain(data.map(function (d) { return d.State; }));
            yStackChart.domain([0, d3.max(data, function (d) { return d.total; })]);
           canvasStackChart.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + heightStackChart + ")")
            .call(d3.axisBottom(xStackChart));
           canvasStackChart.append("g")
            .attr("class", "y axis")
            .call(d3.axisLeft(yStackChart))
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("No Of Buildings");
           var state = canvasStackChart.selectAll(".State")
            .data(data)
            .enter().append("g")
            .attr("class", "g")
            .attr("transform", function (d) { return "translate(" + xStackChart(d.State) + ",0)"; });
           state.selectAll("rect")
            .data(function (d) { return d.ages; })
            .enter().append("rect")
            .attr("width", xStackChart.bandwidth())
            .attr("y", function (d) { return yStackChart(d.y1); })
            .attr("height", function (d) { return yStackChart(d.y0) - yStackChart(d.y1); })
            .style("fill", function (d) { return colorStackChart(d.name); });
           var legend = canvasStackChart.selectAll(".legend")
            .data(colorStackChart.domain().slice().reverse())
            .enter().append("g")
            .attr("class", "legend")
            .attr("transform", function (d, i) { return "translate(0," + i * 20 + ")"; });
           legend.append("rect")
            .attr("x", widthStackChart - 18)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", colorStackChart);
           legend.append("text")
            .attr("x", widthStackChart - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function (d) { return d; });
   }