import * as THREE from 'three'

let clock: THREE.Clock
let renderer: THREE.WebGLRenderer
let camera: THREE.PerspectiveCamera
let scene: THREE.Scene
let mixer: THREE.AnimationMixer

export default class MegaBotScene {
  constructor() {
    this.loadCamera()
    this.loadScene()
    this.loadClock()
  }

  public addModel(model: THREE.Group<THREE.Object3DEventMap>) {
    scene.add(model)
  }

  public loadRender() {
    renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(500, 500)
    renderer.setAnimationLoop(this.animateScene)

    return renderer
  }

  public loadMixer(model: THREE.Group<THREE.Object3DEventMap>) {
    mixer = new THREE.AnimationMixer(model)
    return mixer
  }

  private loadCamera() {
    camera = new THREE.PerspectiveCamera(45, 500 / 500, 0.25, 100)

    camera.position.set(-5, 3, 10)
    camera.lookAt(0, 2, 0)
  }

  private loadScene() {
    scene = new THREE.Scene()
    scene.background = new THREE.Color('snow')
    scene.fog = new THREE.Fog(0xe0e0e0, 20, 100)
    scene.background = null

    // ** Lights
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 3)
    hemiLight.position.set(0, 20, 0)
    scene.add(hemiLight)

    const dirLight = new THREE.DirectionalLight(0xffffff, 3)
    dirLight.position.set(0, 20, 10)
    scene.add(dirLight)
  }

  private loadClock() {
    clock = new THREE.Clock()
  }

  private animateScene() {
    const dt = clock.getDelta()

    if (mixer) {
      mixer.update(dt)
    }

    renderer.render(scene, camera)
  }
}
