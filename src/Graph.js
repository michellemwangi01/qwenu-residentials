const PriceGraph = ({ minPrice, maxPrice, currentPrice }) => {
    useEffect(() => {
      // Set the width and height of the graph
      const width = 200;
      const height = 300;
  
      // Create a scale to map price values to graph height
      const priceScale = d3.scaleLinear().domain([minPrice, maxPrice]).range([0, height]);
  
      // Select the graph container
      const svg = d3.select('#priceGraph');
  
      // Create a rectangle for the price range background
      svg
        .append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', width)
        .attr('height', height)
        .attr('fill', '#f0f0f0');
  
      // Create a rectangle for the current price indicator
      svg
        .append('rect')
        .attr('x', 0)
        .attr('y', priceScale(currentPrice))
        .attr('width', width)
        .attr('height', height - priceScale(currentPrice))
        .attr('fill', '#007bff');
  
      // Create a line for the price range
      svg
        .append('line')
        .attr('x1', 0)
        .attr('y1', priceScale(minPrice))
        .attr('x2', width)
        .attr('y2', priceScale(minPrice))
        .attr('stroke', '#555');
  
      svg
        .append('line')
        .attr('x1', 0)
        .attr('y1', priceScale(maxPrice))
        .attr('x2', width)
        .attr('y2', priceScale(maxPrice))
        .attr('stroke', '#555');
    }, [minPrice, maxPrice, currentPrice]);
  
    return <svg id="priceGraph" width="200" height="300"></svg>;
  };
  
  export default PriceGraph;