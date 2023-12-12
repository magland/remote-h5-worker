# remote-h5-worker

It is challenging to incorporate web workers and wasm text into libraries in such a way that they can be used reliably in parent projects. There is also an issue of not wanting the npm library to be too large, especially in the case of using large wasm chunks.

So this purpose of this repo is to house a compiled web worker that has the wasm text embedded in it.

While the code in src/RemoteH5File was used to produce the dist/RemoteH5Worker.js, this repo does not yet contain the instructions or scripts to do so.