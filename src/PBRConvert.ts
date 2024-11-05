import * as webglUtils from "./weblgutils";

export async function convertSpecToPBR(
  albedoImage: any,
  metalnessImage: any
): Promise<{
  baseColor: HTMLImageElement;
  metalic: HTMLImageElement;
}> {
  return new Promise((resolve) => {
    const metalicCanvas = getMetalic(albedoImage, metalnessImage);
    if (metalicCanvas) {
      metalicCanvas.onload = () => {
        resolve({
          baseColor: getBaseColor(albedoImage, metalnessImage, metalicCanvas),
          metalic: metalicCanvas,
        });
      };
    }
  });
}

export function convertGlossToRough(glossImage: any): HTMLImageElement {
  return specToGloss(glossImage);
}

function getMetalic(diffMap: any, specMap: any) {
  const canvas = document.createElement("canvas");
  canvas.width = diffMap.width;
  canvas.height = diffMap.height;
  var gl = canvas.getContext("webgl");
  if (!gl) {
    return;
  }

  // setup GLSL program
  var program = webglUtils.createProgramFromSources(gl, [
    diffSpecToMetalic.vertexShader,
    diffSpecToMetalic.fragmentShader,
  ]);
  gl.useProgram(program);

  // look up where the vertex data needs to go.
  var positionLocation = gl.getAttribLocation(program, "a_position");
  var texcoordLocation = gl.getAttribLocation(program, "a_texCoord");

  // Create a buffer to put three 2d clip space points in
  var positionBuffer = gl.createBuffer();

  // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  // Set a rectangle the same size as the image.
  setRectangle(gl, 0, 0, diffMap.width, diffMap.height);

  // provide texture coordinates for the rectangle.
  var texcoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([
      0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0,
    ]),
    gl.STATIC_DRAW
  );

  // create 2 textures

  var diffTexture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, diffTexture);

  // Set the parameters so we can render any size image.
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

  // Upload the image into the texture.
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, diffMap);

  var specTexture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, specTexture);

  // Set the parameters so we can render any size image.
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

  // Upload the image into the texture.
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, specMap);

  // add the texture to the array of textures.

  // lookup uniforms
  var resolutionLocation = gl.getUniformLocation(program, "u_resolution");

  // lookup the sampler locations.
  var u_image0Location = gl.getUniformLocation(program, "u_image0");
  var u_image1Location = gl.getUniformLocation(program, "u_image1");

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  // Clear the canvas
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Tell it to use our program (pair of shaders)
  gl.useProgram(program);

  // Turn on the position attribute
  gl.enableVertexAttribArray(positionLocation);

  // Bind the position buffer.
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Tell the position attribute how to get data out of positionBuffer (ARRAY_BUFFER)
  var size = 2; // 2 components per iteration
  var type = gl.FLOAT; // the data is 32bit floats
  var normalize = false; // don't normalize the data
  var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
  var offset = 0; // start at the beginning of the buffer
  gl.vertexAttribPointer(
    positionLocation,
    size,
    type,
    normalize,
    stride,
    offset
  );

  // Turn on the texcoord attribute
  gl.enableVertexAttribArray(texcoordLocation);

  // bind the texcoord buffer.
  gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);

  // Tell the texcoord attribute how to get data out of texcoordBuffer (ARRAY_BUFFER)
  var size = 2; // 2 components per iteration
  var type = gl.FLOAT; // the data is 32bit floats
  var normalize = false; // don't normalize the data
  var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
  var offset = 0; // start at the beginning of the buffer
  gl.vertexAttribPointer(
    texcoordLocation,
    size,
    type,
    normalize,
    stride,
    offset
  );

  // set the resolution
  gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);

  // set which texture units to render with.
  gl.uniform1i(u_image0Location, 0); // texture unit 0
  gl.uniform1i(u_image1Location, 1); // texture unit 1

  // Set each texture unit to use a particular texture.
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, diffTexture);
  gl.activeTexture(gl.TEXTURE1);
  gl.bindTexture(gl.TEXTURE_2D, specTexture);

  // Draw the rectangle.
  gl.drawArrays(gl.TRIANGLES, 0, 6);

  const renderImage = new Image();
  renderImage.src = (gl.canvas as HTMLCanvasElement).toDataURL();

  // renderImage.onload = () => {
  //   document.body.appendChild(renderImage);
  // }
  gl.getExtension("WEBGL_lose_context")?.loseContext();
  return renderImage;
}

function getBaseColor(
  diffMap: any,
  specMap: any,
  metMap: any
): HTMLImageElement {
  const canvas = document.createElement("canvas");
  canvas.width = diffMap.width;
  canvas.height = diffMap.height;
  var gl = canvas.getContext("webgl");

  if (!gl) {
    return new Image();
  }

  // setup GLSL program
  var program = webglUtils.createProgramFromSources(gl, [
    diffSpecToBaseColor.vertexShader,
    diffSpecToBaseColor.fragmentShader,
  ]);
  gl.useProgram(program);

  // look up where the vertex data needs to go.
  var positionLocation = gl.getAttribLocation(program, "a_position");
  var texcoordLocation = gl.getAttribLocation(program, "a_texCoord");

  // Create a buffer to put three 2d clip space points in
  var positionBuffer = gl.createBuffer();

  // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  // Set a rectangle the same size as the image.
  setRectangle(gl, 0, 0, diffMap.width, diffMap.height);

  // provide texture coordinates for the rectangle.
  var texcoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([
      0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0,
    ]),
    gl.STATIC_DRAW
  );

  // create 2 textures

  var diffTexture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, diffTexture);

  // Set the parameters so we can render any size image.
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

  // Upload the image into the texture.
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, diffMap);

  var specTexture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, specTexture);

  // Set the parameters so we can render any size image.
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

  // Upload the image into the texture.
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, specMap);

  var metTexture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, metTexture);

  // Set the parameters so we can render any size image.
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

  // Upload the image into the texture.
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, metMap);

  // add the texture to the array of textures.

  // lookup uniforms
  var resolutionLocation = gl.getUniformLocation(program, "u_resolution");

  // lookup the sampler locations.
  var u_image0Location = gl.getUniformLocation(program, "u_image0");
  var u_image1Location = gl.getUniformLocation(program, "u_image1");
  var u_image2Location = gl.getUniformLocation(program, "u_image2");

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  // Clear the canvas
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Tell it to use our program (pair of shaders)
  gl.useProgram(program);

  // Turn on the position attribute
  gl.enableVertexAttribArray(positionLocation);

  // Bind the position buffer.
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Tell the position attribute how to get data out of positionBuffer (ARRAY_BUFFER)
  var size = 2; // 2 components per iteration
  var type = gl.FLOAT; // the data is 32bit floats
  var normalize = false; // don't normalize the data
  var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
  var offset = 0; // start at the beginning of the buffer
  gl.vertexAttribPointer(
    positionLocation,
    size,
    type,
    normalize,
    stride,
    offset
  );

  // Turn on the texcoord attribute
  gl.enableVertexAttribArray(texcoordLocation);

  // bind the texcoord buffer.
  gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);

  // Tell the texcoord attribute how to get data out of texcoordBuffer (ARRAY_BUFFER)
  var size = 2; // 2 components per iteration
  var type = gl.FLOAT; // the data is 32bit floats
  var normalize = false; // don't normalize the data
  var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
  var offset = 0; // start at the beginning of the buffer
  gl.vertexAttribPointer(
    texcoordLocation,
    size,
    type,
    normalize,
    stride,
    offset
  );

  // set the resolution
  gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);

  // set which texture units to render with.
  gl.uniform1i(u_image0Location, 0); // texture unit 0
  gl.uniform1i(u_image1Location, 1); // texture unit 1
  gl.uniform1i(u_image2Location, 2); // texture unit 1

  // Set each texture unit to use a particular texture.
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, diffTexture);
  gl.activeTexture(gl.TEXTURE1);
  gl.bindTexture(gl.TEXTURE_2D, specTexture);
  gl.activeTexture(gl.TEXTURE2);
  gl.bindTexture(gl.TEXTURE_2D, metTexture);

  // Draw the rectangle.
  gl.drawArrays(gl.TRIANGLES, 0, 6);

  const renderImage = new Image();
  renderImage.src = (gl.canvas as HTMLCanvasElement).toDataURL();
  
  gl.getExtension("WEBGL_lose_context")?.loseContext();

  //mb change image to imageData
  return renderImage;
}

function specToGloss(image: any): HTMLImageElement {
  const canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;
  var gl = canvas.getContext("webgl");
  if (!gl) {
    return new Image();
  }

  // setup GLSL program
  var program = webglUtils.createProgramFromSources(gl, [
    glossToRough.vertexShader,
    glossToRough.fragmentShader,
  ]);

  // look up where the vertex data needs to go.
  var positionLocation = gl.getAttribLocation(program, "a_position");
  var texcoordLocation = gl.getAttribLocation(program, "a_texCoord");

  // Create a buffer to put three 2d clip space points in
  var positionBuffer = gl.createBuffer();

  // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  // Set a rectangle the same size as the image.
  setRectangle(gl, 0, 0, image.width, image.height);

  // provide texture coordinates for the rectangle.
  var texcoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([
      0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0,
    ]),
    gl.STATIC_DRAW
  );

  // Create a texture.
  var texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Set the parameters so we can render any size image.
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

  // Upload the image into the texture.
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

  // lookup uniforms
  var resolutionLocation = gl.getUniformLocation(program, "u_resolution");

  // Tell WebGL how to convert from clip space to pixels
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  // Clear the canvas
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Tell it to use our program (pair of shaders)
  gl.useProgram(program);

  // Turn on the position attribute
  gl.enableVertexAttribArray(positionLocation);

  // Bind the position buffer.
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  // Tell the position attribute how to get data out of positionBuffer (ARRAY_BUFFER)
  var size = 2; // 2 components per iteration
  var type = gl.FLOAT; // the data is 32bit floats
  var normalize = false; // don't normalize the data
  var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
  var offset = 0; // start at the beginning of the buffer
  gl.vertexAttribPointer(
    positionLocation,
    size,
    type,
    normalize,
    stride,
    offset
  );

  // Turn on the texcoord attribute
  gl.enableVertexAttribArray(texcoordLocation);

  // bind the texcoord buffer.
  gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);

  // Tell the texcoord attribute how to get data out of texcoordBuffer (ARRAY_BUFFER)
  var size = 2; // 2 components per iteration
  var type = gl.FLOAT; // the data is 32bit floats
  var normalize = false; // don't normalize the data
  var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
  var offset = 0; // start at the beginning of the buffer
  gl.vertexAttribPointer(
    texcoordLocation,
    size,
    type,
    normalize,
    stride,
    offset
  );

  // set the resolution
  gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);

  // Draw the rectangle.
  var primitiveType = gl.TRIANGLES;
  var offset = 0;
  var count = 6;
  gl.drawArrays(primitiveType, offset, count);

  const renderImage = new Image();
  renderImage.src = (gl.canvas as HTMLCanvasElement).toDataURL();
  
  gl.getExtension("WEBGL_lose_context")?.loseContext();
  return renderImage;
}

function setRectangle(gl: any, x: any, y: any, width: any, height: any) {
  var x1 = x;
  var x2 = x + width;
  var y1 = y;
  var y2 = y + height;
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([x1, y1, x2, y1, x1, y2, x1, y2, x2, y1, x2, y2]),
    gl.STATIC_DRAW
  );
}

const glossToRough = {
  uniforms: {
    tGloss: { value: null },
  },
  vertexShader: `
      attribute vec2 a_position;
      attribute vec2 a_texCoord;
  
      uniform vec2 u_resolution;
  
      varying vec2 v_texCoord;
  
      void main() {
          // convert the rectangle from pixels to 0.0 to 1.0
          vec2 zeroToOne = a_position / u_resolution;
  
          // convert from 0->1 to 0->2
          vec2 zeroToTwo = zeroToOne * 2.0;
  
          // convert from 0->2 to -1->+1 (clipspace)
          vec2 clipSpace = zeroToTwo - 1.0;
  
          gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
  
          // pass the texCoord to the fragment shader
          // The GPU will interpolate this value between points.
          v_texCoord = a_texCoord;
      }
      `,
  fragmentShader: `
          precision mediump float;
   
          // our texture
          uniform sampler2D u_image;
          
          // the texCoords passed in from the vertex shader.
          varying vec2 v_texCoord;
          
          void main() {
              // Look up a color from the texture.
              gl_FragColor = vec4(vec3(1.0 - texture2D(u_image, v_texCoord).g), 1);
            
          } 
      `,
};

const diffSpecToBaseColor = {
  uniforms: {
    tGloss: { value: null },
  },
  vertexShader: `
      attribute vec2 a_position;
  attribute vec2 a_texCoord;
  
  uniform vec2 u_resolution;
  
  varying vec2 v_texCoord;
  
  void main() {
     // convert the rectangle from pixels to 0.0 to 1.0
     vec2 zeroToOne = a_position / u_resolution;
  
     // convert from 0->1 to 0->2
     vec2 zeroToTwo = zeroToOne * 2.0;
  
     // convert from 0->2 to -1->+1 (clipspace)
     vec2 clipSpace = zeroToTwo - 1.0;
  
     gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
  
     // pass the texCoord to the fragment shader
     // The GPU will interpolate this value between points.
     v_texCoord = a_texCoord;
  }
      `,
  fragmentShader: `
      precision mediump float;
  
  // our textures
  uniform sampler2D u_image0;
  uniform sampler2D u_image1;
  uniform sampler2D u_image2;
  
  // the texCoords passed in from the vertex shader.
  varying vec2 v_texCoord;
  
  vec3 lerp(vec3 a, vec3 b, vec3 w)
  {
    return a + w*(b-a);
  }
  
  float brightness(float r, float g, float b)
  {
       return sqrt(
       r * r * 0.299 +
       g * g * 0.587 +
       b * b * 0.114);
  }
  
  float solveMetallic(float dif, float spec, float strengthSpec)
  {
      if (spec < 0.04){
        return 0.0;
      }
  
      float a = 0.04;
      float b = dif * strengthSpec / (1.0 - 0.04) + spec - 2.0 * 0.04;
      float c = 0.04 - spec;
      float D = max(b * b - 4.0 * a * c, 0.0);
      return clamp((-b + sqrt(D)) / (2.0 * a), 0.0, 1.0);
  }
  
  void main() {
    float epsilon = 1e-6;
    vec4 diffCol = texture2D(u_image0, v_texCoord);//diffuse
    vec4 specCol = texture2D(u_image1, v_texCoord);//metall
    vec3 metCol = texture2D(u_image2, v_texCoord).rgb;//metall
  
    float oneMinusSpecularStrength = 1.0 - max(specCol.r, max(specCol.g, specCol.b));
    // vec3 metCol = vec3(solveMetallic(brightness(diffCol.r, diffCol.g, diffCol.b), brightness(specCol.r, specCol.g, specCol.b), oneMinusSpecularStrength));
  
    vec3 baseColorFromDiffuse = (diffCol * (oneMinusSpecularStrength / (1.0 - 0.04) / max(1.0 - metCol.r, epsilon))).rgb;
    vec3 baseColorFromSpecular = (specCol - ((0.04 * (1.0 / max(metCol.r, epsilon))) * (1.0 - metCol.r))).rgb;
    baseColorFromSpecular = clamp(baseColorFromSpecular, 0.0, 1.0);
    
     gl_FragColor = vec4(lerp(baseColorFromDiffuse, baseColorFromSpecular, metCol), 1.0);
  }
      `,
};

const diffSpecToMetalic = {
  uniforms: {
    tGloss: { value: null },
  },
  vertexShader: `
      attribute vec2 a_position;
  attribute vec2 a_texCoord;
  
  uniform vec2 u_resolution;
  
  varying vec2 v_texCoord;
  
  void main() {
     // convert the rectangle from pixels to 0.0 to 1.0
     vec2 zeroToOne = a_position / u_resolution;
  
     // convert from 0->1 to 0->2
     vec2 zeroToTwo = zeroToOne * 2.0;
  
     // convert from 0->2 to -1->+1 (clipspace)
     vec2 clipSpace = zeroToTwo - 1.0;
  
     gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
  
     // pass the texCoord to the fragment shader
     // The GPU will interpolate this value between points.
     v_texCoord = a_texCoord;
  }
      `,
  fragmentShader: `
      precision mediump float;
  
  // our textures
  uniform sampler2D u_image0;
  uniform sampler2D u_image1;
  
  // the texCoords passed in from the vertex shader.
  varying vec2 v_texCoord;
  
  vec4 lerp(vec4 a, vec4 b, vec4 w)
  {
    return a + w*(b-a);
  }
  
  float brightness(float r, float g, float b)
  {
       return sqrt(
       r * r * 0.299 +
       g * g * 0.587 +
       b * b * 0.114);
  }
  
  float solveMetallic(float dif, float spec, float strengthSpec)
  {
      if (spec < 0.04){
        return 0.0;
      }
      float a = 0.04;
      float b = dif * strengthSpec / (1.0 - 0.04) + spec - 2.0 * 0.04;
      float c = 0.04 - spec;
      float D = max(b * b - 4.0 * a * c, 0.0);
      return clamp((-b + sqrt(D)) / (2.0 * a), 0.0, 1.0);
  }
  
  void main() {
    float epsilon = 1e-6;
    vec4 diffCol = texture2D(u_image0, v_texCoord);//diffuse
    vec4 specCol = texture2D(u_image1, v_texCoord);//metall
  
    float oneMinusSpecularStrength = 1.0 - max(specCol.r, max(specCol.g, specCol.b));
    float testtt = brightness(specCol.r, specCol.g, specCol.b);
    vec3 metCol = vec3(solveMetallic(brightness(diffCol.r, diffCol.g, diffCol.b), brightness(specCol.r, specCol.g, specCol.b), oneMinusSpecularStrength));  
     gl_FragColor = vec4(metCol, 1.0);
  }
      `,
};
