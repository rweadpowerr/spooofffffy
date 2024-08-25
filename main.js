function heapSpray(size, count) {
  let sprays = []; 
  let bufferArray = []; 
  let counter = 0;

  for (var i = 0; i < count; i++) 
    // Allocate large string{
ffer allocation
    bufferArray.push(new ArrayBuffer(size));
    if (bufferArray.length > 1000) {
      bufferArray = [];
    }

    // Object property expansion
    let obj = {};
    obj[counter] = "A".repeat(1000);
    counter++;

    // Push to sprays
w heap spray
 as necessary
chunkSize, sprayCount);
or (var i = 0; i < sprays.length; i++) 
    var ptr = sprays[i];{
ry chunk
    // (Note: Actual memory manipulation would depend on the environment)
    // p.write8(ptr.add32(0x100), i); // Example offset and data
