import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('webgl') webGlCanvas: any;

  constructor() {}

  ngOnInit(): void {
    this.startAnimation();
  }

  ngAfterViewInit() {
    console.log(this.webGlCanvas.nativeElement);
    this.initialise3DCanvas();
  }

  initialise3DCanvas() {
    //Scene
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color( "#ffffff" );
    //Objects
    const geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);

    //Materials
    const material = new THREE.MeshBasicMaterial();
    material.color = new THREE.Color(0xff0000);

    //Mesh

    const gltfLoader = new GLTFLoader();
    const url = 'assets/models/cartoon_lowpoly_small_city_free_pack/scene.gltf';
    gltfLoader.load(url, (gltf) => {
      const root = gltf.scene;
      // scene.add(root);
    });
    //Lights
    const pointLights = new THREE.PointLight(0xffff, 0.1);
    pointLights.position.x = 2;
    pointLights.position.y = 3;
    pointLights.position.z = 4;
    const ambientLight = new THREE.AmbientLight(0xfff0000, 1);
    scene.add(pointLights);

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener('resize', () => {
      //Update sizes
      sizes.width = window.innerWidth;
      sizes.width = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    //Camera
    const camera = new THREE.PerspectiveCamera(75);
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 2;
    scene.add(camera);

    //Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: this.webGlCanvas.nativeElement,
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    //Animate
    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update objects

      // Update Orbital Controls
      // controls.update()

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  }

  startAnimation() {}
}
