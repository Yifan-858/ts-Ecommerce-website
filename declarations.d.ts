declare module "three/examples/jsm/loaders/GLTFLoader" {
  import { Loader } from "three";
  export class GLTFLoader extends Loader {
    load(
      url: string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onLoad: (gltf: any) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }
}
